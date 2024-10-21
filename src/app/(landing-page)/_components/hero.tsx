import Image from "next/image";

import meter1 from "@/public/hero-meter-1.png";
import meter2 from "@/public/hero-meter-2.png";
import meter3 from "@/public/hero-meter-3.png";
import hero from "@/public/hero.png";
import rocket from "@/public/hero-rocket.png";
import kite from "@/public/hero-kite.png";
import dollar from "@/public/hero-dollar.png";

const Hero = () => {
  return (
    <div className="mt-[80px] md:mt-[90px] xl:mt-[100px] 2xl:mt-[120px] overflow-hidden">
      <div className="w-full homepage-container mx-auto text-black pl-[20px] md:pl-[50px] lg:pl-[50px] xl:pl-[90px] 2xl:pl-[120px] overflow-hidden py-[70px] 2xl:py-[50px]">
        <div className="flex flex-col lg:flex-row gap-y-20 gap-x-8">
          <div className="w-[100%] lg:w-[45%]">
            <div className="flex items-start gap-4 relative">
              <div className="absolute left-[0%] -top-[100%] md:-top-[60%] md:-left-[5%] lg:-left-[10%] lg:-top-[70%] xl:-left-[14%] xl:-top-[10%] 2xl:-left-[13%] 2xl:-top-[10%]">
                <Image
                  src={rocket}
                  alt="rocket"
                  className="w-[50px] lg:w-[70px] 2xl:w-[100px] h-auto"
                />
              </div>
              <div
                className="flex items-start gap-4"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="700"
                data-aos-delay="100"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src={meter1}
                  alt="meter1"
                  className="w-[90px] lg:w-[100px] 2xl:w-[150px]"
                />
                <Image
                  src={meter2}
                  alt="meter2"
                  className="w-[90px] lg:w-[100px] 2xl:w-[150px]"
                />
                <Image
                  src={meter3}
                  alt="meter3"
                  className="w-[90px] lg:w-[100px] 2xl:w-[150px]"
                />
              </div>
            </div>
            <p
              className="mt-3 font-medium text-[14px] lg:text-[15px]"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="900"
              data-aos-easing="ease-in-sine"
            >
              Stop Spending Your Hard Earned Money on Credit Repair!
            </p>
            <h1
              className="w-[100%] md:w-[70%] lg:w-[100%] xl:w-[100%] 2xl:w-[80%] uppercase mt-2 font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px]"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1100"
              data-aos-easing="ease-in-sine"
            >
              Repair Your{" "}
              <span className="font-bold text-[#45408C]">Credit</span> Start
              Now For Free
            </h1>
            <p
              className="mt-3 font-medium text-[15px] md:text-[15px] lg:text-[16px] 2xl:text-[20px] uppercase"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1300"
              data-aos-easing="ease-in-sine"
            >
              AI DRIVEN TOOLS TO GET YOUR CREDIT BACK ON TRACK
            </p>
            <div className="relative">
              <a href="https://aicreditguy.com/signup.aspx/signup.aspx">
                <button
                  className={`mt-[20px] lg:mt-[30px] whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[16px] xl:py-[16px] xl:px-[22px] custom-header-btn bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[24px] cursor-pointer font-semibold text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-white hover:text-black`}
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                >
                  <span className="custom-header-btn-inner">GET STARTED</span>
                </button>
              </a>
              <div className="absolute -left-[8%] top-[30%] sm:-left-[3%] sm:top-[40%] md:top-[30%] md:-left-[7%] lg:-left-[12%] lg:top-[5%] xl:-left-[17%] xl:top-[10%] 2xl:-left-[15%] 2xl:-top-[0%]">
                <Image
                  src={kite}
                  alt="kite"
                  className="w-[90px] md:w-[120px] lg:w-[170px] 2xl:w-[250px] h-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[55%] relative">
            <div className="absolute -left-[2%] lg:-left-[3%] top-[3%] md:top-[12%] lg:-top-[5%] 2xl:top-[5%]">
              <Image
                src={dollar}
                alt="rocket"
                className="w-[70px] lg:w-[100px] 2xl:w-[120px] h-auto"
              />
            </div>
            <div className="bg-clouds">
              <div
                className="pr-[20px] md:pr-[50px] lg:pr-[50px] xl:pr-[90px] 2xl:pr-[120px]"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src={hero}
                  alt="hero"
                  className="w-[90%] sm:w-[70%] lg:w-[80%] 2xl:w-[90%] h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
