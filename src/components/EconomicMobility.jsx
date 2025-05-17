import React from "react";
import SectionHeading from "../components/SectionHeading";

export default function EconomicMobility() {
  return (
    <section
      id="mobility"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-20 md:mt-28"
    >
      <SectionHeading title="Upward Economic Mobility" />

      <p className="text-center max-w-3xl mx-auto mb-20 text-xl">
        We are a <span className="text-sky-300">Hispanic</span> serving
        institution and a <span className="text-sky-300">minority</span> serving
        institution focused on making sure every student succeeds.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start mb-16">
        {/* columns 1-2 : bordered wrapper */}
        <div className="relative md:col-span-2 border p-6 sm:p-8 lg:p-10">
          {/* heading on border */}
          <h3 className="absolute -top-4 left-1/2 -translate-x-1/2 inline-block bg-fiuBlue px-4 text-center font-barlow font-semibold md:whitespace-nowrap text-md">
            Top producer in awarding bachelor’s degrees to minorities
            <br />
            <span className="italic font-normal">
              (Source: Diverse Issues in Higher Education)
            </span>
          </h3>

          {/* two stats inside the box */}
          <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h4 className="text-fiuYellow text-3xl font-bold">No. 1</h4>
              <p className="mt-1 text-lg font-bold">
                awarding Bachelor’s and Master’s degrees to&nbsp;Hispanics
              </p>
            </div>
            <div>
              <h4 className="text-fiuYellow text-3xl font-bold">Top 10</h4>
              <p className="mt-1 text-lg font-bold">
                awarding Bachelor’s degrees to African Americans
              </p>
            </div>
          </div>
        </div>

        {/* column 3 : third card */}
        <div className="mt-8 p-6 sm:p-8 lg:p-10 ">
          <h4 className="text-fiuYellow text-3xl font-bold">Top 10</h4>
          <p className="mt-1 text-lg font-bold">Economic Diversity</p>
          <p className="italic text-md mt-1">(Source: New York Times)</p>
        </div>
      </div>

      <p className="text-center max-w-3xl mx-auto text-lg">
        Our <span className="text-fiuCyan">Pell Grant-eligible students</span>{" "}
        (who account for more than half of our undergraduate population)
        graduate at a higher rate than their classmates.
        <br />
        <span className="block italic text-sm mt-1">(Source: AIM)</span>
      </p>
    </section>
  );
}
