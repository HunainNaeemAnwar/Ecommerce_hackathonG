import React from "react";
import Links from "next/link";
import { RiArrowDropRightLine, RiArrowDropUpLine } from "react-icons/ri";
import Image from "next/image";

import { TbFilterSearch } from "react-icons/tb";
import Cards from "../HomePage/Cards";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const HeroSection = () => {
  const Arrival = [
    {
      id: "1",
      image: "/Images/Category/shirts/1.png",
      title: "T-SHIRT WITH TAPE DETAILS",
      price: 120,
      discount: 0,
    },
    {
      id: "2",
      image: "/Images/Category/shirts/2.png",
      title: "SKINNY FIT JEANS",
      price: 240,
      discount: 260,
    },
    {
      id: "3",
      image: "/Images/Category/shirts/3.png",
      title: "CHECKERED SHIRT",
      price: 180,
      discount: 0,
    },
    {
      id: "4",
      image: "/Images/Category/shirts/4.png",
      title: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      discount: 160,
    },
    {
      id: "5",
      image: "/Images/Category/shirts/5.png",
      title: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      discount: 160,
    },
    {
      id: "6",
      image: "/Images/Category/shirts/6.png",
      title: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      discount: 160,
    },
    {
      id: "7",
      image: "/Images/Category/shirts/7.png",
      title: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      discount: 160,
    },
    {
      id: "8",
      image: "/Images/Category/shirts/8.png",
      title: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      discount: 160,
    },
    {
      id: "9",
      image: "/Images/Category/shirts/9.png",
      title: "SLEEVE STRIPED T-SHIRT",
      price: 130,
      discount: 160,
    },
  ];
  return (
    <section className="relative">
      <div className="  px-6 font-SatoshiBold text-[16px] mt-8 md:mt-14 ">
        <p>Home&gt;Casual</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-x-16 px-3  md:grid-rows-[10%_90%]  py-4 mt-4 relative">
        <div className=" px-4 col-span-2 min-h-max   ">
          {/* all amin div  */}
          <div className=" md:grid grid-col-1 gap-8 hidden">
            <div className="flex flex-col gap-4 border-b border-black border-opacity-30 text-[16px] font-SatoshiRegular ">
              {" "}
              <div className="flex flex-row justify-between px-7 py-3 border-t border-b border-black border-opacity-30 text-[20px]">
                <h3 className="font-SatoshiBold text-[20px] ">Filters</h3>
                <TbFilterSearch className="w-6 h-6" />
              </div>
              <div className="flex flex-row  justify-between px-6">
                {" "}
                <Links href={"/CategoryPagge"}>TShirts</Links>
                <RiArrowDropRightLine className="w-6 h-6  " />
              </div>
              <div className="flex flex-row  justify-between px-6">
                {" "}
                <Links href={"/CategoryPagge"}>Shorts</Links>{" "}
                <RiArrowDropRightLine className="w-6 h-6 " />
              </div>
              <div className="flex flex-row  justify-between px-6">
                {" "}
                <Links href={"/CategoryPagge"}>Shirts</Links>{" "}
                <RiArrowDropRightLine className="w-6 h-6 " />
              </div>
              <div className="flex flex-row justify-between px-6 ">
                <Links href={"/CategoryPagge"}>Hoodie</Links>{" "}
                <RiArrowDropRightLine className="w-6 h-6 " />
              </div>
              <div className="flex flex-row  justify-between px-6">
                <Links href={"/CategoryPagge"}>Jeans</Links>{" "}
                <RiArrowDropRightLine className="w-6 h-6 " />
              </div>
            </div>
            {/* Price */}
            <div className="flex flex-col text-[16px] font-SatoshiRegular border-b border-black border-opacity-30 py-10    ">
              <div className="flex justify-between font-SatoshiBold text-[20px] ">
                <p>Price</p>
                <RiArrowDropUpLine className="w-6 h-6 " />
              </div>
              <div className="flex flex-col">
                <input
                  type="range"
                  max={200}
                  min={10}
                  className="appearance-none cursor-pointer slider-thumb rounded-lg bg-black"
                />
                <div className="flex fle-row mt-3 justify-evenly">
                  <p>$20</p>
                  <p>$50</p>
                </div>
              </div>
            </div>{" "}
            {/* color */}
            <div className="text-[16px] font-SatoshiRegular   border-b border-black border-opacity-30 pb-6  ">
              <div className="flex flex-row justify-between text-[20px] font-SatoshiBold ">
                <p>Colors</p>
                <RiArrowDropUpLine className="w-6 h-6 " />
              </div>
              <div>
                <Image
                  src={"/Images/Category/color.png"}
                  width={247}
                  height={90}
                  alt="color-pellete"
                />
              </div>
            </div>
            {/* Size */}
            <div className="flex flex-col   border-b border-black border-opacity-30 pb-6 gap-6">
              {" "}
              <div className=" flex flex-row justify-between text-[20px] font-SatoshiBold">
                <p>Size</p>
                <RiArrowDropUpLine className="w-6 h-6 " />
              </div>
              <div className="grid grid-cols-2 grid-rows-2 text-[16px] font-SatoshiRegular px-6 gap-3">
                <p>Small</p>
                <p>Large</p>
                <p>XXl</p>
                <p>Xl</p>
                <p>Medium</p>
              </div>
            </div>
            {/* Dressing */}
            <div className=" grid grid-col-1 ">
              <div className="flex flex-col gap-4  text-[16px] font-SatoshiRegular  ">
                {" "}
                <div className="flex flex-row justify-between text-[20px]">
                  <h3 className="font-SatoshiBold text-[20px] ">
                    Dressing Style
                  </h3>
                </div>
                <div className="flex flex-row  justify-between px-6">
                  {" "}
                  <Links href={"/CategoryPagge"}>Casual</Links>
                  <RiArrowDropRightLine className="w-6 h-6  " />
                </div>
                <div className="flex flex-row  justify-between px-6">
                  {" "}
                  <Links href={"/CategoryPagge"}>Formal</Links>{" "}
                  <RiArrowDropRightLine className="w-6 h-6 " />
                </div>
                <div className="flex flex-row  justify-between px-6">
                  {" "}
                  <Links href={"/CategoryPagge"}>Party</Links>{" "}
                  <RiArrowDropRightLine className="w-6 h-6 " />
                </div>
                <div className="flex flex-row justify-between px-6 ">
                  <Links href={"/CategoryPagge"}>Gym</Links>{" "}
                  <RiArrowDropRightLine className="w-6 h-6 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product */}
        <div className=" col-span-6 min-h-max px-4 ml-6 relative   ">
          <div className="flex flex-row justify-between gap-[230px] items-center ">
            <p className="font-SatoshiBold text-[32px]"> Casual</p>{" "}
            <div className="flex flex-row gap-4">
              <p className="hidden lg:block opacity-65 text-[16px] font-SatoshiRegular">
                Showing 1-10 of 100 Products
              </p>
              <div className="md:flex hidden flex-row gap-2">
                {" "}
                <p className="opacity-65 text-[16px] font-SatoshiRegular ">
                  Sorted by:
                </p>
                <button className="font-SatoshiBold text-[16px]">
                  Most Popular
                </button>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 place-content-center gap-6 pt-10 ">
            {" "}
            {Arrival.map(
              (item: {
                id: string;
                title: string;
                discount?: number;
                image: string;
                price: number;
              }) => (
                <Cards
                  key={item.id}
                  title={item.title}
                  discount={item.discount}
                  image={item.image}
                  price={item.price}
                  percentage={
                    item.discount
                      ? Math.round(
                          ((item.discount - item.price) / item.discount) * 100
                        )
                      : 0
                  }
                />
              )
            )}
          </div>
          <div className="flex flex-row absolute w-full sm:mt-10 py-10 text-[16px] font-SatoshiBold pr-[30px] sm:p-0  justify-evenly items-center">
            <Links href={"/"}>
              <div className="flex flex-row justify-center items-center gap-3 ">
                <BiArrowBack />
                <p>Previous</p>
              </div>
            </Links>{" "}
            <div className="flex flex-row justify-center items-center  gap-3 ">
              <Links href={"/CategoryPage"}>1</Links>
              <Links href={"/CategoryPage"}>2</Links>
              <Links href={"/CategoryPage"}>3</Links>
              <Links href={"/CategoryPage"}>4</Links>
              <Links href={"/CategoryPage"}>5</Links>
              <Link href={"/CategoryPage"}>6</Link>
              <Link href={"/CategoryPage"}>7</Link>
            </div>
            <Links href={"/"}>
              <div className="flex flex-row justify-center items-center gap-3 ">
                <p>Forward</p>
                <IoArrowForward />
              </div>
            </Links>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
