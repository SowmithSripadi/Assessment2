import React from "react";
import SectionHeading from "../components/SectionHeading";

const items = [
  {
    title: "Top 10",
    subtitle: "Economic ROI in a College Degree",
    source: "Degree Choices 2023",
  },
  {
    title: "Top 20",
    subtitle: "National University",
    source: "Washington Monthly 2023",
  },
  {
    title: "No. 1",
    subtitle: "Performance-funding Metrics",
    source: "Florida Board of Governors 2023",
  },
];

export default function AcademicValue() {
  return (
    <section
      id="academic"
      aria-labelledby="academic-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-20"
    >
      <h2
        id="academic-heading"
        className="text-center text-fiuYellow text-2xl md:text-32px tracking-wider font-extraBold mb-6"
      >
        Highest Ranking Ever
      </h2>

      <p className="text-center mb-10 text-18px-md">
        No. 64 in the nation in <em>U.S. News &amp; World Report</em>'s
        public-university rankings
      </p>

      {/* divider heading */}
      <SectionHeading title="Academic Value" id="academic-value" />

      {/* value list */}
      <ul
        role="list"
        className="grid gap-10 sm:gap-12 md:gap-6 md:grid-cols-3 text-center md:text-left mt-10 sm:mt-16"
      >
        {items.map(({ title, subtitle, source }) => (
          <li key={subtitle} className="flex flex-col">
            <h3 className="text-fiuYellow text-2xl md:text-32px-md font-bold">
              {title}
            </h3>
            <p className="mt-1 font-bold text-18px-lg">{subtitle}</p>
            <p className="italic text-16px-lg">(Source: {source})</p>
          </li>
        ))}
      </ul>

      {/* highlight call-out */}
      <p className="text-center max-w-3xl mx-auto mt-16 text-18px-md">
        FIU has been designated a&nbsp;
        <span className="text-sky-300">University of Distinction&nbsp;</span>
        in environmental resilience by the Florida Board of Governors.
      </p>
    </section>
  );
}
