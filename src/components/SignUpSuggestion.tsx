import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
const SummerSale = () => {
  return (
    <div className="absolute w-full h-[38px] bg-[#000] text-[#FAFAFA] grid md:grid-cols-8 place-content-center place-items-center   ">
      <div className="flex flex-row items-center  col-span-7 lg:ml-[100px] xl:ml-[180px]">
        <p className="font-SatoshiRegular  text-[14px] ">
          Sign up and get 20% off to your first order.
          <Link href={"/"} className="underline font-SatoshiBold  pl-2 ">
            Sign Up Now
          </Link>
        </p>
      </div>
      <div className=" hidden md:flex  ">
        <button>
          <CgClose className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
export default SummerSale;
