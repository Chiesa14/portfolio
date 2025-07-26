"use client";

import CaseStudiesSection from "@/pages/CaseStudiesSection";
import GetInTouch from "@/pages/GetInTouch";
import HomeSection from "@/pages/HomeSection";
import RecentWorks from "@/pages/RecentWorks";
import Testimonials from "@/pages/Testimonials";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#080808] transition-all duration-300">
      <HomeSection />
      <CaseStudiesSection />
      <Testimonials />
      <RecentWorks />
      <GetInTouch />
    </div>
  );
}
