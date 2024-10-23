import Image from "next/image";
import left from "@/public/diy-platform-left.tsx.png";
import bot from "@/public/diy-credits2-left-bot.png";
import meter1 from "@/public/diy-platform.meter.png";
import leftObj1 from "@/public/diy-platform-left-obj-1.png";
import leftObj2 from "@/public/diy-platform-left-obj-2.png";
import rightObj1 from "@/public/diy-platform-right-obj-1.png";
import rightObj2 from "@/public/diy-platform-right-obj-2.png";
import rightObj3 from "@/public/diy-platform-right-obj-3.png";
import rightObj4 from "@/public/diy-platform-right-obj-4.png";
import rightObj5 from "@/public/diy-platform-right-obj-5.png";

const DiyPlatform = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src={leftObj2}
          alt="leftObj2"
          className="absolute left-[0px] bottom-[15%] sm:bottom-[15%] lg:left-[-20px] lg:bottom-[25%] 2xl:left-[-10px] 2xl:bottom-[20%] w-[40%] lg:w-[15%] 2xl:w-[12%]"
        />
      </div>
      <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[50px] xl:px-[80px] 2xl:px-[120px] pt-[30px] lg:pt-[100px] 2xl:pt-[100px] pb-[100px] sm:pb-[120px] lg:pb-[100px] 2xl:pb-[120px] overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-x-[50px] gap-y-[80px]">
          <div className="w-full lg:w-[50%] relative flex justify-center">
            <div
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={left}
                alt="right"
                className="w-[90%] sm:w-[70%] lg:w-[100%] 2xl:w-[100%]"
                style={{ zIndex: 3 }}
              />
            </div>
            <Image
              src={bot}
              alt="bot"
              className="absolute left-[10px] bottom-[10px] lg:left-[0px] lg:bottom-[20px] 2xl:left-[0px] 2xl:bottom-[50px] w-[100px] h-[120px] md:w-[130px] md:h-[170px] lg:w-[130px] lg:h-[170px] 2xl:w-[200px] 2xl:h-[240px]"
              style={{ zIndex: 3 }}
            />
            <Image
              src={leftObj1}
              alt="leftObj1"
              className="absolute left-[0px] top-[0px] lg:left-[-20px] lg:top-[0px] 2xl:left-[-10px] 2xl:top-[0px] w-[70px] h-[50px] md:w-[80px] md:h-[60px] lg:w-[90px] lg:h-[75px] 2xl:w-[100px] 2xl:h-[85px]"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="w-full lg:w-[50%] relative">
            <div>
              <Image
                src={rightObj1}
                alt="rightObj1"
                className="absolute left-[40%] top-[-30px] lg:left-[40%] lg:top-[-30px] 2xl:left-[40%] 2xl:top-[-30px] w-[45px] h-[60px] md:w-[55px] md:h-[70px] lg:w-[65px] lg:h-[80px] 2xl:w-[70px] 2xl:h-[85px]"
                style={{ zIndex: 1 }}
              />
            </div>
            <div>
              <Image
                src={rightObj2}
                alt="rightObj2"
                className="absolute right-[-10px] bottom-[32%] lg:right-[-30px] lg:bottom-[30%] xl:right-[-35px] xl:bottom-[15%] 2xl:right-[-30px] 2xl:bottom-[25%] w-[40px] h-[50px] md:w-[70px] md:h-[60px] lg:w-[75px] lg:h-[65px] 2xl:w-[80px] 2xl:h-[70px]"
                style={{ zIndex: 1 }}
              />
            </div>
            <div>
              <Image
                src={rightObj3}
                alt="rightObj3"
                className="absolute left-[-20px] bottom-[-50px] sm:left-[-50px] sm:bottom-[-90px] lg:left-[-50px] lg:bottom-[-70px] 2xl:left-[-150px] 2xl:bottom-[-100px] w-[40%] lg:w-[40%] 2xl:w-[40%]"
                style={{ zIndex: -1 }}
              />
            </div>
            <div>
              <Image
                src={rightObj4}
                alt="rightObj4"
                className="absolute left-[40%] bottom-[-20%] lg:left-[40%] lg:bottom-[-30%] 2xl:left-[25%] 2xl:bottom-[-35%] w-[55px] h-[60px] md:w-[65px] md:h-[70px] lg:w-[75px] lg:h-[80px] 2xl:w-[80px] 2xl:h-[85px]"
                style={{ zIndex: 1 }}
              />
            </div>
            <Image
              src={rightObj5}
              alt="rightObj5"
              className="absolute right-[10px] bottom-[-20%] sm:bottom-[-30%] lg:right-[30px] lg:bottom-[-30%] xl:right-[30px] xl:bottom-[-30%] 2xl:right-[20px] 2xl:bottom-[-40%] w-[40%] sm:w-[30%] lg:w-[40%] 2xl:w-[35%]"
              style={{ zIndex: 1 }}
            />
            <div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src={meter1}
                  alt="meter1"
                  className="w-[90px] lg:w-[100px] 2xl:w-[150px]"
                />
              </div>
              <h1
                className="mt-[20px] lg:mt-[30px] w-[100%] 2xl:w-[90%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-left"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
              >
                The world’s Totally Free DIY Credit repair platform
              </h1>
              <p
                className="mt-[5px] font-medium text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1100"
                data-aos-easing="ease-in-sine"
              >
                Just Pay for credit monitoring. We cover the rest.
              </p>
              <a href="https://aicreditguy.com/signup.aspx/signup.aspx">
                <button
                  className={`mt-[10px] lg:mt-[20px] whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[16px] xl:py-[16px] xl:px-[22px] custom-header-btn bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[24px] cursor-pointer font-semibold text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-white hover:text-black`}
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-duration="1300"
                  data-aos-easing="ease-in-sine"
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
