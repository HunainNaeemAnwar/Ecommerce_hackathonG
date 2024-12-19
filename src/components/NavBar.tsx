"use client";
import React from "react";
import Link from "next/link";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuOverlay from "./MenuOverlay";
import DropDown from "./DropDown";
const navLinks = [
  {
    title: "Shop",
    path: "/CartPage",
  },
  {
    title: "OnSale",
    path: "/CartPage",
  },
  {
    title: "New Arrivals",
    path: "/CartPage",
  },
  {
    title: "Brands",
    path: "/CartPage",
  },
];

const dropOptions = [
  {
    route: "/",
    label: "Casual",
    value: "casual",
  },
  {
    route: "/CartPage",
    label: "Formal",
    value: "formal",
  },

  {
    route: "/CartPage",
    label: "Party",
    value: "party",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    // navbar

    <nav className="absolute top-[62px] w-full   md:py-3 z-50  px-4 lg:px-8   ">
      {/* Mobile navbar  */}

      <div className="mobile-menu  relative  flex flex-row justify-between  items-center   md:hidden   ">
        <div>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-2 py-2  text-black hover:opacity-80 "
            >
              <GiHamburgerMenu className="h-6  w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-2 py-2  text-black hover:opacity-80"
            >
              <CgClose className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="font-IntegralCF absolute left-12  text-[25px]   ">
          SHOP.CO
        </div>
        <div className="flex absolute right-0   flex-row items-center justify-between  gap-3">
          {" "}
          <Link href={"/"}>
            <BiSearch className="h-5 w-5" />
          </Link>{" "}
          <Link href={"/CartPage"}>
            <RiShoppingCartLine className=" h-5 w-5" />
          </Link>{" "}
          <Link href={"/CartPage"}>
            <BiUserCircle className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Desktop navbar */}

      <div className="md:flex items-center hidden justify-between xl:gap-[50px] lg:gap-[10px]  md:gap-1">
        <h2 className="font-IntegralCF  text-black md:text-[27px] lg:text-[32px]  ">
          SHOP.CO
        </h2>{" "}
        <ul className="flex items-center justify-center   gap-3  md:gap-4 lg:gap-8 py-2 font-SatoshiRegular text-black  text-[14px] lg:text-[16px]  ">
          <li>
            <DropDown DropDownOptions={dropOptions} />
          </li>
          <li>
            <Link href={"/CategoryPage"}>OnSale</Link>
          </li>
          <li>
            <Link href={"/CartPage"} className="text-ellipsis">
              New Arrivals{" "}
            </Link>
          </li>
          <li>
            <Link href={"/"}>Brands</Link>
          </li>
        </ul>
        <div className="bg-white">
          <form className="relative ">
            <input
              type="text"
              placeholder="Search for products..."
              className="font-SatoshiRegular lg:text-[16px] md:text-[13px] xl:py-2 md:py-1 lg:pl-7 md:pl-5 xl:pr-[150px] lg:pr-[50px] md:pr-[5px] border border-black border-opacity-35 rounded-md text-black"
            />
            <button className="absolute left-2 top-[8px] lg:top-[6px] xl:top-[10px]  ">
              <BiSearch className="w-4 h-4 lg:w-5 lg:h-5 text-black opacity-30 " />
            </button>
          </form>
        </div>
        <div className="flex flex-row gap-5 items-center ">
          <Link href={""}>
            <RiShoppingCartLine className="lg:w-6 lg:h-6 h-4 w-4" />
          </Link>
          <Link href={""}>
            {" "}
            <BiUserCircle className="lg:w-6 lg:h-6 h-5 w-5" />
          </Link>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};
export default NavBar;
