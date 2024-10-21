import Image from "next/image";
import left from "@/public/diy-credits2-left.png";
import bot from "@/public/diy-credits2-left-bot.png";
import left1 from "@/public/diy-credits2-left1.png";
import right1 from "@/public/diy-credits2-right1.png";
import right2 from "@/public/diy-credits2-right2.png";
import right3 from "@/public/diy-credits2-right3.png";
import right4 from "@/public/diy-credits2-right4.png";

const DiyCredits2 = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src={right2}
          alt="right2"
          className="w-[20%] lg:w-[13%] 2xl:w-[12%] h-auto absolute right-[0%] top-[2%] sm:top-[0%] lg:top-[0%] 2xl:top-[5%]"
        />
      </div>
      <Image
        src={left1}
        alt="leftObj2"
        className="absolute left-[0px] bottom-[14%] sm:bottom-[13%] lg:left-[-20px] lg:bottom-[23%] 2xl:left-[-10px] 2xl:bottom-[27%] w-[40%] lg:w-[15%] 2xl:w-[12%]"
      />
      <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] pt-[80px] lg:pt-[80px] 2xl:pt-[100px] pb-[70px] lg:pb-[130px] 2xl:pb-[250px] overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-x-[50px] gap-y-[80px]">
          <div className="w-full lg:w-[50%] relative flex justify-center">
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="1100"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={left}
                alt="right"
                className="w-[90%] sm:w-[70%] lg:w-[100%] 2xl:w-[100%]"
              />
            </div>
            <Image
              src={bot}
              alt="bot"
              className="absolute left-[-10px] bottom-[-10px] lg:left-[-20px] lg:bottom-[-20px] 2xl:left-[-50px] 2xl:bottom-[-50px] w-[100px] h-[120px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[240px]"
            />
          </div>
          <div className="w-full lg:w-[50%] relative">
            <div>
              <Image
                src={right1}
                alt="right1"
                className="absolute right-[35%] top-[-60px] lg:right-[37%] lg:top-[-70px] 2xl:right-[30%] 2xl:top-[-120px] w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] 2xl:w-[90px] 2xl:h-[90px]"
                style={{ zIndex: 1 }}
              />
            </div>
            <div>
              <Image
                src={right4}
                alt="right4"
                className="absolute right-[0%] bottom-[-70px] lg:right-[0%] lg:bottom-[-80px] 2xl:right-[-10%] 2xl:bottom-[-100px] w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] 2xl:w-[90px] 2xl:h-[90px]"
                style={{ zIndex: 1 }}
              />
            </div>
            <div>
              <Image
                src={right3}
                alt="right3"
                className="absolute left-[20%] bottom-[-80px] lg:left-[20%] lg:bottom-[-80px] 2xl:left-[25%] 2xl:bottom-[-150px] w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] 2xl:w-[90px] 2xl:h-[90px]"
                style={{ zIndex: 1 }}
              />
            </div>
            <div
              className="flex flex-col gap-[20px] 2xl:gap-[25px]"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="900"
              data-aos-easing="ease-in-sine"
            >
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
