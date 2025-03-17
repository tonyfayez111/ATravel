"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import styles from "./header.module.css";
import HeaderList from "./headerlist";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    // List of component IDs you want to track
    const components = [
      "home",
      "travelmore",
      "break",
      "tours",
      "reviews",
      "about",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveComponent(entry.target.id);
          }
        });
      },
      {
        root: null, // Observe relative to the viewport
        rootMargin: "0px", // Reduce lag by removing extra margins
        threshold: 0.5, // Check even when 10% of the element is visible
      }
    );

    // Observe each component
    components.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down → Hide header
        setIsVisible(false);
      } else {
        // Scrolling up → Show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  console.log(activeComponent);
  return (
    <header className="flex max-w-[1440px] w-full  top-0 px-[calc(100/1440*100vw)] py-[calc(20/670*100vh)] md:py-[20px] md:px-[100px] absolute z-50  ">
      {!isMobile && (
        <div
          className={`w-[1440px] flex justify-between items-center 
          ${
            activeComponent === "home"
              ? "translate-y-0 "
              : "bg-black/40 rounded-b-xl pb-[10px] pl-[10px] pr-[10px] fixed z-50 max-w-[1250px] "
          }
          ${isVisible ? "-translate-y-5" : "-translate-y-500"}

        `}
        >
          <div>
            <Image
              src={logo}
              alt="logo"
              className="w-full h-full md:w-[104.02px] md:h-[80px]"
            />
          </div>

          <div className="flex items-center w-[683px] max-w-full lg:w-[60%] mx-auto  ">
            <ul className="hidden md:flex w-[600px] md:w-[683px] h-[35px] text-white  items-end">
              <HeaderList />
            </ul>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="fixed top-5 left-5 py-[2vh]">
          {!isSidebarOpen ? (
            <button onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="currentColor"
                className="text-black  "
              >
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
              </svg>
            </button>
          ) : (
            <div className="fixed inset-0 z-50 flex    " onClick={closeSidebar}>
              <div
                className="fixed top-0 left-0 w-[35%] h-full bg-black/55 shadow-lg z-50 flex flex-col items-start p-4  "
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
              >
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[80px] h-auto mb-4 "
                />
                <ul className="space-y-8 flex flex-col   justify-center   h-3/4">
                  <HeaderList />
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
