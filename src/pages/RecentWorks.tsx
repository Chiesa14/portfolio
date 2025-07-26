"use client";
import ListRecntWorks from "@/components/ListRecentWorks";

export default function RecentWorks() {
  return (
    <section
      id="recent-work"
      className="min-h-screen pt-22 lg:pt-20 text-[#9C9C9C] w-full dark:bg-[#080808] bg-white transition-all duration-300 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center dark:text-white text-black mb-4">
          Recent Work
        </p>
        <p
          className="w-full sm:w-3/4 lg:w-[40%] mx-auto text-center mt-2 tracking-wider text-sm sm:text-base leading-relaxed"
          style={{ wordSpacing: "0.4rem" }}
        >
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="w-full lg:w-4/5 mx-auto">
          <ListRecntWorks />
        </div>
      </div>
    </section>
  );
}
