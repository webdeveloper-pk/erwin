import Image from "next/image";
import left1 from "@/public/diy-credits-3-left1.png";
import right1 from "@/public/diy-credits-3-right1.png";
import left2 from "@/public/diy-credits-3-left2.png";
import right2 from "@/public/diy-credits-3-right2.png";
import bot from "@/public/diy-credits-3-bot.png";

const DiyCredits3 = () => (
  <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[80px] 2xl:px-[110px] pb-[100px] lg:pb-[120px] 2xl:pb-[180px]">
    {/* first row */}
    <div className="hidden w-full lg:flex flex-col lg:items-start lg:flex-row gap-[40px] 2xl:gap-[60px]">
      <div className="w-full lg:w-[40%] pl-[30px] 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[32px]">
          Mail it for you
        </p>
      </div>
      <div className="w-full lg:w-[60%] pl-[30px] 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[32px]">
          Monitor your progress with a streamlined dashboard.
        </p>
      </div>
    </div>
    <div className="w-full mt-[20px] 2xl:mt-[30px] flex flex-col lg:items-stretch lg:flex-row gap-[40px] 2xl:gap-[60px]">
      <div className="block lg:hidden w-full 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[26px] lg:text-[28px] 2xl:text-[32px]">
          Mail it for you
        </p>
      </div>
      <div className="w-full lg:w-[40%] flex justify-center">
        <Image
          src={left1}
          alt="left1"
          className="w-[80%] md:w-[60%] lg:w-[100%] 2xl:w-[100%]"
        />
      </div>
      <div className="block lg:hidden w-full pl-[0px] 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[26px] lg:text-[28px] 2xl:text-[32px]">
          Monitor your progress with a streamlined dashboard
        </p>
      </div>
      <div className="w-full lg:w-[60%] flex justify-center">
        <Image
          src={right1}
          alt="right1"
          className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%]"
        />
      </div>
    </div>
    {/* second row */}
    <div className="hidden w-full lg:flex flex-col lg:items-start lg:flex-row gap-[40px] 2xl:gap-[60px] mt-[60px]">
      <div className="w-full lg:w-[60%] pl-[30px] 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[32px]">
          One click import and dispute for easy credit repair.
        </p>
      </div>
      <div className="w-full lg:w-[40%] pl-[30px] 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[32px]">
          Recommends the best dispute reasons
        </p>
      </div>
    </div>
    <div className="w-full mt-[20px] 2xl:mt-[30px] flex flex-col lg:items-stretch lg:flex-row gap-[40px] 2xl:gap-[60px]">
      <div className="block lg:hidden w-full 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[26px] lg:text-[28px] 2xl:text-[32px]">
          One click import and dispute for easy credit repair.
        </p>
      </div>
      <div className="w-full lg:w-[60%] flex justify-center">
        <Image
          src={left2}
          alt="right1"
          className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%]"
        />
      </div>
      <div className="block lg:hidden w-full 2xl:pl-[60px]">
        <p className="uppercase font-semibold text-[22px] md:text-[26px] lg:text-[28px] 2xl:text-[32px]">
          Recommends the best dispute reasons
        </p>
      </div>
      <div className="w-full lg:w-[40%] flex justify-center items-center p-[20px] ">
        <div className="w-[90%] md:w-[70%] lg:w-[100%] 2xl:w-[100%] relative">
          <div
            className="absolute -right-[20px] -bottom-[15px] md:-bottom-[15px] 2xl:-bottom-[15px] md:-right-[20px] 2xl:-right-[50px]"
            style={{ zIndex: 1 }}
          >
            <Image
              src={bot}
              alt="bot"
              className="w-[100px] h-[140px] lg:w-[130px] lg:h-[170px] 2xl:w-[220px] 2xl:h-[260px]"
            />
          </div>
          <Image
            src={right2}
            alt="left1"
            className="relative"
            style={{ zIndex: 3 }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default DiyCredits3;
