"use client";

import {
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
  FaPhp,
  FaWordpressSimple,
  FaCloud,
  FaLock,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiFlutter,
  SiVuedotjs,
  SiAngular,
  SiMongodb,
  SiPostgresql,
  SiLaravel,
  SiKubernetes,
} from "react-icons/si";

export default function ListSkills() {
  const skills = [
    {
      name: "UI/UX & Figma",
      icon: <FaFigma className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Wireframing and prototyping human-centered designs.",
    },
    {
      name: "React & Next.js",
      icon: <SiNextdotjs className="w-6 h-6 sm:w-7 sm:h-7" />,
      description:
        "Building performant, SEO-friendly apps with server and client components.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-6 h-6 sm:w-7 sm:h-7" />,
      description:
        "Strongly-typed, maintainable codebases for long-term projects.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Rapid UI building with a consistent design system.",
    },
    {
      name: "Node.js & APIs",
      icon: <FaNodeJs className="w-6 h-6 sm:w-7 sm:h-7" />,
      description:
        "Scalable back-ends, REST & GraphQL APIs with authentication.",
    },
    {
      name: "Databases",
      icon: <FaDatabase className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "PostgreSQL, MongoDB & Prisma for reliable data layers.",
    },
    {
      name: "React Native",
      icon: <FaReact className="w-6 h-6 sm:w-7 sm:h-7" />,
      description:
        "Cross-platform mobile apps using native components with React Native.",
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Beautiful, high-performance apps for iOS & Android.",
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Progressive framework for reactive interfaces.",
    },
    {
      name: "Angular",
      icon: <SiAngular className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Full-featured front-end framework for enterprise apps.",
    },
    {
      name: "Java",
      icon: <FaJava className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Enterprise-grade backend services and Android development.",
    },
    {
      name: "Python",
      icon: <FaPython className="w-6 h-6 sm:w-7 sm:h-7" />,
      description:
        "Scripting, automation, data analysis and backend APIs with Django/FastAPI.",
    },
    {
      name: "PHP & Laravel",
      icon: <FaPhp className="w-6 h-6 sm:w-7 sm:h-7" />,
      description:
        "Classic server-side apps and APIs with PHP, Laravel and modern tooling.",
    },
    {
      name: "WordPress",
      icon: <FaWordpressSimple className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Custom themes, plugins and headless WordPress setups.",
    },
    {
      name: "Cyber Security & Pentesting",
      icon: <FaLock className="w-6 h-6 sm:w-7 sm:h-7" />,
      description:
        "Ethical hacking, penetration testing, reverse engineering and secure coding.",
    },
    {
      name: "Git & Collaboration",
      icon: <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Version control, code reviews and agile workflows.",
    },
    {
      name: "Docker & DevOps",
      icon: <SiDocker className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Containerized deployments, CI/CD and cloud infrastructure.",
    },
    {
      name: "Kubernetes & Cloud",
      icon: <SiKubernetes className="w-6 h-6 sm:w-7 sm:h-7" />,
      description: "Scaling services on AWS/GCP/Azure with Kubernetes.",
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start p-6 sm:p-8 rounded-lg border border-[#1B1B1B] dark:border-[#2B2B2B] bg-white dark:bg-[#0F0F0F] hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="text-black dark:text-white">{skill.icon}</span>
            <p className="text-lg sm:text-xl font-bold text-black dark:text-white">
              {skill.name}
            </p>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
}
