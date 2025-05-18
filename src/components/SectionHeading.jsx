import React from "react";

/**
 * Reusable section divider with a centred title.
 *
 * Props:
 * • title        (string, required) – text to display
 * • id           (string, optional) – passes through to the <h3>
 *
 */
export default function SectionHeading({ title, id }) {
  return (
    <div className="flex items-center mb-8 max-w-6xl mx-auto">
      <span
        aria-hidden="true"
        className="flex-1 border-b-2 border-fiuCyan mr-4"
      />
      <h3
        id={id}
        className="w-full sm:w-auto flex-none font-barlow font-light tracking-3.84 text-2xl md:text-32px uppercase text-center"
      >
        {title}
      </h3>
      <span
        aria-hidden="true"
        className="flex-1 border-b-2 border-fiuCyan ml-4"
      />
    </div>
  );
}
