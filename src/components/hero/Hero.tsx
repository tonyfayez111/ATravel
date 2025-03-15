import React from 'react';
import Header from '../layout/Header/Header';
import Image from 'next/image';
import heroImage from '../../assets/hero/herosection.png';
import Wrapper from '../layout/Wrapper';

const Hero = () => {
  return (
    <div className='w-full h-[10vh] md:h-[100vh]'>
      <div
        className="relative w-full h-[40vh] md:h-[calc(100vh*1.19)] bg-contain  bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(13, 36, 56, 0.2) 11.03%, rgba(39, 66, 124, 0) 81.56%),
            linear-gradient(72.35deg, rgba(0, 0, 0, 0) 83.14%, rgba(20, 61, 95, 0.2) 100%),
            url(${heroImage.src})
          `  ,
        }}
      >
        <Wrapper>
          <Header />
          
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;