import Image from "next/image";
import breakImage from "@/assets/break/break.png";
import Wrapper from "../layout/Wrapper";

export default function Break() {
  return (

    <div className="mt-[140px]">
        <Image src={breakImage} alt="break" />
    </div>
  );
}

