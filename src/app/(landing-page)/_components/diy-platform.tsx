import Image from "next/image";
import left from "@/public/diy-platform-left.tsx.png";
import bot from "@/public/diy-credits2-left-bot.png";
import meter1 from "@/public/hero-meter-1.png";

const DiyPlatform = () => {
  return (
    <div className="relative">
      <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] pt-[70px] lg:pt-[100px] 2xl:pt-[200px] pb-[70px] lg:pb-[80px] 2xl:pb-[120px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-[50px] gap-y-[50px]">
          <div className="w-full lg:w-[50%] relative flex justify-center">
            <Image
              src={left}
              alt="right"
              className="w-[90%] sm:w-[70%] lg:w-[100%] 2xl:w-[100%]"
            />
            <Image
              src={bot}
              alt="bot"
              className="absolute left-[10px] bottom-[10px] lg:left-[0px] lg:bottom-[20px] 2xl:left-[0px] 2xl:bottom-[50px] w-[100px] h-[120px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[240px]"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <div>
              <Image
                src={meter1}
                alt="meter1"
                className="w-[90px] lg:w-[100px] 2xl:w-[150px]"
              />
              <h1 className="mt-[20px] lg:mt-[30px] w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-left">
                The world’s Totally Free DIY Credit repair platform
              </h1>
              <p className="mt-[5px] font-medium text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                Just Pay for crdit monitoring. We cover the rest.
              </p>
              <a
                href="https://aicreditguy.com/signup.aspx/signup.aspx"
                target="_blank"
              >
                <button
                  className={`mt-[10px] lg:mt-[20px] whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[16px] xl:py-[16px] xl:px-[22px] custom-header-btn bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[24px] cursor-pointer font-semibold text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-white hover:text-black`}
                >
                  <span className="custom-header-btn-inner">GET STARTED</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiyPlatform;
