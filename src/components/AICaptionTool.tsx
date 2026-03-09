"use client";

import { useState } from "react";
import { generateSocialMediaCaptions } from "@/ai/flows/generate-social-media-captions-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AICaptionTool() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ caption: string; hashtags: string[] } | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  async function handleGenerate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const input = {
      projectType: formData.get("projectType") as string,
      theme: formData.get("theme") as string,
      keyAspects: formData.get("keyAspects") as string,
      tone: formData.get("tone") as string,
    };

    try {
      const output = await generateSocialMediaCaptions(input);
      setResult(output);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error generating captions",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const copyToClipboard = () => {
    if (!result) return;
    const text = `${result.caption}\n\n${result.hashtags.join(" ")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      description: "Copied to clipboard",
    });
  };

  return (
    <section id="ai-tool" className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full">
                <Sparkles className="w-3 h-3" /> Photographer's AI Assistant
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                AI Social Media <span className="text-primary italic">Creator</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Generate high-engagement captions and optimized hashtags for your latest shoot in seconds. 
                Perfect for Instagram, LinkedIn, and personal branding.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6 bg-background p-8 border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-widest text-muted-foreground">Project Type</Label>
                  <Input name="projectType" required placeholder="e.g. Brand Session" className="bg-card border-white/10 rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-widest text-muted-foreground">Style/Theme</Label>
                  <Input name="theme" required placeholder="e.g. Minimalist/Dark" className="bg-card border-white/10 rounded-none h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-widest text-muted-foreground">Key Aspects</Label>
                <Textarea name="keyAspects" required placeholder="e.g. Focus on natural light, dynamic movement" className="bg-card border-white/10 rounded-none min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-widest text-muted-foreground">Tone</Label>
                <select name="tone" className="w-full bg-card border border-white/10 p-3 text-sm rounded-none focus:ring-1 focus:ring-primary appearance-none h-12">
                  <option value="professional">Professional</option>
                  <option value="inspirational">Inspirational</option>
                  <option value="playful">Playful</option>
                  <option value="luxurious">Luxurious</option>
                </select>
              </div>
              <Button type="submit" disabled={isLoading} className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-[0.2em] uppercase font-bold transition-all duration-300">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Sparkles className="w-5 h-5 mr-2" />}
                Generate Content
              </Button>
            </form>
          </div>

          <div className="lg:w-1/2 w-full h-full min-h-[400px]">
            <div className="h-full border border-dashed border-white/10 rounded-none flex flex-col items-center justify-center p-8 text-center bg-background/30 relative min-h-[500px]">
              {!result && !isLoading && (
                <div className="space-y-4 opacity-30">
                  <div className="w-16 h-16 border border-primary rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-headline tracking-widest uppercase text-sm">Generated content will appear here</p>
                </div>
              )}

              {isLoading && (
                <div className="space-y-4">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                  <p className="font-headline tracking-widest uppercase text-sm animate-pulse">Crafting your story...</p>
                </div>
              )}

              {result && (
                <div className="w-full text-left space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <h3 className="font-headline font-bold tracking-widest uppercase text-primary">Your Caption</h3>
                    <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-xs tracking-widest hover:text-primary">
                      {copied ? <Check className="w-3 h-3 mr-2" /> : <Copy className="w-3 h-3 mr-2" />}
                      {copied ? "COPIED" : "COPY ALL"}
                    </Button>
                  </div>
                  <div className="bg-card p-6 border border-white/5 shadow-inner">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-light">{result.caption}</p>
                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                      {result.hashtags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-primary/80 font-mono tracking-tight bg-primary/5 px-2 py-1">
                          #{tag.replace(/^#/, '')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
