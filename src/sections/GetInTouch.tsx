"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Button from "@/components/Button";

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");

// Zod schema - Added name field
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactForm) {
    setIsSubmitting(true);

    try {
      // EmailJS template parameters - Added name field
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        to_email: "remychiesa14@gmail.com",
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        templateParams
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="get-in-touch"
      className="min-h-screen pt-22  lg:pt-20 text-[#9C9C9C] w-full dark:bg-[#080808] bg-white transition-all duration-300 px-4 sm:px-8 mb-8"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center dark:text-white text-black mb-4">
          Get In Touch
        </p>
        <p
          className="w-full sm:w-3/4 lg:w-[60%] mx-auto text-center mt-2 tracking-wider text-sm sm:text-base leading-relaxed mb-8 sm:mb-12"
          style={{ wordSpacing: "0.4rem" }}
        >
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-lg mx-auto mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid w-full items-center gap-2 sm:gap-3">
                  <FormLabel className="font-bold text-sm sm:text-base text-black dark:text-white">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Please enter your name"
                      className="py-4 sm:py-6 text-sm sm:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid w-full items-center gap-2 sm:gap-3">
                  <FormLabel className="font-bold text-sm sm:text-base text-black dark:text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Please enter your email"
                      className="py-4 sm:py-6 text-sm sm:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="grid w-full items-center gap-2 sm:gap-3">
                  <FormLabel className="font-bold text-sm sm:text-base text-black dark:text-white">
                    Mobile
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter mobile"
                      className="py-4 sm:py-6 text-sm sm:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="grid w-full gap-2 sm:gap-3">
                  <FormLabel className="font-bold text-sm sm:text-base text-black dark:text-white">
                    Your message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      id="message"
                      className="min-h-32 sm:min-h-40 h-32 sm:h-40 max-h-40 sm:max-h-48 text-sm sm:text-base resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />

            <Button
              text={isSubmitting ? "Sending..." : "Submit"}
              color="green"
              className={`w-full py-3 sm:py-4 text-base sm:text-lg mt-4 sm:mt-6  ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
            />
          </form>
        </Form>
      </div>
    </section>
  );
}
