import Image from "next/image";
import Hero from "@/components/hero/Hero";
import DiscoverTrip from "@/components/DiscoverTrip/discovertrip";
import TravelMore from "@/components/TravelMore/travelMore";
import Break from "@/components/break/break";
import Destinations from "@/components/destinations/destinations";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs";
import ContactUs from "@/components/contactus/contactUs";
import AboutUs from "@/components/aboutus/aboutUs";
export default function Page() {
  return (
    <div className="flex flex-col gap-[80px] md:gap-[160px]">
      <Hero />
      <TravelMore />
      <Break />
      <Destinations />
      <WhyChooseUs />
      <ContactUs />
      <AboutUs />
    </div>
  );
}
