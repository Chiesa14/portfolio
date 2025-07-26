"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Recent work", href: "#recent-work" },
  { name: "Get In Touch", href: "#get-in-touch" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 sm:w-4/5 sm:m-auto flex justify-center py-4 rounded-none sm:rounded-b-2xl bg-[#1B1B1B] sticky top-0 z-50 shadow-lg">
      <div className="flex w-full max-w-5xl items-center justify-between py-2">
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#9C9C9C] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#9C9C9C] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#9C9C9C] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 font-medium text-sm lg:text-base">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="transition-colors px-2 py-1 text-[#9C9C9C] rounded hover:bg-white/10 hover:text-white text-center"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social icons - always visible */}
        <div className="flex gap-3 sm:gap-4 items-center">
          <a
            href="https://instagram.com/chiesa14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              className=""
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://github.com/Chiesa14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-[#1B1B1B] transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4 font-medium text-base">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block transition-colors px-4 py-3 text-[#9C9C9C] rounded hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
