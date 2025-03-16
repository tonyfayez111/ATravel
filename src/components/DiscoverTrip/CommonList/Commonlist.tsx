import React from "react";
import Image from "next/image";

interface CommonListProps {
  title: string;
  children: React.ReactNode;
  opened: boolean;
  type: string;
  onClick: () => void;
  className?: string;
}

const CommonList: React.FC<CommonListProps> = ({
  title,
  children,
  opened,
  onClick,
  className,
}) => {
  return (
    <div className="flex flex-row items-center w-full ">
      {title !== "Location" && window.innerWidth >= 1280 && (
        <div className="px-[20px]">
          <svg
            width="1"
            height="40"
            viewBox="0 0 1 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg "
          >
            <path d="M0.5 0V40" stroke="#666666" />
          </svg>
        </div>
      )}
      <div
        className={`flex flex-col gap-2 w-full md:w-[204px] h-auto ${className}`}
      >
        <div
          className="flex flex-row justify-between xl:justify-start items-center w-full stat cursor-pointer"
          onClick={onClick}
        >
          <div
            className={`text-[22px] font-popins font-bold ${
              opened ? "text-[#DF7F64]" : "text-black"
            }`}
          >
            {title}
          </div>
          <div
            className={` ${
              opened ? "rotate-180" : ""
            } px-[20px] transition-all duration-400`}
          >
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.546 0.439551C19.2647 0.158344 18.8832 0.000370883 18.4855 0.000370848C18.0877 0.000370813 17.7063 0.158344 17.425 0.439551L9.99999 7.86455L2.57499 0.43955C2.29208 0.166313 1.91318 0.0151208 1.51989 0.0185388C1.12659 0.0219557 0.750371 0.179709 0.472259 0.457821C0.194146 0.735933 0.036395 1.11215 0.032977 1.50545C0.029559 1.89874 0.180751 2.27765 0.453988 2.56055L8.93949 11.046C9.22078 11.3273 9.60224 11.4852 9.99999 11.4852C10.3977 11.4852 10.7792 11.3273 11.0605 11.046L19.546 2.56055C19.8272 2.27926 19.9852 1.8978 19.9852 1.50005C19.9852 1.1023 19.8272 0.720842 19.546 0.439551Z"
                fill="#666666"
              />
            </svg>
          </div>
        </div>
        <div className="text-Gray4 text-[14px] md:text-[16px]">{children}</div>
      </div>
    </div>
  );
};

export default CommonList;
