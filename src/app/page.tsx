import Image from "next/image";
import Hero from "@/components/hero/Hero";
import DiscoverTrip from "@/components/DiscoverTrip/discovertrip" ;  
import TravelMore from "@/components/TravelMore/travelMore";
import Break from "@/components/break/break";
export default function Page() {
  return (
    <div>
      <Hero />
      <DiscoverTrip />
      <TravelMore />
      {/* <Break /> */}
    </div>
  );
}
