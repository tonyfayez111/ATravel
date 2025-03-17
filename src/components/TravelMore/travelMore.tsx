"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "@/components/shared/Card";
import Wrapper from "../layout/Wrapper";
import image1 from "@/assets/travelmore/image1.png";
import image2 from "@/assets/travelmore/image2.png";
import image3 from "@/assets/travelmore/image3.png";

export default function TravelMore() {
  const [isMobile, setIsMobile] = useState(false);
  const cardData = [
    {
      title: "Neuschwanstein and Linderhof Castles Private Tour From Füssen",
      description:
        "Immerse yourself in the heart of Bavaria with our Skip the Line service, eliminating the hassle of ticket reservations, queues, ...",
      image: image3,
      price: 719.0,
      hours: 9,
      place: "Fussen",
    },
    {
      title: "Neuschwanstein and Linderhof Castles Private Tour From Füssen",
      description:
        "Immerse yourself in the heart of Bavaria with our Skip the Line service, eliminating the hassle of ticket reservations, queues,..",
      image: image2,
      price: 719.0,
      hours: 9,
      place: "Fussen",
    },
    {
      title: "Neuschwanstein Castle and More Private Tour from Munich",
      description:
        "Experience a private tour from Munich to the fairytale Neuschwanstein Castle, charming Oberammergau, and the stunning Ettal ..",
      image: image1,
      price: 719.0,
      hours: 9,
      place: "Munich",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Wrapper>
      <div
        className="text-primary text-center mt-[-50px]  text-[clamp(16px,8vw,40px)] xl:text-[80px] xl:text-left   md:mb-[24px] md:mt-[0px] md:leading-[108px]  "
        style={{ fontFamily: "Smooch, cursive" }}
      >
        Travel More, Spend Less!
      </div>
      <div className="w-full flex justify-center items-center">
        {!isMobile ? (
          // Desktop: Show grid layout
          <div className=" flex  gap-4 flex-wrap  w-full justify-center items-center">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        ) : (
          // Mobile: Show Swiper carousel
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            modules={[Navigation]}
            className="w-full "
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="flex w-full justify-center items-center">
                  <Card {...card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Wrapper>
  );
}
