import React from "react";

const links = [
  { href: "#academic", label: "Academic Value" },
  { href: "#mobility", label: "Economic Mobility" },
];

export default function AnchorNav() {
  return (
    <nav
      className="md:max-w-xl max-w-sm mx-auto mt-14 md:mt-32 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base justify-center border-b-2 border-fiuCyan py-3"
      aria-label="On this page"
    >
      <span className="font-bold text-16px-sm">On this page:</span>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className=" hover:text-fiuYellow text-16px-sm"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
