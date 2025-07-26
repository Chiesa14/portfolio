"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function ListTestimonials() {
  const testimonials = [
    {
      name: "Client Name",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/use.png",
    },
    {
      name: "Client Name",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/use.png",
    },
    {
      name: "Client Name",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/use.png",
    },
    {
      name: "Client Name",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/use.png",
    },
    {
      name: "Client Name",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/use.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="relative rounded-lg p-[1px] bg-gradient-to-r from-[#444444] via-85% via-transparent to-transparent mb-4 sm:mb-5 h-fit"
        >
          <FaQuoteLeft
            className="absolute top-[-8px] sm:top-[-12px] left-6 sm:left-8 text-black dark:text-[#9C9C9C] z-10"
            size={18}
          />

          <div className="rounded-lg bg-white dark:bg-[#080808] p-4 sm:p-6 lg:p-8 h-full">
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {testimonial.message}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                width={100}
                height={100}
              />
              <p className="font-semibold dark:text-white text-black text-base sm:text-lg">
                {testimonial.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
