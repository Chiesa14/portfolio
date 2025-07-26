"use client";

import Image from "next/image";

export default function WorkedWith() {
  const withItems = [
    { name: "Dropbox", icon: "icons/instagram.svg" },
    { name: "Dropbox", icon: "icons/instagram.svg" },
    { name: "Dropbox", icon: "icons/instagram.svg" },
    { name: "Dropbox", icon: "icons/instagram.svg" },
    { name: "Dropbox", icon: "icons/instagram.svg" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-2">
      {withItems.map((item, id) => (
        <div
          key={id}
          className="flex border border-[#1B1B1B] rounded-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 gap-2 items-center justify-center min-w-fit flex-shrink-0"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={18}
            height={18}
            className="sm:w-5 sm:h-5"
          />
          <p className="text-black dark:text-[#9C9C9C] font-extrabold text-sm sm:text-base lg:text-[18px] whitespace-nowrap">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
