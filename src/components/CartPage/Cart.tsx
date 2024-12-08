import React from "react";
import CartItems from "./CartItems";
import { BiTag } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const cartItems = [
  {
    id: "1",
    image: "/Images/cart/1.png",
    name: "Gradient Graphic T-shirt",
    price: 145,
    color: "Red",
    quantity: 1,
    size: "Small",
  },
  {
    id: "2",
    image: "/Images/cart/2.png",
    name: "CHECKERED SHIRT",
    price: 280,
    color: "white",
    quantity: 2,
    size: "Medium",
  },
  {
    id: "3",
    image: "/Images/cart/3.png",
    name: "SKINNY FIT JEANS",
    price: 440,
    color: "white",
    quantity: 4,
    size: "Large",
  },
];

const Cart = () => {
  return (
    <section className="py-10">
      {" "}
      <div className="flex flex-row font-SatoshiBold text-[16px] justify-between items-center">
        Home &gt; Cart
      </div>
      <div className="flex flex-row font-IntegralCF text-[40px]">Your Cart</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5">
        {" "}
        <div className=" grid grid-cols-1 col-span-2 grid-rows-3 gap-10 pt-10 ">
          {" "}
          {cartItems.map((item) => (
            <CartItems
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              color={item.color}
              quantity={item.quantity}
              size={item.size}
            />
          ))}
        </div>
        <div className="flex flex-col col-span-1 gap-6 mt-10   relative">
          <h2 className="font-SatoshiBold text-[32px]">Order Summary</h2>
          <div className="font-SatoshiRegular text-[20px]">
            <div className="flex flex-row justify-between items-center">
              <p>Subtotal</p>
              <p>$665</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p> Discount (-20%)</p>
              <p>-$113</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Delivery Fee</p>
              <p>$15</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Total</p>
              <p>$467</p>
            </div>
          </div>
          <div className="grid md:grid-cols-1  lg:grid-cols-2 gap-2">
            <div className="flex flex-row gap-2 items-center">
              <BiTag /> <p>Add promo code</p>
            </div>
            <button className="rounded-full px-6 md:px-7 py-2 bg-black text-white">
              Apply Now
            </button>
          </div>
          <button className="rounded-full px-10 py-3 bg-black text-white absolute w-full bottom-[-100px] md:bottom-0 xl:bottom-[100px]">
            <div className="flex items-center justify-center gap-2">
              {" "}
              Go To CheckOut <BsArrowRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
