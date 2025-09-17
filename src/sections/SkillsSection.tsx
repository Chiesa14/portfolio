"use client";

import ListSkills from "@/components/ListSkills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-22 lg:pt-20 text-[#9C9C9C] w-full dark:bg-[#080808] bg-white transition-all duration-300 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center dark:text-white text-black mb-4">
          Skills & Expertise
        </p>
        <p
          className="w-full sm:w-3/4 lg:w-[50%] mx-auto text-center mt-2 tracking-wider text-sm sm:text-base leading-relaxed"
          style={{ wordSpacing: "0.4rem" }}
        >
          A blend of technologies, tools, and soft skills used to design,
          engineer and scale impactful digital experiences. These are the core
          capabilities I bring to every project.
        </p>

        <div className="w-full lg:w-4/5 mx-auto">
          <ListSkills />
        </div>
      </div>
    </section>
  );
}
