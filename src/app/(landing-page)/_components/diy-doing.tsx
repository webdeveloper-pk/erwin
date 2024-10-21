import Image from "next/image";
import left from "@/public/diy-doing-left.png";
import bot from "@/public/diy-credits2-left-bot.png";
import lines from "@/public/diy-doing-lines.png";
import right1 from "@/public/diy-doing-right1.png";
import right2 from "@/public/diy-doing-right2.png";

const DiyDoing = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <Image
          src={right2}
          alt="right2"
          className="w-[20%] lg:w-[13%] 2xl:w-[12%] h-auto absolute right-[0%] bottom-[0%] sm:bottom-[-5%] lg:bottom-[0%] 2xl:bottom-[0%]"
        />
      </div>
      <div className="flex flex-col items-center text-center px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px] overflow-hidden">
        <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-center">
          do it yourself or do it for your family
        </h1>
        <p className="mt-[5px] text-[17px] font-medium lg:text-[18px] 2xl:text-[20px]">
          DIY Credit Repair Made Easy
        </p>
      </div>
      <div>
        <Image
          src={right1}
          alt="right1"
          className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] 2xl:w-[90px] 2xl:h-[90px] absolute right-[5%] lg:right-[10%] 2xl:right-[20%] top-[55%] md:top-[50%] lg:top-[4%] 2xl:top-[5%]"
        />
      </div>
      <div>
        <Image
          src={lines}
          alt="lines"
          className="w-[30%] lg:w-[65%] 2xl:w-[70%] absolute right-0 top-[27%] md:top-[22%] lg:top-[15%] 2xl:top-[15%]"
        />
      </div>
      <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[80px] 2xl:px-[120px] pt-[40px] lg:pt-[60px] pb-[70px] lg:pb-[100px] 2xl:pb-[200px] overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-[50px] gap-y-[50px]">
          <div className="w-full lg:w-[50%] relative flex justify-center">
            <Image
              src={left}
              alt="right"
              className="w-[90%] sm:w-[70%] lg:w-[100%] 2xl:w-[90%]"
            />
            <Image
              src={bot}
              alt="bot"
              className="absolute right-[10px] top-[10px] lg:right-[0px] lg:top-[0px] 2xl:right-[00px] 2xl:top-[20px] w-[100px] h-[120px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[240px]"
            />
          </div>
          <div className="w-full lg:w-[50%] lg:px-[10px] xl:px-[20px] 2xl:px-[70px]">
            <div className="lg:pt-[50px] 2xl:pt-[100px]">
              <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-left">
                The world’s Totally Free Credit repair platform
              </h1>
              <p className="mt-[5px] font-medium text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                Just Pay for crdit monitoring. We cover the rest.
              </p>
              <a href="https://aicreditguy.com/signup.aspx/signup.aspx">
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

export default DiyDoing;
