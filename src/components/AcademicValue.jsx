import React from "react";

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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20"
    >
      <h2 className="text-center text-yellow-400 text-2xl md:text-3xl font-semibold mb-2">
        Highest Ranking Ever
      </h2>
      <p className="text-center mb-10 text-gray-300">
        No. 64 in the nation in <em>U.S. News & World Report</em>'s public
        university rankings
      </p>

      {/* divider heading */}
      <div className="flex items-center justify-center mb-8">
        <span className="w-32 h-px bg-sky-400/70 mr-4 hidden md:block" />
        <h3 className="font-furore tracking-widest text-lg md:text-xl">
          Academic Value
        </h3>
        <span className="w-32 h-px bg-sky-400/70 ml-4 hidden md:block" />
      </div>

      {/* value grid */}
      <div className="grid gap-10 md:gap-6 md:grid-cols-3 text-center">
        {items.map((it) => (
          <div key={it.subtitle}>
            <h4 className="text-yellow-400 text-2xl font-semibold">
              {it.title}
            </h4>
            <p className="mt-1">{it.subtitle}</p>
            <p className="italic text-gray-400 text-sm mt-1">
              (Source: {it.source})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
