'use server';
/**
 * @fileOverview A Genkit flow for generating social media captions and hashtag suggestions for photographers.
 *
 * - generateSocialMediaCaptions - A function that generates social media captions and hashtags.
 * - GenerateSocialMediaCaptionsInput - The input type for the generateSocialMediaCaptions function.
 * - GenerateSocialMediaCaptionsOutput - The return type for the generateSocialMediaCaptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSocialMediaCaptionsInputSchema = z.object({
  projectType: z
    .string()
    .describe('The type of photography project (e.g., "brand photography", "portrait session", "event coverage").'),
  theme: z.string().describe('The main theme or style of the photography (e.g., "minimalist", "vibrant", "moody", "corporate").'),
  keyAspects: z
    .string()
    .describe('Key aspects or unique selling points of the photography (e.g., "focus on product details", "capturing candid emotions", "dynamic compositions").'),
  tone: z
    .string()
    .describe('The desired tone for the caption (e.g., "professional", "playful", "inspirational", "luxurious").'),
});
export type GenerateSocialMediaCaptionsInput = z.infer<
  typeof GenerateSocialMediaCaptionsInputSchema
>;

const GenerateSocialMediaCaptionsOutputSchema = z.object({
  caption: z.string().describe('A unique and engaging social media caption.'),
  hashtags: z
    .array(z.string())
    .describe('A list of relevant hashtag suggestions to increase visibility.'),
});
export type GenerateSocialMediaCaptionsOutput = z.infer<
  typeof GenerateSocialMediaCaptionsOutputSchema
>;

export async function generateSocialMediaCaptions(
  input: GenerateSocialMediaCaptionsInput
): Promise<GenerateSocialMediaCaptionsOutput> {
  return generateSocialMediaCaptionsFlow(input);
}

const generateSocialMediaCaptionsPrompt = ai.definePrompt({
  name: 'generateSocialMediaCaptionsPrompt',
  input: {schema: GenerateSocialMediaCaptionsInputSchema},
  output: {schema: GenerateSocialMediaCaptionsOutputSchema},
  prompt: `You are an expert social media manager for a professional photographer. Your goal is to create compelling social media captions and highly relevant hashtag suggestions.

Based on the following project details, craft one engaging caption and provide a list of 10-15 specific and effective hashtags. The hashtags should include a mix of popular, niche, and location-based (if applicable) tags.

Project Type: {{{projectType}}}
Theme: {{{theme}}}
Key Aspects: {{{keyAspects}}}
Desired Tone: {{{tone}}}

Ensure the caption is concise, attention-grabbing, and encourages engagement. The hashtags should maximize discoverability.
`,
});

const generateSocialMediaCaptionsFlow = ai.defineFlow(
  {
    name: 'generateSocialMediaCaptionsFlow',
    inputSchema: GenerateSocialMediaCaptionsInputSchema,
    outputSchema: GenerateSocialMediaCaptionsOutputSchema,
  },
  async input => {
    const {output} = await generateSocialMediaCaptionsPrompt(input);
    return output!;
  }
);
