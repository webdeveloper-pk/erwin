"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AiCreditGuy from "./_components/ai-credit-guy";
import DiyCreditsMain from "./_components/diy-credits/diy-credits-main";
import DiyDoing from "./_components/diy-doing";
import DiyPlatform from "./_components/diy-platform";
import Faqs from "./_components/faqs";
import Header from "./_components/header";
import Hero from "./_components/hero";
import SimpleSteps from "./_components/simple-steps";
import Terms from "./_components/terms";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      // duration: 1000,
      // easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <DiyPlatform />
      <SimpleSteps />
      <DiyDoing />
      <AiCreditGuy />
      <DiyCreditsMain />
      <Faqs />
      <Terms />
    </div>
  );
}
