"use client";

import Script from "next/script";
import React, { useEffect } from "react";

import Header from "../(landing-page)/_components/header";

const BookingPage = () => {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement("script");
    script.src = "https://link.elevisioncrm.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <Header />
      <div className="mt-[80px] md:mt-[90px] xl:mt-[100px] 2xl:mt-[120px] overflow-hidden">
        <div className="w-full homepage-container mx-auto text-black pr-[20px] md:pr-[50px] lg:pr-0 pl-[20px] md:pl-[50px] lg:pl-[50px] xl:pl-[90px] 2xl:pl-[120px] overflow-hidden py-[70px] 2xl:py-[50px]">
          <div className="">
            <h1 className="w-[100%] md:w-[70%] lg:w-[100%] xl:w-[100%] 2xl:w-[80%] uppercase mt-2 font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-center mx-auto lg:mb-6 mb-3">
              Book A Discovery Call with{" "}
              <span className="font-bold text-[#45408C]">AI Credit</span> Guy
            </h1>
            <div className="w-full">
              <iframe
                src="https://link.elevisioncrm.com/widget/booking/CdWMv9g5QMo5HmLI6CvN"
                style={{ width: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
                id="fAH2wV94sAfTVtmLxRjY_1732122831197"
                className="min-h-[700px]"
                title="Booking Calendar"
              />
            </div>
          </div>
        </div>
        {/* GHL Chatbot Script */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67477c93e34bcfbc6a6dcb39"
          strategy="lazyOnload" // Load the script only when the page is idle
        />
      </div>
    </div>
  );
};

export default BookingPage;
