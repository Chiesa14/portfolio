"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function ListTestimonials() {
  const testimonials = [
    {
      name: "Sarah Munyampuhwe",
      message:
        "Working with him was incredible. He delivered exactly what we needed and exceeded our expectations. The attention to detail and professionalism was outstanding.",
      image: "/images/use.png",
    },
    {
      name: "Celestim Nzeyimana",
      message:
        "The project was completed on time and within budget. Communication was excellent throughout the process, and the final result helped boost our business significantly.",
      image: "/images/use1.jpeg",
    },
    {
      name: "Mugabo Christian",
      message:
        "I was impressed by his creative approach and technical expertise. He took our vision and turned it into something even better than we imagined. Highly recommended!",
      image: "/images/use3.jpeg",
    },
    {
      name: "Ishimwe Justin",
      message:
        "Professional, reliable, and talented. He solved complex problems with elegant solutions and was always available when I had questions. Will definitely work with him again.",
      image: "/images/use2.jpeg",
    },
    {
      name: "Isadora Jane",
      message:
        "The quality of work speaks for itself. From initial consultation to final delivery, every step was handled with care and expertise. Our ROI improved dramatically after launch.",
      image: "/images/use4.jpeg",
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
