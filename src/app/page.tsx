"use client";

import CaseStudiesSection from "@/sections/CaseStudiesSection";
import GetInTouch from "@/sections/GetInTouch";
import HomeSection from "@/sections/HomeSection";
import RecentWorks from "@/sections/RecentWorks";
import Testimonials from "@/sections/Testimonials";
import SkillsSection from "../sections/SkillsSection";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#080808] transition-all duration-300">
      <HomeSection />
      <CaseStudiesSection />
      <Testimonials />
      <RecentWorks />
      <SkillsSection />
      <GetInTouch />
    </div>
  );
}
