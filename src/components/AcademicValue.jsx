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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  md:mt-20"
    >
      <h2 className="text-center text-fiuYellow text-2xl md:text-3xl font-semibold mb-6">
        Highest Ranking Ever
      </h2>
      <p className="text-center mb-10">
        No. 64 in the nation in <em>U.S. News & World Report</em>'s public
        university rankings
      </p>

      {/* divider heading */}
      <SectionHeading title="Academic Value" />

      {/* value grid */}
      <div className="grid  md:gap-6 md:grid-cols-3 mt-16">
        {items.map((it) => (
          <div key={it.subtitle} className="flex flex-col gap-1">
            <h4 className="text-fiuYellow text-2xl md:text-3xl font-semibold">
              {it.title}
            </h4>
            <p className="mt-1 font-semibold text-lg">{it.subtitle}</p>
            <p className="italic text-md mt-1">(Source: {it.source})</p>
          </div>
        ))}
      </div>
      <p className="text-center max-w-3xl mx-auto mt-20 text-xl">
        FIU has a designated a
        <span className="text-sky-300"> University of Distinction </span>
        in environmental resilience by the Florida Board of Governors
      </p>
    </section>
  );
}
