import React from "react";

/**
 * Reusable section divider with a centred title.
 *
 * Props:
 * • title        (string, required) – text to display
 * • id           (string, optional) – passes through to the <h3> for aria-labelling
 * • borderClass  (string, optional) – Tailwind classes for the side rules
 */
export default function SectionHeading({
  title,
  id,
  borderClass = "border-fiuCyan",
}) {
  return (
    <div className="flex items-center mb-8">
      <span
        aria-hidden="true"
        className={`flex-1 border-b-2 ${borderClass} mr-4`}
      />
      <h3
        id={id}
        className="flex-none font-barlow font-light tracking-3.84 text-2xl md:text-32px uppercase text-center"
      >
        {title}
      </h3>
      <span
        aria-hidden="true"
        className={`flex-1 border-b-2 ${borderClass} ml-4`}
      />
    </div>
  );
}
