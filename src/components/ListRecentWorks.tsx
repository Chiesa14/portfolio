"use client";

import Button from "./Button";

export default function ListRecntWorks() {
  const projects = [
    {
      title: "Brop",
      description:
        "A public website created by the Brop-co organization. It serves as an online platform where users can visit, interact with, and learn more about Brop-co and what they offer.",
      coverImage: "/images/brop.png",
      link: "https://www.brop.co.rw",
    },
    {
      title: "ERC Youth System",
      description:
        "A system that streamlines church operations, including member management, event tracking, and administrative tasks, helping improve coordination and engagement among members.",
      coverImage: "/images/erc.png",
      link: "https://erc-system.vercel.app",
    },
  ];

  const handleKnowMoreClick = (link: string | URL | undefined) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
      {projects.map((item, id) => (
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
            onClick={() => handleKnowMoreClick(item.link)}
          />
        </div>
      ))}
    </div>
  );
}
