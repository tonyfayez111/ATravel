import React from "react";
import Header from "../layout/Header/Header";
import Image from "next/image";
import heroImage from "../../assets/hero/herosection.png";
import Wrapper from "../layout/Wrapper";
import DiscoverTrip from "../DiscoverTrip/discovertrip";

const Hero = () => {
  return (
    <div id="home" className="w-full">
      <div>
        <div className="">
          <Image
            src={heroImage}
            alt="break"
            className="w-full h-auto"
            style={{
              backgroundImage: `
            linear-gradient(180deg, rgba(13, 36, 56, 0.2) 11.03%, rgba(39, 66, 124, 0) 81.56%),
            linear-gradient(72.35deg, rgba(0, 0, 0, 0) 83.14%, rgba(20, 61, 95, 0.2) 100%),
          
          `,
            }}
          />
        </div>
      </div>
      <Wrapper>
        <DiscoverTrip />
      </Wrapper>
    </div>
  );
};

export default Hero;
