import Image from "next/image";
import breakImage from "@/assets/break/break.png";
import Wrapper from "../layout/Wrapper";

export default function Break() {
  return (
    <div>
      <Image src={breakImage} alt="break" className="w-full h-auto" />
    </div>
  );
}
