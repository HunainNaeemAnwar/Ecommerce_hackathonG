import React from "react";
import { BiEnvelope, BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import Image from "next/image";
import { ImTwitter } from "react-icons/im";

const FooterSection = () => {
  return (
    <section className="grid  grid-cols-1 md:grid-rows-1 gap-[50px] w-full  ">
      <div className="bg-black rounded-3xl  text-white row-span-1  flex flex-col gap-4 p-8 md:flex-row justify-between">
        <div className="font-IntegralCF text-[40px] leading-[40px]">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </div>
        <div>
          <form className="flex flex-col gap-3 text-16px text-black font-SatoshiBold relative">
            <input
              type="text"
              placeholder="Enter your email address "
              className="rounded-3xl md:pr-16 px-9 py-1 md:pl-10 md:py-2 "
            />
            <BiEnvelope className=" absolute w-4 h-4 md:w-5 md:h-5 md:left-4 left-4 top-[10px] md:top-[13px] opacity-30" />
            <button className="rounded-3xl px-9 md:px-20 py-1 md:py-2  ">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="grid  grid-cols-2 grid-rows-3 lg:grid-rows-1 place-items-center lg:grid-cols-5 gap-y-5 lg:gap-y-0   row-span-1 text-[14px] font-SatoshiRegular  mt-14">
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1 row-span-1">
          <h3 className=" text-[33px] font-IntegralCF ">SHOP.CO</h3>

          <p className="opacity-60">
            We have clothes that suits your style and <br />
            which you&apos;re proud to wear. From <br />
            women to men.
          </p>
          <div className="flex justify-start items-center gap-4  col-span-1 row-span-1">
            <div className="border border-black rounded-full p-1 ">
              <Link href={"/"}>
                {" "}
                <BiLogoFacebook className="w-6 h-6 boeder" />
              </Link>
            </div>
            <div className="border border-black rounded-full p-1 ">
              <Link href={"/"}>
                {" "}
                <ImTwitter className="w-5 h-5" />
              </Link>
            </div>
            <div className="border border-black rounded-full p-1 ">
              <Link href={"/"}>
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
            <div className="border border-black rounded-full p-1 ">
              <Link href={"/"}>
                {" "}
                <GrLinkedinOption className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-1 row-span-1">
          <h3 className=" text-[16px] font-SatoshiBold">COMPANY</h3>
          <Link className="opacity-60" href={"/"}>
            About
          </Link>
          <Link className="opacity-60" href={"/"}>
            Feature
          </Link>
          <Link className="opacity-60" href={"/"}>
            Work
          </Link>
          <Link className="opacity-40" href={"/"}>
            Career
          </Link>
        </div>
        <div className="flex flex-col gap-4 col-span-1 row-span-1">
          <h3 className=" text-[16px] font-SatoshiBold">HELP</h3>
          <Link className="opacity-40" href={"/"}>
            Customer Support
          </Link>
          <Link className="opacity-60" href={"/"}>
            Delivery Details
          </Link>
          <Link className="opacity-60" href={"/"}>
            Terms & Conditions
          </Link>
          <Link className="opacity-40" href={"/"}>
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-4 col-span-1 row-span-1 ">
          <h3 className=" text-[16px] font-SatoshiBold">FAQ</h3>
          <Link className="opacity-60" href={"/"}>
            Account
          </Link>
          <Link className="opacity-60" href={"/"}>
            Manage Deliveries
          </Link>
          <Link className="opacity-60" href={"/"}>
            Orders
          </Link>
          <Link className="opacity-60" href={"/"}>
            Payments
          </Link>
        </div>
        <div className="flex flex-col gap-4 row-span-1 col-span-1">
          <h3 className=" text-[16px] font-SatoshiBold">RESOURCES</h3>
          <Link className="opacity-60" href={"/"}>
            Free eBooks
          </Link>
          <Link className="opacity-60" href={"/"}>
            Development Tutorial
          </Link>
          <Link className="opacity-60" href={"/"}>
            How to - Blog
          </Link>
          <Link className="opacity-60" href={"/"}>
            Youtube Playlist
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 items-center justify-between row-span-1  border-t border-gray-200 h-[40px] py-10 ">
        <p className="font-poppinsRegular text-[16px] opacity-40 ">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex items-center justify-center ">
          <Image
            src={"/Images/Footer/logo-1.png"}
            width={80}
            height={30}
            alt="logo-1"
          />
          <Image
            src={"/Images/Footer/logo-2.png"}
            width={80}
            height={30}
            alt="logo-2"
          />
          <Image
            src={"/Images/Footer/logo-3.png"}
            width={80}
            height={30}
            alt="logo-3"
          />
          <Image
            src={"/Images/Footer/logo-4.png"}
            width={80}
            height={30}
            alt="logo-4"
          />
          <Image
            src={"/Images/Footer/logo-5.png"}
            width={80}
            height={30}
            alt="logo-5"
          />
        </div>
      </div>
    </section>
  );
};
export default FooterSection;
