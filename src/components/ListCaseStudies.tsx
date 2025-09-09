"use client";

import Button from "./Button";

export default function ListCaseStudies() {
  const caseStudies = [
    {
      category: "FinTech",
      title: "AC Group – Digitizing Public Transport Payments",
      description:
        "AC Group, a Rwandan tech startup, digitized public transport payments with a contactless Tap & Go system, serving 1.5 million customers and facilitating over 170 million trips, increasing bus operators' revenue by over 30%.",
      coverImage: "/images/ac-group.jpg",
      link: "https://www.acgroup.rw/",
    },
    {
      category: "EdTech",
      title: "O’Genius Priority – Interactive STEM Learning Platform",
      description:
        "O’Genius Priority offers computer-based interactive experiments and lessons for secondary students, reaching over 9,000 active users across all districts in Rwanda and winning multiple international awards for educational innovation.",
      coverImage: "/images/opanda.jpeg",
      link: "https://ogeniuspriority.com/",
    },
    {
      category: "Healthcare",
      title: "Zipline – Drone Delivery for Medical Supplies",
      description:
        "Zipline partners with the Rwandan government to deliver blood, vaccines, and essentials via drones to remote facilities in minutes, serving hundreds of health centers and reducing delivery times from hours to under 15 minutes.",
      coverImage: "/images/zipline.jpg",
      link: "https://www.zipline.com/stories/rwanda",
    },
    {
      category: "Cloud",
      title: "Leading ISP – Rwanda's First Domestic Cloud Service",
      description:
        "A leading Rwandan ISP launched the country's inaugural domestic cloud platform, scaling operations 3x in 8 months, acquiring 300+ enterprise customers, and achieving 200% quarter-on-quarter revenue growth with full automation.",
      coverImage: "/images/isp.jpg",
      link: "https://www.apiculus.com/case-studies/leading-isp-in-rwanda-launches-countrys-1st-ever-domestic-cloud-service.php",
    },
  ];

  const handleCaseStudyClick = (link: string | URL | undefined) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

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
                    : item.category == "Pharma" || item.category == "Healthcare"
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
                onClick={() => handleCaseStudyClick(item.link)}
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
