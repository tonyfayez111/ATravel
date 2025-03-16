"use client";
import Wrapper from "../layout/Wrapper";
import image1 from "@/assets/destinations/1.png";
import image2 from "@/assets/destinations/2.png";
import image3 from "@/assets/destinations/3.png";
import image4 from "@/assets/destinations/4.png";
import image5 from "@/assets/destinations/5.png";
import image6 from "@/assets/destinations/6.png";
import image7 from "@/assets/destinations/7.png";
import image8 from "@/assets/destinations/8.png";
// i think we can make an array of pics and import it rather than all of this
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MiniCard from "../shared/miniCard";
import Button from "../shared/Button";
export default function Destinations() {
  const [isMobile, setIsMobile] = useState(false);
  const cardData = [
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image1,
      price: 600,
    },
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image2,
      price: 600,
    },
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image3,
      price: 600,
    },
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image4,
      price: 600,
    },
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image5,
      price: 600,
    },
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image6,
      price: 600,
    },
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image7,
      price: 600,
    },
    {
      title: "Berlin Cathedral",
      rate: 4.3,
      numberOfReviews: 14,
      image: image8,
      price: 600,
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
        className="text-primary text-center mt-[-40px] mb-[24px] md:mb-0   text-[clamp(16px,8vw,40px)] xl:text-[80px] xl:text-left    "
        style={{ fontFamily: "Smooch, cursive" }}
      >
        Destinations
      </div>
      {!isMobile ? (
        // Desktop: Show grid layout
        <div className=" flex  gap-4.5 flex-wrap  w-full justify-center items-center">
          {cardData.map((card, index) => (
            <MiniCard key={index} {...card} />
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
                <MiniCard {...card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="flex justify-center items-center w-full">
        <Button className="md:!w-[262px] md:!h-[44px] !mt-[24px] md:!leading-[24px] ">
          View Destinations
        </Button>
      </div>
    </Wrapper>
  );
}
