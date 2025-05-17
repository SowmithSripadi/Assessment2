import React from "react";

/**
 * Reusable section divider with a centred title.
 * Props:
 *  • title (string) – the text to display
 *  • borderClass (optional) – Tailwind classes for the side rules
 */
export default function SectionHeading({
  title,
  borderClass = "border-fiuCyan",
}) {
  return (
    <div className="flex items-center mb-8">
      <span
        className={`flex-1 border-b-2 ${borderClass} mr-4`}
        aria-hidden="true"
      />
      <h3 className="flex-none font-barlow font-thin tracking-widest text-2xl md:text-3xl uppercase text-center">
        {title}
      </h3>
      <span
        className={`flex-1 border-b-2 ${borderClass} ml-4`}
        aria-hidden="true"
      />
    </div>
  );
}
