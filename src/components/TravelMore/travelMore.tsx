import React from 'react';
import Card from "@/components/shared/Card";
import Wrapper from '../layout/Wrapper';
import image1 from '@/assets/travelmore/image1.png';
import image2 from '@/assets/travelmore/image2.png';
import image3 from '@/assets/travelmore/image3.png';

export default function TravelMore() {
  const cardData = [
    {
      title: "Neuschwanstein and Linderhof Castles Private Tour From Füssen",
      description: "Immerse yourself in the heart of Bavaria with our Skip the Line service, eliminating the hassle of ticket reservations, queues, ...",
      image: image3,
      price: 719.00,
      hours:9,
      place:"Fussen"
    },
    {
      title: "Neuschwanstein and Linderhof Castles Private Tour From Füssen",
      description: "Immerse yourself in the heart of Bavaria with our Skip the Line service, eliminating the hassle of ticket reservations, queues,..",
      image: image2,
      price: 719.00,
       hours:9,
      place:"Fussen"
    },
    {
      title: "Neuschwanstein Castle and More Private Tour from Munich",
      description: "Experience a private tour from Munich to the fairytale Neuschwanstein Castle, charming Oberammergau, and the stunning Ettal ..",
      image: image1,
      price: 719.00,
       hours:9,
      place:"Munich"
    }
  ];

  return (
    <Wrapper >
        <div className="text-primary w-max text-[40px] md:text-[80px]   text-center " style={{ fontFamily: 'Smooch, cursive' }}>
        Travel More, Spend Less! 
                </div>
      <div className="flex  gap-4 flex-wrap flex-1 w-full  items-center">
      
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            price={card.price}
            hours={card.hours}
            place={card.place}
            
          />
        ))}
      </div>
    </Wrapper>
  );
} 