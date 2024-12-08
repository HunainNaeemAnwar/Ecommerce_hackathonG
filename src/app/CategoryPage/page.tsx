import React from "react";
import HeroSection from "@/components/CategoryPage/HeroSection";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col  ">
      {" "}
      <div className="  xl:px-[45px] px-3  py-[100px] ">
        <HeroSection />
      </div>
    </main>
  );
};

export default page;
