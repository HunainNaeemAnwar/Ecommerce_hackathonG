import React from "react";
import Image from "next/image";
import { BiMinus, BiTrash } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";

const CartItems: React.FC<{
  image: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
}> = ({ image, name, price, quantity, size, color }) => {
  return (
    <div className="flex flex-row border relative">
      <div className="  ">
        <Image src={`${image}`} alt="image" width={130} height={130} />
      </div>{" "}
      <div className="  flex flex-col gap-3">
        {" "}
        <div className="ml-3">
          <h5 className="text-[20px]  font-SatoshiBold">{name}</h5>{" "}
          <p className="text-[14px] text-black  font-SatoshiRegular  opacity-50 ">{`Color : ${color}`}</p>
          <p className="text-[14px] text-black  font-SatoshiRegular  opacity-50 ">{`Size : ${size}`}</p>
        </div>
        <p className="text-[16px] text-black  font-SatoshiRegular   ml-3 ">{`$${price}`}</p>
      </div>
      <div className="absolute right-1 top-1">
        <Link href={"/"}>
          <BiTrash />
        </Link>
      </div>
      <div className="flex absolute bottom-2 right-2 justify-end items-center gap-3">
        {" "}
        <BsPlus />
        {quantity} <BiMinus />{" "}
      </div>
    </div>
  );
};

export default CartItems;
