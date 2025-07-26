"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Button from "@/components/Button";

// Zod schema
const contactSchema = z.object({
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function GetInTouch() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactForm) {
    toast.success("Submitted successfully!");
    console.log(data);
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
              text="Submit"
              color="green"
              className="w-full py-3 sm:py-4 text-base sm:text-lg mt-4 sm:mt-6"
              onClick={() => onSubmit(form.getValues())}
            />
          </form>
        </Form>
      </div>
    </section>
  );
}
