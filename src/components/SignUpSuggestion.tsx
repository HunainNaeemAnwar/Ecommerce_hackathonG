import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
const SummerSale = () => {
  return (
    <div className="absolute w-full h-[38px] bg-[#000] text-[#FAFAFA] flex items-center justify-center md:justify-end xl:gap-[490px] lg:gap-[310px] md:gap-[210px]    ">
      <div>
        <p className="font-SatoshiRegular  text-[14px] ">
          Sign up and get 20% off to your first order.
          <Link href={"/"} className="underline font-SatoshiBold  pl-2 ">
            Sign Up Now
          </Link>
        </p>
      </div>
      <div className="mr-[60px]  items-center justify-center hidden md:flex">
        <button>
          <CgClose className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
export default SummerSale;
