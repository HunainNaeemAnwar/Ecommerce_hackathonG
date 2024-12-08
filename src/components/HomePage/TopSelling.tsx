import Cards from "./Cards";
import React from "react";

const TopSelling = () => {
  const Arrival = [
    {
      id: "1",
      image: "/Images/Top-Sellings/top-1.png",
      title: "VERTICAL STRIPED SHIRT",
      price: 212,
      discount: 232,
    },
    {
      id: "2",
      image: "/Images/Top-Sellings/top-2.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      price: 145,
      discount: 0,
    },
    {
      id: "5",
      image: "/Images/Top-Sellings/top-2.png",
      title: "hunain",
      price: 145,
      discount: 191,
    },
    {
      id: "3",
      image: "/Images/Top-Sellings/top-3.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 80,
      discount: 0,
    },
    {
      id: "4",
      image: "/Images/Top-Sellings/top-4.png",
      title: "FADED SKINNY JEANS",
      price: 210,
      discount: 0,
    },
  ];
  return (
    <section className=" flex flex-col gap-10 mt-[60px] border-b  border-black border-opacity-30 py-10  w-full lg:px-[40px]  xl:px-[75px]  ">
      <div className=" flex justify-center items-center text-[36px] lg:text-[48px] font-IntegralCF ">
        <p>Top Selling</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 ">
        {" "}
        {Arrival.map(
          (item: {
            id: string;
            title: string;
            discount?: number;
            image: string;
            price: number;
          }) => (
            <Cards
              key={item.id}
              title={item.title}
              discount={item.discount}
              image={item.image}
              price={item.price}
              percentage={
                item.discount
                  ? Math.round(
                      ((item.discount - item.price) / item.discount) * 100
                    )
                  : 0
              }
            />
          )
        )}
      </div>
      <div className="w-full  flex items-center justify-center">
        <div className="px-[40px]">
          <button className=" text-[16px] font-SatoshiBold py-3 px-12   ">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
export default TopSelling;
