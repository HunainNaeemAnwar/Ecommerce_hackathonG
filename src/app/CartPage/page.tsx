import Cart from "@/components/CartPage/Cart";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col  ">
      {" "}
      <div className="  xl:px-[45px] px-3  py-[100px] ">
        <Cart />
      </div>
    </main>
  );
};

export default page;
