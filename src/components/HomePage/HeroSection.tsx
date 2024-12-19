"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid  mt-[150px] grid-cols-1 relative md:grid-cols-12  gap-y-10 xl:gap-y-[90px] lg:gap-y-[110px]  md:gap-y-[120px] pb-[120px] md:pb-0 px-6 xl:px-[100px] md:grid-rows-[80%_20%]   ">
        {" "}
        <div className="col-span-6  md:py-6 lg:py-12 xl:py-16   mt-10 place-self-start text-center sm:text-left   ">
          {" "}
          <div>
            <h1 className=" mb-4 md:mb-2 text-start  md:leading-[42px] lg:leading-[64px] text-[50px] leading-[44px] md:text-[50px] lg:text-[56px] xl:text-[60px] font-IntegralCF ">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              <br />
            </h1>
            <p className="  text-[18px]  lg:text-[20px]  mb-3 md:mb-3 lg:mb-6 leading-[22px] text-start font-SatoshiRegular">
              Browse through our diverse range of meticulously crafted
              garments,designed <br /> to bring out your individuality and cater
              to your sense of style.
            </p>
            <div>
              <button className="px-6 lg:px-10 lg:py-3 py-3  w-full sm:w-fit rounded-full bg-black  text-white  font-SatoshiBold text-[16px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* hero image */}
        <div className="col-span-6 relative  place-self-center md:mt-[59px]  bg-[#F2F0F1]  h-[400px] w-[400px] md:w-[390px] md:h-[430px] lg:w-[480px] lg:h-[500px]  xl:w-[580px] xl:h-[600px] ">
          <Image
            src={"/Images/Hero-Pic.jpeg"}
            alt="Hero Image"
            layout="fill"
            objectFit="fit"
            className="absolute bg-transparent "
          />
        </div>
        {/* brands image */}
        <div className="w-full grid md:grid-rows-1  md:grid-cols-5 grid-cols-3 place-items-center  place-self-end absolute bg-black h-[122px]  ">
          <Link href={"/"}>
            <div className="w-[120px] h-[30px] ">
              {" "}
              <Image
                src={"/Images/Brands/versace.png"}
                width={100}
                height={100}
                alt="versace"
              />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="w-[120px] h-[50px]">
              <Image
                src={"/Images/Brands/zara.png"}
                width={100}
                height={100}
                alt="zara"
              />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="w-[120px] h-[30px] ">
              <Image
                src={"/Images/Brands/gucci.png"}
                width={100}
                height={100}
                alt="gucci"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className="col-span-2 md:col-span-1">
            <div className="w-[120px] h-[30px] ">
              <Image
                src={"/Images/Brands/prada.png"}
                width={120}
                height={100}
                alt="prada"
              />
            </div>
          </Link>
          <Link href={"/"} className="mr-[130px] md:mr-0">
            <div className="w-[120px] h-[30px] ">
              <Image
                src={"/Images/Brands/calvin klein.png"}
                width={120}
                height={100}
                alt="calvin klein"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
