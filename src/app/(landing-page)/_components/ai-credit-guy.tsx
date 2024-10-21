import Image from "next/image";
import bot from "@/public/ai-credit-guy-bot.png";

const AiCreditGuy = () => {
  return (
    <div
      id="credits"
      className="bg-gradient pt-[70px] lg:pt-[100px] 2xl:pt-[200px] pb-[50px] lg:pb-[70px] 2xl:pb-[100px] overflow-hidden"
    >
      <div className="relative">
        <div className="px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[160px]">
          <h1 className="w-[100%] uppercase font-semibold text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl:text-[38px] text-center">
            AI CREDIT GUY VS TRADTIONAL CREDIT REPAIR
          </h1>
        </div>
        <div className="pt-[80px] lg:pt-[50px] 2xl:pt-[60px] relative ">
          <div>
            <Image
              src={bot}
              alt="bot"
              className="w-[40%] sm:w-[30%] md:w-[25%] lg:w-[25%] xl:w-[20%] absolute right-[10px] -top-[20px] sm:right-[0px] sm:-top-[20px] md:right-0 md:-top-[50px] lg:right-0 lg:-top-[100px] xl:right-0  xl:-top-[80px] 2xl:-top-[150px]"
            />
          </div>
          <div className="mx-auto homepage-container px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] 2xl:px-[160px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-[#D6F0FF] border border-[#00000054] uppercase text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                    <th className="px-4 py-4 2xl:py-6 text-left font-normal">
                      FEES
                    </th>
                    <th className="px-4 py-4 2xl:py-6 text-left font-normal">
                      SETUP FEE
                    </th>
                    <th className="px-4 py-4 2xl:py-6 text-left font-normal">
                      MONTHLY FEE
                    </th>
                    <th className="px-4 py-4 2xl:py-6 text-left font-normal">
                      Credit Monitoring
                    </th>
                    <th className="px-4 py-4 2xl:py-6 text-left font-normal">
                      Average Monthly Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1"></td>
                  </tr>
                  <tr className="bg-[#C6D1FE] border border-[#00000054] uppercase text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                    <td className="px-4 py-4 2xl:py-6">AI CREDIT GUY</td>
                    <td className="px-4 py-4 2xl:py-6">$0 FOREVER</td>
                    <td className="px-4 py-4 2xl:py-6">$0 FOREVER</td>
                    <td className="px-4 py-4 2xl:py-6">$29.95 MONTHLY</td>
                    <td className="px-4 py-4 2xl:py-6">R$29.95</td>
                  </tr>
                  <tr>
                    <td className="py-1"></td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border border-[#00000054] uppercase text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px]">
                    <td className="px-4 py-4 2xl:py-6">
                      Traditional Credit Repair
                    </td>
                    <td className="px-4 py-4 2xl:py-6">Up to $399 </td>
                    <td className="px-4 py-4 2xl:py-6">UPTO $199</td>
                    <td className="px-4 py-4 2xl:py-6">$25-$40 ( Monthly )</td>
                    <td className="px-4 py-4 2xl:py-6">$250+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <a href="https://aicreditguy.com/signup.aspx/signup.aspx">
                <button
                  className={`mt-[20px] lg:mt-[30px] whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[16px] xl:py-[16px] xl:px-[22px] custom-header-btn bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[24px] cursor-pointer font-semibold text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-white hover:text-black`}
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

export default AiCreditGuy;
