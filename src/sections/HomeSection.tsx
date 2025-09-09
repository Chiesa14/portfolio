"use client";
import Button from "@/components/Button";
import WorkedWith from "@/components/WorkedWith";
import { Typewriter } from "react-simple-typewriter";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="text-[#9C9C9C] pt-20 sm:pt-32 lg:pt-40 min-h-screen bg-white dark:bg-[#080808] transition-all duration-300 px-4 sm:px-8"
    >
      <div className="mb-20 sm:mb-32 lg:mb-40 max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0">
        <div className="w-full lg:w-2/3 lg:pr-20 xl:pr-40">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
            <Typewriter
              words={["UWIMANA Remy Chiesa"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <p
            className="mt-6 sm:mt-8 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ wordSpacing: "0.3rem" }}
          >
            I’m a full-stack developer specializing in high-performance,
            user-focused digital solutions. I build intuitive interfaces and
            scalable applications, combining clean design with robust
            engineering. My work bridges design and functionality to deliver
            seamless experiences, with a strong emphasis on performance,
            security, and maintainability.
          </p>
          <Button
            text="Let's get started"
            color="green"
            className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto"
          />
        </div>
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-[url('/images/me.jpg')] bg-cover bg-center mx-auto lg:mx-0 flex-shrink-0">
          {/* Image fallback already handled by bg */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <p className="my-4 text-sm sm:text-base">Worked with</p>
        <WorkedWith />
      </div>
    </section>
  );
}
