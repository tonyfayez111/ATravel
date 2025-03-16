import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div
      className={`px-[calc(100/1440*100vw)] py-[calc(20/670*100vh)] md:py-0`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
