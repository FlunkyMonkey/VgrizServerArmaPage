import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { insertFeedbackSchema } from "@shared/schema";
import { Check, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const feedbackFormSchema = insertFeedbackSchema.extend({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  message: z.string().min(10, { message: "Feedback must be at least 10 characters" }),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export default function FeedbackForm() {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "general",
      message: "",
    },
  });

  const feedbackMutation = useMutation({
    mutationFn: async (data: FeedbackFormValues) => {
      const response = await apiRequest("POST", "/api/feedbacks", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your input. We appreciate your contribution!",
      });
      form.reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to submit feedback: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FeedbackFormValues) {
    feedbackMutation.mutate(data);
  }

  return (
    <section id="feedback" className="py-12 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#F2F0EB]">
            Share Your <span className="text-primary font-black">Feedback</span>
          </h2>
          <p className="text-lg text-[#D0CFC0] max-w-3xl mx-auto">
            We're constantly improving our server based on your input. Let us know about your experience, report issues, or suggest improvements.
          </p>
        </div>
        
        <Card className="bg-[#222520] border border-[#5D6E4C] shadow-lg">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#F2F0EB] font-medium">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-[#1A1D18] border-[#5D6E4C] focus:border-primary text-[#F2F0EB]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#F2F0EB] font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            className="bg-[#1A1D18] border-[#5D6E4C] focus:border-primary text-[#F2F0EB]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#F2F0EB] font-medium">Feedback Category</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#1A1D18] border-[#5D6E4C] focus:border-primary text-[#F2F0EB]">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#1A1D18] border-[#5D6E4C] text-[#F2F0EB]">
                          <SelectItem value="general">General Feedback</SelectItem>
                          <SelectItem value="performance">Performance Report</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="suggestion">Suggestion</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#F2F0EB] font-medium">Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please share your thoughts, experiences, or report any issues you've encountered..." 
                          className="bg-[#1A1D18] border-[#5D6E4C] focus:border-primary text-[#F2F0EB]"
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary-dark text-white"
                    disabled={feedbackMutation.isPending}
                  >
                    {feedbackMutation.isPending ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Submit Feedback
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {showSuccess && (
          <div className="mt-8 bg-[#2B392B] border border-[#5D9E60] rounded-lg p-6 shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Check className="h-8 w-8 text-[#5D9E60]" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-[#5D9E60]">Feedback Submitted Successfully!</h4>
                <p className="text-[#D0CFC0] mt-1">Thank you for your input. We appreciate your contribution to making our server better!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
