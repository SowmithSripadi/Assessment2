import React from "react";
import SectionHeading from "../components/SectionHeading";

export default function EconomicMobility() {
  return (
    <section
      id="mobility"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-20 md:mt-28"
      aria-labelledby="mobility-heading"
    >
      <SectionHeading title="Upward Economic Mobility" id="mobility-heading" />

      <p className="text-center max-w-2xl mx-auto mb-20 text-18px-md">
        We are a <span className="text-sky-300">Hispanic</span> serving
        institution and a <span className="text-sky-300">minority</span> serving
        institution focused on making sure every student succeeds.
      </p>

      <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 items-start sm:mb-16 mb-10">
        {/* columns 1-2 : bordered wrapper */}
        <div className="relative md:col-span-2 border p-6 sm:p-8 lg:p-10">
          {/* heading on border */}
          <h3 className="absolute -top-4 left-1/2 -translate-x-1/2 inline-block bg-fiuBlue px-4 text-center font-barlow font-bold sm:whitespace-nowrap sm:text-18px text-md">
            Top producer in awarding bachelor’s degrees to minorities
            <br />
            <span className="italic font-normal text-16px-sm">
              (Source: Diverse Issues in Higher Education)
            </span>
          </h3>

          {/* two stats inside the box */}
          <ul className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-10">
            <li>
              <h4 className="text-fiuYellow text-2xl sm:text-32px-md font-bold mt-20 sm:mt-0">
                No. 1
              </h4>
              <p className="mt-1 text-18px-sm font-bold md:pr-6 pr-0">
                awarding Bachelor’s and Master’s degrees to Hispanics
              </p>
            </li>
            <li>
              <h4 className="text-fiuYellow  text-2xl sm:text-32px-md font-bold">
                Top 10
              </h4>
              <p className="mt-1 text-18px-sm font-bold md:pr-10 pr-0">
                awarding Bachelor’s degrees to African Americans
              </p>
            </li>
          </ul>
        </div>

        {/* column 3 : third card */}
        <div className="mt-0 md:mt-8 p-6 sm:p-8 lg:p-10 ">
          <h4 className="text-fiuYellow text-2xl sm:text-32px-md font-bold">
            Top 10
          </h4>
          <p className="mt-1 text-18px-md font-bold">Economic Diversity</p>
          <p className="italic text-16px-md mt-1">(Source: New York Times)</p>
        </div>
      </div>

      <p className="text-center max-w-2xl mx-auto text-18px-md">
        Our <span className="text-fiuCyan">Pell Grant-eligible students</span>{" "}
        (who account for more than half of our undergraduate population)
        graduate at a higher rate than their classmates.
        <br />
        <span className="block italic text-16px-md mt-1">(Source: AIM)</span>
      </p>
    </section>
  );
}
