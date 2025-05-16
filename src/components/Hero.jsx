import React from "react";
import banner from "../assets/banner-image.jpg";
import ranking from "../assets/FIU4-graphic.jpg";

export default function Hero() {
  return (
    <header
      className="relative h-[480px] md:h-[540px] lg:h-[600px] overflow-hidden"
      id="top"
    >
      {/* background image */}
      <img
        src={banner}
        alt="Excited FIU graduates during commencement"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* overlay tint */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* headline block */}
      <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <p className="font-furore tracking-widest text-yellow-400 text-sm md:text-base uppercase">
          Florida International University
        </p>

        <h1 className="font-furore text-3xl md:text-5xl lg:text-6xl font-semibold inline-block mt-1 md:mt-2">
          Innovation Creates Impact
        </h1>

        {/* ranking graphic */}
        <img
          src={ranking}
          alt="FIU #4 – Wall Street Journal Best Public Universities 2024"
          className="w-56 md:w-72 lg:w-80 mt-6 md:mt-8"
          loading="lazy"
        />
      </div>
    </header>
  );
}
