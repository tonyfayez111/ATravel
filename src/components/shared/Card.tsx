import React from "react";
import Image from "next/image";
import Button from "./Button";
import travelMoreImage from "@/assets/travelmore/image1.png";
interface CardProps {
  title: string;
  description: string;
  image: any;
  price: number;
  hours: number;
  place: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  hours,
  place,
}) => {
  return (
    <div className="flex flex-col  w-[70%]  md:w-[397px]   md:h-[551px] rounded-[10px] overflow-hidden border-1 border-[#B8B8B8]">
      <Image
        src={image}
        alt={title}
        style={{ position: "relative" }}
        className="w-full h-full"
      />

      <div className=" px-4 flex flex-col md:justify-around  md:h-full ">
        <div className="flex flex-col items-start  justify-center">
          <h2 className="font-poppins font-bold  text-lg md:text-[20px] text-[#1B1B1B] md:leading-7 md:mt-4 ">
            {title}
          </h2>
          <p className="text-m md:text-[16px] text-Gray4 md:leading-6 font-poppins mt-4 ">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-around h-full">
          <div className="flex flex-row gap-4 w-full mt-4 flex-1">
            <span className="flex flex-row gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 6C12.2449 6.00003 12.4813 6.08996 12.6644 6.25272C12.8474 6.41547 12.9643 6.63975 12.993 6.883L13 7V11.586L15.707 14.293C15.8863 14.473 15.9905 14.7144 15.9982 14.9684C16.006 15.2223 15.9168 15.4697 15.7488 15.6603C15.5807 15.8508 15.3464 15.9703 15.0935 15.9944C14.8406 16.0185 14.588 15.9454 14.387 15.79L14.293 15.707L11.293 12.707C11.1376 12.5514 11.0378 12.349 11.009 12.131L11 12V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z"
                  fill="#494949"
                />
              </svg>
              {hours} Hours
            </span>
            <span className="flex flex-row gap-2 ">
              <svg
                width="18"
                height="23"
                viewBox="0 0 18 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2.00002C7.14348 2.00002 5.36301 2.73752 4.05025 4.05028C2.7375 5.36303 2 7.14351 2 9.00002C2 11.862 3.782 14.623 5.738 16.762C6.73814 17.8517 7.82943 18.854 9 19.758C9.17467 19.624 9.37967 19.4607 9.615 19.268C10.5548 18.4963 11.4393 17.6596 12.262 16.764C14.218 14.623 16 11.863 16 9.00002C16 7.14351 15.2625 5.36303 13.9497 4.05028C12.637 2.73752 10.8565 2.00002 9 2.00002ZM9 22.214L8.433 21.824L8.43 21.822L8.424 21.817L8.404 21.803L8.329 21.75L8.059 21.553C6.69086 20.5248 5.41988 19.3733 4.262 18.113C2.218 15.875 0 12.636 0 8.99902C3.55683e-08 6.61207 0.948211 4.32289 2.63604 2.63506C4.32387 0.947235 6.61305 -0.000976563 9 -0.000976562C11.3869 -0.000976562 13.6761 0.947235 15.364 2.63506C17.0518 4.32289 18 6.61207 18 8.99902C18 12.636 15.782 15.876 13.738 18.111C12.5804 19.3713 11.3098 20.5228 9.942 21.551C9.82805 21.6361 9.71305 21.7198 9.597 21.802L9.576 21.816L9.57 21.821L9.568 21.822L9 22.214ZM9 7.00002C8.46957 7.00002 7.96086 7.21074 7.58579 7.58581C7.21071 7.96088 7 8.46959 7 9.00002C7 9.53046 7.21071 10.0392 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0392 11 9.53046 11 9.00002C11 8.46959 10.7893 7.96088 10.4142 7.58581C10.0391 7.21074 9.53043 7.00002 9 7.00002ZM5 9.00002C5 7.93916 5.42143 6.92174 6.17157 6.1716C6.92172 5.42145 7.93913 5.00002 9 5.00002C10.0609 5.00002 11.0783 5.42145 11.8284 6.1716C12.5786 6.92174 13 7.93916 13 9.00002C13 10.0609 12.5786 11.0783 11.8284 11.8285C11.0783 12.5786 10.0609 13 9 13C7.93913 13 6.92172 12.5786 6.17157 11.8285C5.42143 11.0783 5 10.0609 5 9.00002Z"
                  fill="#494949"
                />
              </svg>
              {place}
            </span>
          </div>
          <div className="md:mt-[15px]">
            <hr className="w-full border-[1px] bg-[#B8B8B8] my-10 md:my-1" />
          </div>
          <div className="flex justify-between items-start md:mt-4">
            <div className="flex  flex-col items-start flex-1 pb-5">
              <span className="text-black  text-lg md:text-[20px] w-1/2 font-poppins ">
                From
                ${price.toFixed(2)}
              </span>
            </div>
            <Button  >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
