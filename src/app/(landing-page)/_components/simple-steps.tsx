import Image from "next/image";
import stepsImage from "@/public/simple-steps.png";
import step1 from "@/public/simple-step1.png";
import step2 from "@/public/simple-step2.png";
import step3 from "@/public/simple-step3.png";

const SimpleSteps = () => {
  return (
    <div className="bg-gradient pt-[50px] lg:pt-[70px] 2xl:pt-[90px] pb-[40px] lg:pb-[50px] 2xl:pb-[50px] mb-[50px] lg:mb-[70px] 2xl:mb-[90px]">
      <div className="flex flex-col items-center text-center px-[20px] md:px-[50px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
        <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-center">
          3 SIMPLE STEPS TO BETTER CREDIT
        </h1>
        <p className="mt-[5px] text-[17px] font-medium lg:text-[18px] 2xl:text-[20px]">
          We Simplify Credit management, Making it easy for you to build credit,
          Here’s How
        </p>
      </div>
      <div className="w-full homepage-container mx-auto text-black pl-[20px] md:pl-[50px] lg:pl-[50px] xl:pl-[90px] 2xl:pl-[120px] overflow-hidden">
        <div className="mt-[30px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-12 gap-x-8">
          <div className="w-[100%] lg:w-[55%]">
            <div className="flex items-stretch gap-x-[30px] w-full lg:w-[100%] 2xl:w-[80%]">
              <div className="py-[30px] min-h-full">
                <svg
                  width="2"
                  height="440"
                  viewBox="0 0 2 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-h-full"
                >
                  <line
                    x1="1.44629"
                    y1="2.18557e-08"
                    x2="1.44627"
                    y2="440"
                    stroke="#8B4EF5"
                    stroke-dasharray="15 15"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[10px] xl:gap-[30px] pr-[20px]">
                {/* first step */}
                <div className="bg-[#8B4EF503] rounded-[20px] 2xl:rounded-[24px] simple-step-bg p-[20px] flex flex-col md:flex-row md:items-center gap-[10px] xl:gap-[30px]">
                  <div>
                    <Image
                      src={step1}
                      alt="step1"
                      className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[16px] md:text-[18px] 2xl:text-[20px] uppercase">
                      Get Started
                    </p>
                    <p className="mt-2 font-regular text-[15px] 2xl:text-[16px]">
                      Complete the quick sign-Up process, and we’ll take care of
                      analyzing your credit information from all major bureaus.
                    </p>
                  </div>
                </div>
                {/* second step */}
                <div className="bg-[#8B4EF503] rounded-[20px] 2xl:rounded-[24px] p-[20px] flex flex-col md:flex-row md:items-center gap-[10px] xl:gap-[30px]">
                  <div>
                    <Image
                      src={step2}
                      alt="step2"
                      className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[16px] md:text-[18px] 2xl:text-[20px] uppercase">
                      AI Power does the wok
                    </p>
                    <p className="mt-2 font-regular text-[15px] 2xl:text-[16px]">
                      Use our smart software to identify negative items,
                      Generate dispute letters, And Learn How to improve your
                      credit score.
                    </p>
                  </div>
                </div>
                {/* third step */}
                <div className="bg-[#8B4EF503] rounded-[20px] 2xl:rounded-[24px] p-[20px] flex flex-col md:flex-row md:items-center gap-[10px] xl:gap-[30px]">
                  <div>
                    <Image
                      src={step3}
                      alt="step3"
                      className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[16px] md:text-[18px] 2xl:text-[20px] uppercase">
                      Enjoy the perks
                    </p>
                    <p className="mt-2 font-regular text-[15px] 2xl:text-[16px]">
                      From Home ownership to saving on interest, Your new credit
                      score opens many door.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[45%] relative">
            <div className="bg-clouds">
              <div className="pr-[20px] md:pr-[50px] lg:pr-[50px] xl:pr-[90px] 2xl:pr-[120px]">
                <Image
                  src={stepsImage}
                  alt="hero"
                  className="w-[80%] sm:w-[50%] lg:w-[80%] 2xl:w-[80%] h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
