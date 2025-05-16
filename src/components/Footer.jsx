import React from "react";
import logo from "../assets/FIU-logo.png";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"; // optional icons library

const socials = [
  { href: "https://www.facebook.com/FIU", Icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com/FIU", Icon: Twitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/school/fiu",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://www.youtube.com/FIU", Icon: Youtube, label: "YouTube" },
  {
    href: "https://www.instagram.com/FIU",
    Icon: Instagram,
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="mt-28 md:mt-32 pb-12">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="FIU logo"
          className="w-32 md:w-40 mb-4"
          loading="lazy"
        />

        <nav
          aria-label="Footer links"
          className="flex gap-4 text-sm md:text-base mb-6"
        >
          <a href="https://admissions.fiu.edu" className="hover:underline">
            Apply to FIU
          </a>
          <span aria-hidden="true">|</span>
          <a href="https://fiu.edu/contact" className="hover:underline">
            Contact FIU
          </a>
          <span aria-hidden="true">|</span>
          <a href="https://news.fiu.edu" className="hover:underline">
            FIU News
          </a>
        </nav>

        {/* social icons */}
        <ul className="flex gap-4 mb-6">
          {socials.map(({ href, Icon, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={label}
                className="hover:text-yellow-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-400">
          © 2025 Florida International University
        </p>
      </div>
    </footer>
  );
}
