import React from "react";

export default function EconomicMobility() {
  return (
    <section
      id="mobility"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28"
    >
      {/* divider heading */}
      <div className="flex items-center justify-center mb-10">
        <span className="w-32 h-px bg-sky-400/70 mr-4 hidden md:block" />
        <h3 className="font-furore tracking-widest text-lg md:text-xl">
          Upward Economic Mobility
        </h3>
        <span className="w-32 h-px bg-sky-400/70 ml-4 hidden md:block" />
      </div>

      <p className="text-center max-w-3xl mx-auto mb-8">
        We are a <strong className="text-sky-300">Hispanic</strong> serving
        institution and a <strong className="text-sky-300">minority</strong>{" "}
        serving institution focused on making sure every student succeeds.
      </p>

      {/* highlighted box */}
      <div className="border border-sky-400/70 p-6 md:p-10 mb-10">
        <p className="text-center font-semibold mb-6">
          Top producer in awarding bachelor’s degrees to minorities
          <br />
          <span className="italic font-normal text-sm">
            (Source: Diverse Issues in Higher Education)
          </span>
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-yellow-400 text-2xl font-semibold">No. 1</h4>
            <p className="mt-1">
              awarding Bachelor’s and Master’s degrees to Hispanics
            </p>
          </div>
          <div>
            <h4 className="text-yellow-400 text-2xl font-semibold">Top 10</h4>
            <p className="mt-1">
              awarding Bachelor’s degrees to African Americans
            </p>
          </div>
          <div>
            <h4 className="text-yellow-400 text-2xl font-semibold">Top 10</h4>
            <p className="mt-1">Economic Diversity</p>
            <p className="italic text-gray-400 text-sm mt-1">
              (Source: New York Times)
            </p>
          </div>
        </div>
      </div>

      <p className="text-center max-w-3xl mx-auto">
        Our <strong>Pell Grant-eligible students</strong> (who account for more
        than half of our undergraduate population) graduate at a higher rate
        than their classmates.
        <br />
        <span className="block italic text-sm mt-1">(Source: AIM)</span>
      </p>
    </section>
  );
}
