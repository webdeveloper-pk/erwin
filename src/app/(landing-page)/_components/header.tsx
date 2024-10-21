"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/public/logo.png";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 0) {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("shrink");
        }
      } else {
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setNavbar(!navbar);
  };

  const onSidebarClick = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="w-full z-[999] mx-auto text-black px-[20px] md:px-[50px] lg:px-[50px] xl:px-[80px] 2xl:px-[110px] overflow-hidden">
      <div className="mx-auto homepage-container">
        <div className="w-full flex flex-row justify-between items-center gap-x-[10px]">
          <div className="w-full flex lg:justify-start items-center gap-x-[10px] xl:gap-x-[20px] 2xl:gap-x-[50px]">
            <div className="w-full lg:w-auto flex justify-between lg:justify-start items-center">
              <div className="flex items-center gap-x-[15px]">
                <a href="/">
                  <Image
                    src={logo}
                    alt="logo"
                    className="min-h-[55px] min-w-[41px] max-h-[55px] max-w-[41px] lg:min-h-[75px] lg:min-w-[61px] lg:max-h-[75px] lg:max-w-[61px] 2xl:min-h-[95px] 2xl:min-w-[81px] 2xl:max-h-[95px] 2xl:max-w-[81px]"
                  />
                </a>
                <p className="font-medium text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px] uppercase">
                  AI CREDIT GUY
                </p>
              </div>
              <button
                onClick={toggleSidebar}
                className="focus:outline-none block lg:hidden"
              >
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[29px] h-[29px]"
                >
                  <path
                    d="M5.80872 20.521H22.073"
                    stroke="black"
                    stroke-width="2.32347"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.80872 14.7124H22.073"
                    stroke="black"
                    stroke-width="2.32347"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.80872 8.90356H22.073"
                    stroke="black"
                    stroke-width="2.32347"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-6">
            <nav className="shift whitespace-nowrap uppercase">
              <ul className="nav-list flex items-center justify-center gap-x-[0px] xl:gap-x-[5px] 2xl:gap-x-[15px]">
                <li
                  data-aos="fade-down"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="700"
                >
                  <div className="btn-test from-bottom">
                    <a
                      href="#working"
                      className="text-black hover:text-white text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                    >
                      How it wokrs
                    </a>
                  </div>
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="900"
                >
                  <div className="btn-test from-bottom">
                    <a
                      href="#faqs"
                      className="text-black hover:text-white text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                    >
                      FAQ
                    </a>
                  </div>
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1100"
                >
                  <a
                    href="#credits"
                    className="text-black hover:text-white text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  >
                    Build Credit
                  </a>
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1300"
                >
                  <div className="btn-test from-bottom">
                    <a
                      href="https://aicreditguy.com/signup.aspx/signup.aspx"
                      className="text-black hover:text-white text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                    >
                      Login
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <a href="https://aicreditguy.com/signup.aspx/signup.aspx">
              <button
                className={`whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[16px] xl:py-[16px] xl:px-[22px] custom-header-btn bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[24px] cursor-pointer font-semibold text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-white hover:text-black`}
              >
                <span className="custom-header-btn-inner">GET STARTED</span>
              </button>
            </a>
          </div>
        </div>
        <div
          className={`${
            navbar ? "active-profile-sidebar" : "not-active-profile-sidebar"
          }`}
        >
          <div
            className="profile-sidebar-inner relative"
            onClick={onSidebarClick}
          >
            <div className="absolute right-[20px] top-[25px] md:right-[45px] md:top-[27px]">
              <button
                onClick={toggleSidebar}
                className="focus:outline-none block lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="w-[29px] h-[29px]"
                >
                  <path
                    d="M21.375 13.5L5.625 13.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.375 20.25L5.625 13.5L12.375 6.75"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-y-[30px]">
              <nav className="block lg:hidden shift uppercase whitespace-nowrap">
                <ul className="flex flex-col gap-y-[30px] nav-list items-center justify-center lg:gap-x-[10px] xl:gap-x-[20px] 2xl:gap-x-[30px]">
                  <li
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="900"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="#working"
                        className="text-black hover:text-white text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                      >
                        How it wokrs
                      </a>
                    </div>
                  </li>
                  <li
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="900"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="#faqs"
                        className="text-black hover:text-white text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                      >
                        FAQ
                      </a>
                    </div>
                  </li>
                  <li
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1100"
                  >
                    <a
                      href="#credits"
                      className="text-black hover:text-white  text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                    >
                      Build Credit
                    </a>
                  </li>
                  <li
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1300"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="https://aicreditguy.com/signup.aspx/signup.aspx"
                        className="text-black hover:text-white text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                      >
                        Login
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div
                className="flex justify-center items-center gap-x-[26px] xl:gap-x-[30px] 2xl:gap-x-[36px]"
                // data-aos="fade-down"
                // data-aos-easing="ease-in-sine"
                // data-aos-duration="1900"
              >
                <a href="https://aicreditguy.com/signup.aspx/signup.aspx">
                  <button
                    className={`whitespace-nowrap py-[12px] px-[20px] lg:py-[12px] lg:px-[16px] xl:py-[16px] xl:px-[22px] custom-header-btn bg-transparent flex justify-center items-center rounded-[20px] lg:rounded-[24px] cursor-pointer font-semibold text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-white hover:text-black`}
                  >
                    <span className="custom-header-btn-inner">GET STARTED</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
