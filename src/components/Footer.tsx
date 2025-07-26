"use client";

import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Recent Work", href: "#recent-work" },
  { name: "Get In Touch", href: "#get-in-touch" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/chiesa14",
    icon: "/icons/instagram.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Chiesa14",
    icon: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/icons/linkedin.svg",
  },
];

const services = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Brand Identity",
  "Consultation",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1B1B] text-[#9C9C9C] pt-12 sm:pt-16 lg:pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Remy Chiesa
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Creating exceptional digital experiences through thoughtful design
              and development. Solving user & business problems since 15+ years.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:opacity-80 transition-opacity p-2 hover:bg-white/10 rounded-lg"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base hover:text-white transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm sm:text-base block py-1">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">
              Let's Connect
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-sm sm:text-base">
                  Ready to start your project?
                </p>
              </div>
              <a
                href="#get-in-touch"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base font-medium"
              >
                Get In Touch
              </a>
              <div className="pt-2">
                <p className="text-xs sm:text-sm text-[#7A7A7A]">
                  Available for freelance projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] pt-6 sm:pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-[#7A7A7A]">
                © {currentYear} Remy Chiesa. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
              <p className="text-xs sm:text-sm">Made with ❤️</p>
              <div className="hidden sm:block w-px h-4 bg-[#333333]"></div>
              <div className="flex gap-4 text-xs sm:text-sm">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
