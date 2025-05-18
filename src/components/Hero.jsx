import React from "react";
import banner from "../assets/banner-image.jpg";
import ranking from "../assets/FIU4-graphic.jpg";

export default function Hero() {
  return (
    <>
      {/* ───── HERO ───── */}
      <header
        id="top"
        aria-label="University hero banner"
        className="relative h-[480px] sm:h-[540px] md:h-[600px] lg:h-[680px] xl:h-[800px] "
      >
        {/* eager-load hero image */}
        <img
          src={banner}
          alt="University hero banner image"
          aria-hidden="true"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[rgba(51,51,51,0.65)] to-transparent"
          aria-hidden="true"
        />

        {/* headline content */}
        <div className="relative z-10 h-full flex flex-col items-center text-center gap-10">
          <h1 className="font-furore uppercase text-fiuYellow tracking-3.22 text-base sm:text-lg md:text-26px drop-shadow-md mt-44">
            Florida International University
          </h1>
          <h1 className="font-barlow font-extraBold uppercase tracking-3.22 text-2xl sm:text-3xl md:text-5xl lg:text-60px drop-shadow-md max-w-[90%]">
            Innovation Creates Impact
          </h1>
        </div>

        {/* FIU #4 graphic – pinned to bottom-centre of banner */}
        <img
          src={ranking}
          alt="FIU #4 – Wall Street Journal Best Public Universities 2024"
          className="absolute left-1/2 bottom-10 -translate-x-1/2 translate-y-1/2 w-56 md:w-72 lg:w-[351px] shadow-lg"
          loading="eager"
        />
      </header>

      {/* ───── COLOR STRIPE (purely decorative) ───── */}
      <div className="flex h-2" aria-hidden="true">
        <div className="w-1/2 bg-gradient-to-r from-fiuGold to-fiuCyan" />
        <div className="w-1/2 bg-gradient-to-r from-fiuCyan to-fiuGold" />
      </div>
    </>
  );
}
