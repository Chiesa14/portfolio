"use client";

import Button from "./Button";

export default function ListRecntWorks() {
  const caseStudies = [
    {
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      coverImage: "/images/demo.png",
    },
    {
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      coverImage: "/images/demo.png",
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
      {caseStudies.map((item, id) => (
        <div key={id} className="mb-8 sm:mb-12 lg:mb-20">
          <div className="w-full h-[250px] sm:h-[280px] lg:h-[300px] group overflow-hidden rounded-lg mb-6 sm:mb-8">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url('${item.coverImage}')` }}
            ></div>
          </div>
          <p className="text-xl sm:text-2xl mb-4 sm:mb-6 lg:mb-8 text-black dark:text-white font-bold leading-tight">
            {item.title}
          </p>
          <p
            className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed"
            style={{ wordSpacing: "0.4rem" }}
          >
            {item.description}
          </p>
          <Button
            text="Know more"
            className="px-4 sm:px-5 py-2 text-sm sm:text-base w-full sm:w-auto"
            color="green"
            size={14}
          />
        </div>
      ))}
    </div>
  );
}
