import React from "react";
import banner from "../assets/banner-image.jpg";
import ranking from "../assets/FIU4-graphic.jpg";

export default function Hero() {
  return (
    <>
      {/* ───── HERO ───── */}
      <header
        id="top"
        className="relative h-[480px] sm:h-[540px] md:h-[600px] lg:h-[680px] xl:h-[720px] bg-center bg-cover "
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* gradient overlay (#333333A6 -> transparent) */}
        <div className=" absolute inset-0 bg-gradient-to-b from-[rgba(51,51,51,0.65)] to-transparent bg-no-repeat bg-clip-padding" />

        {/* headline content */}
        <div className="relative z-10 h-full flex flex-col items-center text-center gap-8 ">
          {/* FLORIDA INTERNATIONAL UNIVERSITY */}
          <p className=" font-furore uppercase text-fiuYellow tracking-extra text-base sm:text-lg md:text-xl xl:text-2xl drop-shadow-md mt-36">
            Florida International University
          </p>

          {/* INNOVATION CREATES IMPACT */}
          <h1 className="font-barlow font-extrabold uppercase tracking-wider text-2xl sm:text-3xl md:text-5xl xl:text-6xl drop-shadow-md max-w-[90%]">
            Innovation Creates Impact
          </h1>
        </div>

        {/* FIU #4 graphic – pinned to bottom-centre of banner */}
        <img
          src={ranking}
          alt="FIU #4 – Wall Street Journal Best Public Universities 2024"
          className="absolute left-1/2 bottom-10 translate-x-[-50%] translate-y-1/2 w-56 md:w-72 lg:w-[351px] shadow-lg"
          loading="eager"
        />
      </header>

      {/* ───── COLOR STRIPE (sits below the banner) ───── */}
      <div className="flex h-2" aria-hidden="true">
        <div className="w-1/2 bg-gradient-to-r from-fiuGold to-fiuCyan" />
        <div className="w-1/2 bg-gradient-to-r from-fiuCyan to-fiuGold" />
      </div>
    </>
  );
}
