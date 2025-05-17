import React from "react";
import logo from "../assets/FIU-logo.png";

/* brand icons */
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import flickrPng from "../assets/icons/flickr.png";

const socials = [
  {
    href: "https://www.instagram.com/fiuinstagram/",
    Icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/school/florida-international-university/",
    Icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/floridainternational/",
    Icon: FaFacebookF,
    label: "Facebook",
  },
  { href: "https://twitter.com/FIU", Icon: FaTwitter, label: "Twitter" },
  {
    href: "https://www.youtube.com/@FloridaInternational",
    Icon: FaYoutube,
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="mt-28 pb-16">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="FIU logo"
          className="w-[250px] md:w-[297px] mb-4"
          loading="lazy"
        />

        <nav
          aria-label="Footer links"
          className="flex gap-4 text-sm md:text-16px mb-6"
        >
          <a
            href="https://admissions.fiu.edu"
            target="_blank"
            className="underline text-fiuYellow"
          >
            Apply to FIU
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://www.fiu.edu/about/contact-us/index.html"
            target="_blank"
            className="underline text-fiuYellow"
          >
            Contact FIU
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://news.fiu.edu"
            target="_blank"
            className="underline text-fiuYellow"
          >
            FIU News
          </a>
        </nav>

        {/* social icons */}
        <ul role="list" className="flex gap-4 mb-6">
          {socials.map(({ href, Icon, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                className="hover:text-fiuYellow transition-colors"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}

          {/* Flickr icon */}
          <li>
            <a
              href="https://www.flickr.com/photos/fiu"
              aria-label="Flickr"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <img
                src={flickrPng}
                alt=""
                role="presentation"
                width="18"
                height="18"
                className="object-contain"
                loading="lazy"
              />
            </a>
          </li>
        </ul>

        <p className="text-16px">© 2025 Florida International University</p>
      </div>
    </footer>
  );
}
