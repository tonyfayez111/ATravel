"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png"
import styles from "./header.module.css"

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="flex max-w-[1440px] w-full absolute top-0 px-[calc(100/1440*100vw)] py-[calc(20/670*100vh)] md:py-[20px] ">
      {!isMobile && (
        <div>
          <Image src={logo} alt="logo" className="w-full h-full md:w-[104.02px] md:h-[80px]" />
        </div>
      )}
      {!isMobile && (
        <div className="flex items-center w-[683px] max-w-full lg:w-[60%] mx-auto">
          <ul className="hidden md:flex w-[600px] md:w-[683px] h-[35px] text-white justify-between py-[10px]">
            <li className={styles.list}>Home</li>
            <li className={styles.list}>Tours</li>
            <li className={styles.list}>Reviews</li>
            <li className={styles.list}>About Us</li>
            <li className={styles.list}>Contact Us</li>
            <li className={styles.list}>FAQs</li>
          </ul>
        </div>
      )}
      {isMobile && (
        <div className="absolute top-5 left-5 py-[2vh]">
          {!isSidebarOpen ? (<button  onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" fill="currentColor" className="text-black  " >
<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
</svg>
          </button>
          )
          :(
            <div className="fixed inset-0 z-50 flex    " onClick={closeSidebar}>
              <div
                className="fixed top-0 left-0 w-[35%] h-full bg-black/55 shadow-lg z-50 flex flex-col items-start p-4  "
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
              >
                <Image src={logo} alt="logo" className="w-[80px] h-auto mb-4 " />
                <ul className="space-y-8 flex flex-col   justify-center   h-1/2">
                  <li className={styles.list}>Home</li>
                  <li className={styles.list}>Tours</li>
                  <li className={styles.list}>Reviews</li>
                  <li className={styles.list}>About Us</li>
                  <li className={styles.list}>Contact Us</li>
                  <li className={styles.list}>FAQs</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}