"use client";

import Button from "./Button";

export default function ListCaseStudies() {
  const caseStudies = [
    {
      category: "FinTech",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      coverImage: "/images/demo.png",
    },
    {
      category: "EdTech",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      coverImage: "/images/demo.png",
    },
    {
      category: "Pharma",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      coverImage: "/images/demo.png",
    },
    {
      category: "FinTech",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
      coverImage: "/images/demo.png",
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 lg:mt-32">
      {caseStudies.map((item, id) => (
        <div key={id} className="mb-16 sm:mb-20 lg:mb-24">
          <div
            className={`flex flex-col lg:flex-row ${
              (id + 1) % 2 == 0 ? "lg:flex-row-reverse" : ""
            } items-stretch gap-6 lg:gap-0`}
          >
            {/* Content Section */}
            <div
              className={`w-full lg:w-[50%] ${
                (id + 1) % 2 == 0 ? "lg:pl-8" : "lg:pr-8"
              } order-2 lg:order-1`}
            >
              <div
                className={`px-3 sm:px-4 w-fit rounded-full mb-4 sm:mb-6 lg:mb-8 font-bold py-1 text-xs sm:text-sm ${
                  item.category == "EdTech"
                    ? "bg-[#D0E6FF] text-[#000AFF]"
                    : item.category == "Pharma"
                    ? "bg-[#E0FFF8] text-[#2AB090]"
                    : "bg-[#FFF6E9] text-[#FFA217]"
                }`}
              >
                <p>{item.category}</p>
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
                text="Visit case study"
                className="px-4 sm:px-5 py-2 text-sm sm:text-base w-full sm:w-auto"
                color={
                  item.category == "EdTech"
                    ? "blue"
                    : item.category == "Pharma"
                    ? "sky"
                    : "orange"
                }
                size={16}
              />
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[50%] group overflow-hidden rounded-lg min-h-[250px] sm:min-h-[300px] lg:min-h-[300px] order-1 lg:order-2">
              {/* <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110 "
                style={{ backgroundImage: `url('${item.coverImage}')` }}
              ></div> */}
              <div className="w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[5/2] lg:aspect-auto lg:h-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.coverImage}')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
