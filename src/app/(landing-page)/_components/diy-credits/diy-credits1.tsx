import Image from "next/image";
import right from "@/public/diy-credits-right.png";
import bot from "@/public/diy-credits-right-bot.png";

const DiyCredits1 = () => {
  return (
    <div className="relative">
      <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] pb-[50px] lg:pb-[70px] 2xl:pb-[100px]">
        <div className="flex flex-col items-center text-center px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
          <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-center">
            do it yourself or do it for your family
          </h1>
          <p className="mt-[5px] text-[17px] font-medium lg:text-[18px] 2xl:text-[20px]">
            DIY Credit Repair Made Easy
          </p>
        </div>
        <div className="pt-[50px] lg:pt-[80px] 2xl:pt-[150px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-[50px] gap-y-[50px]">
          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col gap-[20px] 2xl:gap-[25px]">
              <p className="font-normal text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] uppercase">
                <span className="font-semibold mr-2">Easy to use:</span>
                One Click import and dispute features simplify the process.
              </p>
              <p className="font-normal text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] uppercase">
                <span className="font-semibold mr-2">Time Saving:</span>
                AI-driven dispute logic handles analysis and recommendations.
              </p>
              <p className="font-normal text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] uppercase">
                <span className="font-semibold mr-2">hassle free:</span>
                Integrated mailing system manages the entire mailing process.
              </p>
              <p className="font-normal text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] uppercase">
                <span className="font-semibold mr-2">Transparent:</span>
                Track your progress with an intuitive dashboard.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] relative flex justify-center">
            <Image
              src={right}
              alt="right"
              className="w-[90%] sm:w-[70%] lg:w-[100%] 2xl:w-[100%]"
            />
            <Image
              src={bot}
              alt="bot"
              className="absolute right-0 bottom-0 w-[100px] h-[120px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[240px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiyCredits1;
