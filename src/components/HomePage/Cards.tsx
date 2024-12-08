import React from "react";

const Cards = ({
  image,
  title,
  price,
  discount,
  percentage,
}: {
  image: string;
  title: string;
  price: number;
  discount?: number;
  percentage?: number;
}) => {
  return (
    <div className="place-self-center  ">
      <div className="px-10 py-10 bg-[#F0EEED] rounded-[20px] relative group ">
        <div
          className="w-[200px] h-[190px] lg:w-[140px] lg:h-[130px] "
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay absolute top-0 rounded-[20px] left-0 right-0 w-full h-full bg-[#000] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-10 flex-col  justify-end  text-black">
            {" "}
          </div>
        </div>
      </div>{" "}
      <h5 className="text-[16px] text-black mt-4 mb-1 font-poppinsBold">
        {title}
      </h5>
      <div className="flex flex-row gap-2">
        <p className="text-[16px] font-SatoshiBold ">{`$ ${price}`}</p>
        <p className="text-[16px] text-black  font-SatoshiBold line-through opacity-50 ">{`$${discount}`}</p>
        <div className="text-[#DB4444] w-5 px-6 py-1 rounded-[4px] flex items-center justify-center text-[12px] font-SatoshiBold  ">
          {`-${percentage}%`}
        </div>
      </div>
    </div>
  );
};
export default Cards;
