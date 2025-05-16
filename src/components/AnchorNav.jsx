import React from "react";

const links = [
  { href: "#academic", label: "Academic Value" },
  { href: "#mobility", label: "Economic Mobility" },
];

export default function AnchorNav() {
  return (
    <nav
      className="max-w-3xl mx-auto mt-6 md:mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base justify-center border-t border-b border-[#2B455F] py-3"
      aria-label="On this page"
    >
      <span className="sr-only">On this page:</span>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="text-gray-200 hover:text-yellow-400 transition-colors focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-yellow-400"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
