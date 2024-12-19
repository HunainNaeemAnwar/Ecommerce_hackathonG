"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = ({
  DropDownOptions,
}: {
  DropDownOptions: { route: string; label: string; value: string }[];
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Shop");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: { route: string; label: string }) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    if (option.route && router) {
      router.push(option.route);
    } else if (!option.route) {
      console.warn(`No route defined for option: ${option.label}`);
    } else {
      console.warn("Router is not available");
    }
  };
  return (
    <div className="relative flex  bg-slate-700 text-left w-[80px] lg:w-[100px] items-center justify-center ">
      <button
        onClick={toggleDropdown}
        className="absolute flex justify-center w-full py-[2px] lg:py-[3px] xl:py-[4px]  lg:text-[16px] text-[14px] font-SatoshiBold  bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex justify-center items-center ml-3  ">
          {" "}
          {selectedOption}
          {!isOpen ? (
            <RiArrowDropDownLine className="w-6  h-6 " />
          ) : (
            <RiArrowDropDownLine className="w-6 h-6 transformrm rotate-180" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-5 left-0 right-0  w-full   bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {DropDownOptions.map((options) => (
              <button
                key={options.value}
                onClick={() => handleOptionSelect(options)}
                className="block w-full px-4 py-2  lg:text-[16px] text-[14px] text-gray-400 hover:bg-gray-100 hover:text-gray-900"
              >
                {options.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
