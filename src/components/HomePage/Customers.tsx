import React from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const CategorySection = () => {
  return (
    <section className=" flex  flex-col gap-10  mt-[60px] border-b border-black border-opacity-30 py-10  w-full lg:40px  xl:px-[75px]">
      <div className=" flex flex-col lg:flex-row justify-center items-center  gap-[70px] text-[36px] font-IntegralCF ">
        <p>BROWSE BY dress STYLE</p>
        <div className="flex flex-row gap-4 mt-2  ">
          <BsArrowLeft className="w-6 h-6 hover:cursor-pointer" />
          <BsArrowRight className="w-6 h-6 hover:cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
