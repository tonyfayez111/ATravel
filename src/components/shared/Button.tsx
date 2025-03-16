import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}
 
const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`${className} bg-[#DF7F64] text-white py-2 px-4 rounded-[5px] hover:bg-[#c76b58] md:h-[44px] md:w-[191px] text-lg md:text-[16px]`}>
           {children}
          </button>
  );
};
export default Button;
