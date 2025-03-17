"use client";
import Image from "next/image";
import aboutus from "../../assets/aboutus/us.png";
import Logo from "../../../public/logo.png";
import message from "../../assets/aboutus/icons/message.svg";
import instagram from "../../assets/aboutus/icons/insta.svg";
import facebook from "../../assets/aboutus/icons/FB.svg";
import twitter from "../../assets/aboutus/icons/twitter.svg";
import WSP from "../../assets/aboutus/icons/WSP.svg";

export default function AboutUs() {
  return (
    <div
      className="w-full max-w-[1440px] min-h-screen max-h-[720px] flex flex-col items-center justify-between bg-cover xl:bg-contain bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${aboutus.src})` }}
    >
      {/* Top Section (Logo & About) */}
      <div
        className="flex flex-col justify-center items-center  h-screen max-h-[720px] xl:justify-start  xl:items-start xl:mt-[301px] xl:ml-[92px] "
        style={{ width: "-webkit-fill-available" }}
      >
        <Image src={Logo} alt="aboutus" />

        <div className="font-bold text-[clamp(20px,2vw,40px)] font-poppins mt-[50px] text-white xl:text-[16px] md:leading-[24px] md:h-[11px]">
          About Us
        </div>
        <p className="text-[14px] text-white  md:leading-[20px]  mt-[16px] max-w-[400px] text-center xl:text-left font-poppins md:h-[70px] md:w-[400px] ">
          We are specialists in creating customized tour itineraries for
          families, groups, and individuals.
          <br />
          Our service we provide in Central Europe consists of absolutely
          everything.
        </p>
      </div>
      <div className="mb-[48px] flex flex-col gap-[16px] h-full">
        {/* Social Icons (Centered) */}
        <div className="flex justify-center gap-[14px] ">
          <Image src={instagram} alt="instagram" />
          <Image src={twitter} alt="twitter" />
          <Image src={facebook} alt="facebook" />
          <Image src={WSP} alt="WSP" />
          <Image src={message} alt="message" />
        </div>

        <div className="flex flex-col gap-[8px]">
          <hr className="w-[100%] xl:w-[1064.25px] mx-auto border-[#B8B8B8]" />
          <p className="w-full text-center text-gray-300 text-xs md:text-sm leading-[16.5px] ">
            @Copyright 2025 Designed and developed by{" "}
            <span className="font-bold text-white">Innovation Scope</span>.
            Egypt All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
