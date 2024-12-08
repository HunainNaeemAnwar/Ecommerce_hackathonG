import React from "react";
import Image from "next/image";

const CategorySection = () => {
  return (
    <section className=" flex flex-col gap-10  mt-[60px] border-b border-black border-opacity-30 py-10  w-full lg:40px  xl:px-[75px]">
      <div className="flex justify-center items-center  text-center text-[36px] lg:text-[48px] font-IntegralCF ">
        <p>BROWSE BY dress STYLE</p>
      </div>
      <div className="grid  place-items-center  md:grid-rows-[1fr_1fr] md:grid-cols-3 gap-y-5">
        <div className="col-span-1 ">
          <Image
            src={"/Images/Categories/category-1.png"}
            width={400}
            height={280}
            alt="casual"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={"/Images/Categories/category-2.png"}
            width={680}
            height={280}
            alt="casual"
          />
        </div>
        <div className="col-span-2 ">
          <Image
            src={"/Images/Categories/category-3.png"}
            width={680}
            height={280}
            alt="casual"
          />
        </div>
        <div className="col-span-1 ">
          <Image
            src={"/Images/Categories/category-4.png"}
            width={400}
            height={280}
            alt="casual"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
