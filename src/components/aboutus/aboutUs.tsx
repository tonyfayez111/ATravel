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
      <div className="flex flex-col items-center justify-center h-screen max-h-[720px]  w-full xl:items-start xl:mt-[301px] xl:ml-[192px] ">
        <Image src={Logo} alt="aboutus" />

        <h1 className="font-bold text-[clamp(20px,2vw,40px)] font-poppins mt-8 text-white xl:text-[16px]">
          About Us
        </h1>
        <p className="text-[14px] text-white  leading-6  mt-2 max-w-[400px] text-center xl:text-left">
          We are specialists in creating customized tour itineraries for
          families, groups, and individuals.
          <br />
          Our service we provide in Central Europe consists of absolutely
          everything.
        </p>
      </div>
      <div>
        {/* Social Icons (Centered) */}
        <div className="flex justify-center gap-[15px] mt-10">
          <Image src={instagram} alt="instagram" />
          <Image src={twitter} alt="twitter" />
          <Image src={facebook} alt="facebook" />
          <Image src={WSP} alt="WSP" />
          <Image src={message} alt="message" />
        </div>

        {/* Footer */}
        <div className="w-full text-center text-gray-300 text-xs md:text-sm mt-[16px] mb-[48px]">
          <hr className="w-[80%] mx-auto border-[#B8B8B8]" />
          <p className="mt-[8px]">
            @Copyright 2025 Designed and developed by{" "}
            <span className="font-bold text-white">Innovation Scope</span>.
            Eg.ypt All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
