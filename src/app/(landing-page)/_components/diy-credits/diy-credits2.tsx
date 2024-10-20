import Image from "next/image";
import left from "@/public/diy-credits2-left.png";
import bot from "@/public/diy-credits2-left-bot.png";

const DiyCredits2 = () => {
  return (
    <div className="relative">
      <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] pt-[50px] lg:pt-[80px] 2xl:pt-[100px] pb-[70px] lg:pb-[100px] 2xl:pb-[250px]">
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
              className="absolute left-[-10px] bottom-[-10px] lg:left-[-20px] lg:bottom-[-20px] 2xl:left-[-50px] 2xl:bottom-[-50px] w-[100px] h-[120px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[240px]"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col gap-[20px] 2xl:gap-[25px]">
              <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-left">
                Why is this free?
              </h1>
              <p className="mt-[0px] font-medium text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                We believe that everyone is entitles to an accurate credit
                report. We walk you through the process and help as long as you
                need us. The Only thing we require you to pay for is a credit
                monitoring subscription. as we work towards your financial
                goals, we also recommend credit-building offers like credit
                cards. and loans. If you choose any of these tailored offers,
                the providers compensate us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiyCredits2;
