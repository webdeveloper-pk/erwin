import Image from "next/image";
import bot from "@/public/terms-bot.png";

const Terms = () => {
  return (
    <div className="w-full mx-auto text-black overflow-hidden">
      <div className="flex justify-center items-center py-[30px]">
        <p className="font-semibold text-[20px] md:text-[20px] lg:text-[22px] 2xl:text-[24px]">
          Terms - Privacy Policy
        </p>
      </div>
      <div className="bg-gradient">
        <div className="mx-auto homepage-container py-[40px] lg:py-[50px] 2xl:py-[60px] px-[20px] md:px-[50px] lg:px-[50px] xl:px-[80px] 2xl:px-[110px]">
          <div className="flex justify-center">
            <div>
              <div className="pl-[30px]">
                <Image
                  src={bot}
                  alt="robot"
                  className="w-[150px] h-[190px] lg:w-[180px] lg:h-[220px] 2xl:w-[240px] 2xl:h-[280px] mx-auto"
                />
              </div>

              <div className="py-[40px] 2xl:py-[60px] flex justify-center items-center gap-5">
                {/* linkedin */}
                <a href="/">
                  <svg
                    width="61"
                    height="61"
                    viewBox="0 0 61 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[41px] h-[41px] lg:w-[51px] lg:h-[51px] 2xl:w-[61px] 2xl:h-[61px]"
                  >
                    <g clip-path="url(#clip0_0_633)">
                      <path
                        d="M10.1705 7.625H50.8372C51.5113 7.625 52.1578 7.89278 52.6344 8.36944C53.1111 8.84609 53.3788 9.49257 53.3788 10.1667V50.8333C53.3788 51.5074 53.1111 52.1539 52.6344 52.6306C52.1578 53.1072 51.5113 53.375 50.8372 53.375H10.1705C9.49642 53.375 8.84994 53.1072 8.37328 52.6306C7.89663 52.1539 7.62885 51.5074 7.62885 50.8333V10.1667C7.62885 9.49257 7.89663 8.84609 8.37328 8.36944C8.84994 7.89278 9.49642 7.625 10.1705 7.625ZM12.7122 12.7083V48.2917H48.2955V12.7083H12.7122ZM19.0663 22.875C18.0552 22.875 17.0855 22.4733 16.3705 21.7583C15.6555 21.0434 15.2538 20.0736 15.2538 19.0625C15.2538 18.0514 15.6555 17.0816 16.3705 16.3667C17.0855 15.6517 18.0552 15.25 19.0663 15.25C20.0775 15.25 21.0472 15.6517 21.7622 16.3667C22.4772 17.0816 22.8788 18.0514 22.8788 19.0625C22.8788 20.0736 22.4772 21.0434 21.7622 21.7583C21.0472 22.4733 20.0775 22.875 19.0663 22.875ZM16.5247 25.4167H21.608V44.4792H16.5247V25.4167ZM30.5038 26.5096C31.9882 25.0735 33.7216 24.1458 35.5872 24.1458C40.851 24.1458 44.483 28.4133 44.483 33.6771V44.4792H39.3997V33.6771C39.3997 32.4974 38.9311 31.3661 38.0969 30.5319C37.2628 29.6978 36.1314 29.2292 34.9518 29.2292C33.7721 29.2292 32.6408 29.6978 31.8066 30.5319C30.9725 31.3661 30.5038 32.4974 30.5038 33.6771V44.4792H25.4205V25.4167H30.5038V26.5096Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_633">
                        <rect
                          width="61"
                          height="61"
                          fill="white"
                          transform="translate(0.00384521)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                {/* fb */}
                <a href="/">
                  <svg
                    width="62"
                    height="61"
                    viewBox="0 0 62 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[42px] h-[41px] lg:w-[52px] lg:h-[51px] 2xl:w-[62px] 2xl:h-[61px]"
                  >
                    <g clip-path="url(#clip0_0_636)">
                      <path
                        d="M33.8372 50.6764C38.9645 50.024 43.6509 47.4437 46.9441 43.4601C50.2372 39.4764 51.8899 34.3882 51.5663 29.2297C51.2426 24.0713 48.9669 19.2296 45.2016 15.6888C41.4364 12.148 36.4641 10.1737 31.2955 10.1673C26.1206 10.1635 21.1389 12.1329 17.3655 15.6743C13.5921 19.2157 11.311 24.0626 10.987 29.2274C10.6629 34.3922 12.3203 39.4862 15.6214 43.4714C18.9226 47.4567 23.619 50.0334 28.7539 50.6764V35.584H23.6705V30.5006H28.7539V26.2967C28.7539 22.8985 29.1097 21.6658 29.7705 20.4229C30.4215 19.1932 31.4276 18.188 32.6579 17.5382C33.6288 17.0171 34.8361 16.7045 36.9457 16.5698C37.7819 16.5164 38.8646 16.5825 40.1939 16.7731V21.6023H38.9205C36.5898 21.6023 35.6265 21.7116 35.0521 22.0191C34.7094 22.1954 34.4303 22.4744 34.254 22.8172C33.949 23.3916 33.8372 23.9609 33.8372 26.2942V30.5006H40.1914L38.9205 35.584H33.8372V50.6764ZM31.2955 55.9173C17.2579 55.9173 5.87887 44.5383 5.87887 30.5006C5.87887 16.463 17.2579 5.08398 31.2955 5.08398C45.3332 5.08398 56.7122 16.463 56.7122 30.5006C56.7122 44.5383 45.3332 55.9173 31.2955 55.9173Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_636">
                        <rect
                          width="61"
                          height="61"
                          fill="white"
                          transform="translate(0.795525)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                {/* insta */}
                <a href="/">
                  <svg
                    width="62"
                    height="61"
                    viewBox="0 0 62 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[42px] h-[41px] lg:w-[52px] lg:h-[51px] 2xl:w-[62px] 2xl:h-[61px]"
                  >
                    <g clip-path="url(#clip0_0_639)">
                      <path
                        d="M31.0872 22.8757C29.0649 22.8757 27.1255 23.679 25.6955 25.109C24.2655 26.5389 23.4622 28.4784 23.4622 30.5006C23.4622 32.5229 24.2655 34.4624 25.6955 35.8923C27.1255 37.3223 29.0649 38.1256 31.0872 38.1256C33.1095 38.1256 35.0489 37.3223 36.4789 35.8923C37.9089 34.4624 38.7122 32.5229 38.7122 30.5006C38.7122 28.4784 37.9089 26.5389 36.4789 25.109C35.0489 23.679 33.1095 22.8757 31.0872 22.8757ZM31.0872 17.7923C34.4577 17.7923 37.6901 19.1312 40.0733 21.5145C42.4566 23.8978 43.7955 27.1302 43.7955 30.5006C43.7955 33.8711 42.4566 37.1035 40.0733 39.4868C37.6901 41.8701 34.4577 43.209 31.0872 43.209C27.7167 43.209 24.4843 41.8701 22.101 39.4868C19.7178 37.1035 18.3789 33.8711 18.3789 30.5006C18.3789 27.1302 19.7178 23.8978 22.101 21.5145C24.4843 19.1312 27.7167 17.7923 31.0872 17.7923ZM47.608 17.1569C47.608 17.9995 47.2733 18.8076 46.6775 19.4034C46.0817 19.9993 45.2736 20.334 44.4309 20.334C43.5883 20.334 42.7802 19.9993 42.1844 19.4034C41.5886 18.8076 41.2539 17.9995 41.2539 17.1569C41.2539 16.3143 41.5886 15.5062 42.1844 14.9104C42.7802 14.3145 43.5883 13.9798 44.4309 13.9798C45.2736 13.9798 46.0817 14.3145 46.6775 14.9104C47.2733 15.5062 47.608 16.3143 47.608 17.1569ZM31.0872 10.1673C24.7991 10.1673 23.7723 10.1851 20.8468 10.3147C18.8542 10.4088 17.5172 10.6757 16.2769 11.1586C15.1738 11.5856 14.3783 12.0964 13.5319 12.9454C12.7364 13.714 12.1247 14.6523 11.7426 15.6904C11.2597 16.9358 10.9928 18.2702 10.9013 20.2603C10.7691 23.0663 10.7539 24.0474 10.7539 30.5006C10.7539 36.7887 10.7717 37.8156 10.9013 40.741C10.9953 42.7311 11.2622 44.0706 11.7426 45.3084C12.1747 46.414 12.683 47.2096 13.5268 48.0534C14.3834 48.9074 15.1789 49.4183 16.2718 49.8402C17.5274 50.3256 18.8643 50.5951 20.8468 50.6866C23.6528 50.8187 24.6339 50.834 31.0872 50.834C37.3753 50.834 38.4021 50.8162 41.3276 50.6866C43.3152 50.5925 44.6546 50.3256 45.8949 49.8453C46.9955 49.4157 47.7961 48.9049 48.6399 48.061C49.4965 47.2045 50.0074 46.4089 50.4293 45.316C50.9122 44.063 51.1816 42.7235 51.2731 40.741C51.4053 37.935 51.4205 36.9539 51.4205 30.5006C51.4205 24.2126 51.4027 23.1857 51.2731 20.2603C51.1791 18.2727 50.9122 16.9307 50.4293 15.6904C50.0462 14.6534 49.4357 13.7154 48.6425 12.9454C47.8742 12.1494 46.9358 11.5377 45.8975 11.156C44.6521 10.6731 43.3152 10.4062 41.3276 10.3147C38.5216 10.1826 37.5405 10.1673 31.0872 10.1673ZM31.0872 5.08398C37.9929 5.08398 38.8545 5.1094 41.5639 5.23648C44.2708 5.36357 46.1135 5.78803 47.7351 6.41836C49.4126 7.06394 50.8258 7.93828 52.2389 9.3489C53.5314 10.6195 54.5314 12.1564 55.1695 13.8527C55.7973 15.4718 56.2243 17.317 56.3514 20.0239C56.4708 22.7333 56.5039 23.5949 56.5039 30.5006C56.5039 37.4064 56.4784 38.268 56.3514 40.9774C56.2243 43.6843 55.7973 45.527 55.1695 47.1486C54.5332 48.8458 53.533 50.3831 52.2389 51.6524C50.968 52.9444 49.4312 53.9444 47.7351 54.5829C46.1161 55.2107 44.2708 55.6377 41.5639 55.7648C38.8545 55.8843 37.9929 55.9173 31.0872 55.9173C24.1815 55.9173 23.3199 55.8919 20.6104 55.7648C17.9036 55.6377 16.0609 55.2107 14.4393 54.5829C12.7423 53.9462 11.2051 52.946 9.93545 51.6524C8.64277 50.382 7.64269 48.845 7.00491 47.1486C6.37457 45.5295 5.95012 43.6843 5.82303 40.9774C5.70357 38.268 5.67053 37.4064 5.67053 30.5006C5.67053 23.5949 5.69595 22.7333 5.82303 20.0239C5.95012 17.3145 6.37457 15.4743 7.00491 13.8527C7.64092 12.1554 8.64124 10.618 9.93545 9.3489C11.2054 8.05578 12.7425 7.05563 14.4393 6.41836C16.0609 5.78803 17.901 5.36357 20.6104 5.23648C23.3199 5.11703 24.1815 5.08398 31.0872 5.08398Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_639">
                        <rect
                          width="61"
                          height="61"
                          fill="white"
                          transform="translate(0.587189)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-[15px] 2xl:text-[16px] text-center">
            Under federal law you have the right to receive a Credit Report from
            each of the three nationwide consumer reporting agencies once every
            12 months. A Credit Score is not included.
            <br />
            IMPORTANT: Ai Credit Guy is not a credit repair service
            organization. We do not claim to fix your credit as we are a
            self-help software.
            <br />
            You have a right to dispute inaccurate information in your credit
            report by contacting the credit bureau directly. However, neither
            you nor a credit repair company or credit repair organization has
            the right to have accurate, current and verifiable information
            removed from your credit report. The credit bureau must remove
            accurate, negative information from your report only if it is over 7
            years old. Bankruptcy information can be reported up to 10 years.
            Credit bureaus are required to follow reasonable procedures to
            ensure that the information they report is accurate. However,
            mistakes may occur. You may, on your own, notify a credit bureau in
            writing that you dispute that accuracy of information in your credit
            file. The credit bureau must then reinvestigate and modify or remove
            inaccurate or incomplete information. The credit bureau may not
            charge any fee for this service. Any pertinent information and
            copies of all documents you have concerning an error should be given
            to the credit bureau. If the credit bureau's reinvestigation does
            not resolve the dispute to your satisfaction, you may send a brief
            statement to the credit bureau to be kept in your file, explaining
            why you think the record is inaccurate. The credit bureau must
            include a summary of your statement about disputed information with
            any report it issues about you.
            <br />
            All product and company names and trademarks mentioned herein are
            the property of their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
