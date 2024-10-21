import Image from "next/image";
import right from "@/public/diy-credits-right.png";
import bot from "@/public/diy-credits-right-bot.png";
import left1 from "@/public/diy-credits-1-left1.png";
import left2 from "@/public/diy-credits-1-left2.png";
import left3 from "@/public/diy-credits-1-left3.png";
import left4 from "@/public/diy-credits-1-left4.png";
import left5 from "@/public/diy-credits-1-left5.png";
import left6 from "@/public/diy-credits-1-left1.png";

const DiyCredits1 = () => {
  return (
    <div className="relative">
      <Image
        src={left1}
        alt="right1"
        className="absolute left-[20px] top-[165px] sm:left-[30px] sm:top-[100px] lg:left-[30px] lg:top-[60px] 2xl:left-[50px] 2xl:top-[150px] w-[30%] sm:w-[25%] 2xl:w-[20%]"
      />
      <Image
        src={left2}
        alt="right2"
        className="absolute left-[20px] top-[130px] sm:left-[30px] sm:top-[20px] lg:left-[30px] lg:top-[-10px] 2xl:left-[50px] 2xl:top-[80px] w-[25%] sm:w-[20%] 2xl:w-[15%]"
      />
      <div>
        <Image
          src={left3}
          alt="left3"
          className="absolute left-[55%] lg:left-[35%] 2xl:left-[30%] top-[160px] sm:top-[110px] lg:top-[90px] 2xl:top-[160px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
        />
      </div>
      <div>
        <Image
          src={left4}
          alt="left4"
          className="absolute left-[0%] bottom-[27%] sm:bottom-[40%] lg:bottom-[-5%] 2xl:bottom-[20px] w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] 2xl:w-[100px] 2xl:h-[140px]"
        />
      </div>
      <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] pb-[50px] lg:pb-[90px] overflow-hidden 2xl:pb-[100px]">
        <div className="flex flex-col items-center text-center px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
          <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-center">
            do it yourself or do it for your family
          </h1>
          <p className="mt-[5px] text-[17px] font-medium lg:text-[18px] 2xl:text-[20px]">
            DIY Credit Repair Made Easy
          </p>
        </div>
        <div className="pt-[100px] lg:pt-[80px] 2xl:pt-[150px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-[50px] gap-y-[80px]">
          <div className="w-full lg:w-[50%] relative">
            <div
              className="flex flex-col gap-[20px] 2xl:gap-[25px]"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="900"
              data-aos-easing="ease-in-sine"
            >
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
            <div>
              <Image
                src={left5}
                alt="left5"
                className="absolute left-[45%] sm:left-[55%] lg:left-[55%] 2xl:left-[50%] bottom-[-60px] sm:bottom-[-60px] lg:bottom-[-70px] 2xl:bottom-[-100px] w-[50px] h-[50px] lg:w-[50px] lg:h-[50px] 2xl:w-[80px] 2xl:h-[80px]"
                style={{ zIndex: 2 }}
              />
            </div>
            <div>
              <Image
                src={left6}
                alt="right1"
                className="absolute left-[45%] sm:left-[45%] lg:left-[45%] 2xl:left-[35%] bottom-[-60px] sm:bottom-[-60px] lg:bottom-[-80px] 2xl:bottom-[-130px] w-[30%] sm:w-[30%] lg:w-[50%] 2xl:w-[50%]"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%] relative flex justify-center">
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="1100"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={right}
                alt="right"
                className="w-[90%] sm:w-[70%] lg:w-[100%] 2xl:w-[100%]"
              />
            </div>
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
