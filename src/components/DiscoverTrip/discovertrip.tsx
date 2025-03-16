"use client";
import React, { useState } from "react";
import Wrapper from "../layout/Wrapper";
import CommonList from "./CommonList/Commonlist";

export default function DiscoverTrip() {
  const [commonList, setCommonList] = useState([
    {
      title: "Location",
      children: "Where are you going ?",
      opened: false,
      type: "location",
    },
    {
      title: "Check in",
      children: "Add dates",
      opened: false,
      type: "checkin",
    },
    {
      title: "Check out",
      children: "Add dates",
      opened: false,
      type: "checkout",
    },
    {
      title: "Price",
      children: "Enter the price",
      opened: false,
      type: "price",
    },
  ]);

  const [price, setPrice] = useState(0);

  const toggleOpened = (index: number) => {
    setCommonList((prevList) =>
      prevList.map((item, i) =>
        i === index
          ? { ...item, opened: !item.opened }
          : { ...item, opened: false }
      )
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center xl:pt-[72px] xl:h-[266px] xl:w-[1240px]  ">
      <br />
      <br />
      <div
        className="text-primary w-full text-[40px] md:text-[80px]   text-center "
        style={{ fontFamily: "Smooch, cursive" }}
      >
        Discover Trip
      </div>
      <br />
      <div className="flex justify-center w-full">
        <div className="flex flex-col h-auto  justify-between  xl:flex-row w-full xl:h-[134px]  items-start gap-[20px] py-[32px] px-[24px] bg-white rounded-[10px] border border-[#EBE8E8] shadow-[0px_0px_15px_0px_#817e7e26]">
          {commonList.map((item, index) => (
            <div className="w-full">
              <CommonList
                key={index}
                title={item.title}
                children={item.children}
                opened={item.opened}
                type={item.type}
                onClick={() => toggleOpened(index)}
                className="flex-1 "
              />
              {item.opened && item.type === "location" && (
                <div className="absolute md:ml-[0px] md:mt-[40px] w-[200px]  bg-white md:p-4 shadow-md rounded-xl md:w-[250px] md:my-[10px]  ">
                  <ul className="space-y-2 scrollbar-hide ">
                    <li className="cursor-pointer hover:text-white hover:bg-[#DF7F64] hover:rounded-md px-2 py-1">
                      New York
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-[#DF7F64] hover:rounded-md px-2 py-1">
                      Paris
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-[#DF7F64] hover:rounded-md px-2 py-1">
                      Tokyo
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-[#DF7F64] hover:rounded-md px-2 py-1">
                      London
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-[#DF7F64] hover:rounded-md px-2 py-1">
                      Rome
                    </li>
                  </ul>
                </div>
              )}

              {item.opened &&
                (item.type === "checkin" || item.type === "checkout") && (
                  <div className="absolute md:ml-[50px] md:mt-[40px] w-[200px]  bg-white md:p-4 shadow-md rounded-xl md:w-[250px] md:my-[10px] ">
                    <div className="calendar-container">
                      {/* Simple calendar placeholder - you can replace with a real calendar component */}
                      <div className="grid grid-cols-7 gap-1">
                        <div className="text-center font-bold">Su</div>
                        <div className="text-center font-bold">Mo</div>
                        <div className="text-center font-bold">Tu</div>
                        <div className="text-center font-bold">We</div>
                        <div className="text-center font-bold">Th</div>
                        <div className="text-center font-bold">Fr</div>
                        <div className="text-center font-bold">Sa</div>
                        {[...Array(31)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full"
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              {item.opened && item.type === "price" && (
                <div
                  className=" flex flex-col items-center  absolute w-fit px-2 bg-white shadow-md rounded-xl ml-[150px] 
                           md:mt-[40px]   md:ml-[30px]  md:flex-row  md:p-4  md:w-[250px] md:my-[10px]   md:rotate-0 "
                >
                  <input
                    type="range"
                    className=""
                    min="0"
                    max="10000"
                    step="10"
                    value={price}
                    onChange={handlePriceChange}
                  />
                  <span className="ml-2 text-[#DF7F64] font-bold ">
                    ${price}
                  </span>
                </div>
              )}
            </div>
          ))}
          <div>
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="#DF7F64" />
              <path
                d="M33.75 43.75C39.2728 43.75 43.75 39.2728 43.75 33.75C43.75 28.2272 39.2728 23.75 33.75 23.75C28.2272 23.75 23.75 28.2272 23.75 33.75C23.75 39.2728 28.2272 43.75 33.75 43.75Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M46.25 46.25L40.875 40.875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
