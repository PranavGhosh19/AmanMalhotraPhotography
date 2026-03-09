"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Invalid email address." }),
  discussion: z.string().min(10, { message: "Please provide a bit more detail." }),
});

export function BookingModal({ trigger }: { trigger: React.ReactNode }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      discussion: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 500);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[540px] bg-card border-white/10 text-foreground p-0 overflow-hidden rounded-[4px] shadow-2xl">
        <div className="p-12">
          {!isSubmitted ? (
            <>
              <DialogHeader className="mb-8 space-y-2">
                <DialogTitle className="font-headline text-[1.6rem] font-medium tracking-tight">Book a Session</DialogTitle>
                <DialogDescription className="text-muted-foreground font-light text-[0.9rem]">
                  Fill in the details and I'll get back to you within 24 hours.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[0.75rem] uppercase tracking-[0.12em] text-muted-foreground font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10 rounded-[2px] h-12 focus:border-primary transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-[0.75rem] uppercase tracking-[0.12em] text-muted-foreground font-medium">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 00000 00000" {...field} className="bg-white/5 border-white/10 rounded-[2px] h-12 focus:border-primary transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-[0.75rem] uppercase tracking-[0.12em] text-muted-foreground font-medium">Email ID</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} className="bg-white/5 border-white/10 rounded-[2px] h-12 focus:border-primary transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="discussion"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[0.75rem] uppercase tracking-[0.12em] text-muted-foreground font-medium">Discussion About</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project, brand, or shoot idea..." 
                            {...field} 
                            className="bg-white/5 border-white/10 rounded-[2px] min-h-[120px] focus:border-primary transition-colors resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-background rounded-[2px] tracking-[0.12em] uppercase text-[0.85rem] font-semibold btn-transition">
                    Send Enquiry
                  </Button>
                </form>
              </Form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-in zoom-in-95">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-3xl font-medium tracking-tight">Message Received!</h3>
                <p className="text-muted-foreground max-w-sm font-light text-[0.95rem]">
                  Thanks for reaching out, {form.getValues().name}. I'll review your details and be in touch within 24 hours.
                </p>
              </div>
              <Button 
                onClick={() => handleOpenChange(false)}
                className="mt-4 px-8 h-12 bg-muted hover:bg-muted/80 text-foreground rounded-[2px] tracking-widest uppercase text-xs font-medium"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}