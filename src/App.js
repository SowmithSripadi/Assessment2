import React from "react";
import Hero from "./components/Hero";
import AnchorNav from "./components/AnchorNav";
import AcademicValue from "./components/AcademicValue";
import EconomicMobility from "./components/EconomicMobility";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="font-barlow bg-[#001736] text-white leading-relaxed">
      <Hero />
      <AnchorNav />
      <AcademicValue />
      <EconomicMobility />
      <Footer />
    </main>
  );
}
