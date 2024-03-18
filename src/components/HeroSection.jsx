"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";

const HeroSection = () => {
  const foodImageRef = useRef(null);

  useEffect(() => {
    const foodImage = foodImageRef.current;
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        if (window.scrollY > 30) {
          foodImage.style.zIndex = 2;
        } else {
          foodImage.style.zIndex = 5;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto flex justify-center items-center xl:my-[10px]">
      <div className="px-[30px] py-[40px] lg:py-[50px] rounded-[31px] w-[90vw]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="relative flex flex-col justify-center items-center md:items-start gap-[15px] text-center md:text-start md:w-[55%] lg:w-[50%] xl:w-[80%] lg:py-2 2xl:py-5">
            <h1 className="w-[290px] md:w-[350px] lg:w-full max-w-xl text-white text-2xl md:text-4xl lg:text-5xl font-medium font-header tracking-tight lg:tracking-tighter 2xl:tracking-tight select-none">
              Boosting growth with fast and affordable solutions designed to fit
              your business needs
            </h1>

            <Link
              href="/contact"
              className="absolute md:static -bottom-[5rem] px-[50px] py-[15px] md:mt-[21px] bg-white rounded-[50px] shadow-2xl flex justify-center items-center gap-2"
            >
              <p className="text-center text-[#3E5D9D] text-base font-semibold font-sans capitalize leading-tight">
                Get in touch with us
              </p>
            </Link>
          </div>

          <div className="lg:w-[50%] 2xl:w-[80%] relative mx-auto mt-[4.2rem] md:mt-0 md:mb-[4rem] lg:mb-[5rem] xl:mb-[3.5rem] 2xl:mb-[4.5rem]">
            <div className="lg:absolute lg:-bottom-[12rem] xl:-bottom-[12.5rem] 2xl:-bottom-[14.4rem] lg:left-[5rem] xl:left-[2rem] 2xl:left-[20rem] aspect-[1/1.12] md:w-[300px] lg:w-[350px] xl:w-[365px] 2xl:w-[390px] grid items-end rounded-[0_0_100vw_100vw] overflow-hidden">
              <span className="absolute inset-[auto_0_0] aspect-square rounded-[50%] mx-auto object-cover bg-[#6C9DD7]"></span>
              <Image
                ref={foodImageRef}
                src={"/assets/images/food.webp"}
                width={1920}
                height={1080}
                alt="food logo"
                priority
                className="z-[2] lg:z-[5] h-[25rem] 2xl:h-[500px] md:max-w-[300px] lg:max-w-[350px] 2xl:max-w-[390px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
