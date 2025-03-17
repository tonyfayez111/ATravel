"use client";
import whyChooseUs from "@/assets/whychooseus/why.png";
import Image from "next/image";
import Image1 from "@/assets/whychooseus/1.png";
import Image2 from "@/assets/whychooseus/2.png";
import Image3 from "@/assets/whychooseus/3.png";
import Image4 from "@/assets/whychooseus/4.png";
import Wrapper from "../layout/Wrapper";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const whyChooseUsData = [
  {
    icon: Image1,
    title: "Best Deals Guaranteed",
    description:
      "Being a customer-driven travel company, we fully understand the desires as well as compulsions of the traveler and take them into account while making deals.",
  },
  {
    icon: Image2,
    title: "Diverse Destinations",
    description:
      "Find local secrets and hidden places all over Germany, Austria, and Switzerland. Enjoy a very special vacation with the deepest details for a culturally involving experience ",
  },
  {
    icon: Image3,
    title: "Flexibility",
    description:
      "Couldn’t find what you were looking for? You can have your own itinerary with a very passionate professional local guide just for you wherever you are!",
  },
  {
    icon: Image4,
    title: "Passionate Travels",
    description:
      "Enjoy the best of both worlds- the world of amazing, unique and often Exclusive Travel Offers that are paired with your own personal interests and passions!",
  },
];
export default function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % whyChooseUsData.length);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [whyChooseUsData.length]);
  return (
    <div className="w-full h-full  lg:h-[1186px]  flex flex-col justify-center md:justify-start  ">
      <div className="flex flex-col gap-[24px] absolute px-[calc(100/1440*80vw)] lg-px[20px]">
        <div
          className="text-[#DF7F64] text-[clamp(16px,8vw,40px)] xl:text-[80px] text-left  "
          style={{ fontFamily: "Smooch, cursive" }}
        >
          Why Choose Us
        </div>
        {!isMobile ? (
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[32px]">
              {whyChooseUsData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-[16px]  md:w-[749px] md:h-[83px] z-10"
                >
                  <div className="flex  gap-[16px] items-center">
                    <Image src={item.icon} alt={item.title} />
                    <div className="lg:text-[22px] text-[16px] font-poppins text[#1B1B1B] font-bold ">
                      {item.title}
                    </div>
                  </div>
                  <div className="lg:text-[16px] text-[12px] font-poppins text-[##666666]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[32px] w-full">
              <div className="flex h-full gap-[16px] ">
                {whyChooseUsData[currentIndex].title}
                <Image
                  src={whyChooseUsData[currentIndex].icon}
                  alt={whyChooseUsData[currentIndex].title}
                />
              </div>
              <div className="bg-white/60 rounded-lg p-4 ">
                {whyChooseUsData[currentIndex].description}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:pt-[180px] !px-0">
        <Image src={whyChooseUs} alt="whyChooseUs" />
      </div>
    </div>
  );
}
