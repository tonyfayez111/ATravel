import Image from "next/image";

interface MiniCardProps {
  image: any;
  title?: string;
  price?: number;
  rate?: number;
  numberOfReviews?: number;
}
export default function MiniCard({
  image,
  title,
  price,
  rate,
  numberOfReviews,
}: MiniCardProps) {
  return (
    <div className="flex flex-col items-center   w-[70%]  md:w-[292px]   md:h-[388px]  rounded-[10px] overflow-hidden  font-poppins">
      <div className="w-full flex justify-center">
        <Image
          src={image}
          alt={"picture"}
          style={{ position: "relative" }}
          className="w-[292px] h-[298px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-[16px] md:w-[292px]">
        <h3 className="text-[#1B1B1B] text-[clamp(16px,5vw,40px)] md:text-[22px] font-bold w-full text-left">
          {title}
        </h3>
        <div className="flex flex-row justify-between w-full">
          <div className="text-[#494949] md:text-[18px] font-bold text-[clamp(16px,1vw,40px)]">
            {price}$
          </div>
          <div className="flex flex-row items-center">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0756 5.98353C16.0097 5.78176 15.889 5.60206 15.7268 5.46429C15.5646 5.32653 15.3673 5.23608 15.1566 5.20295L11.0286 4.57265L9.17852 0.66744C9.08837 0.468662 8.9425 0.29997 8.75841 0.181588C8.57432 0.0632055 8.35982 0.000156628 8.14062 0C7.69376 0 7.29572 0.256005 7.10273 0.666297L5.25209 4.57322L1.12405 5.20352C0.913484 5.23684 0.71625 5.32736 0.554093 5.46509C0.391935 5.60283 0.27115 5.78243 0.205052 5.9841C0.133547 6.1924 0.121292 6.41631 0.16964 6.6311C0.217988 6.84589 0.325059 7.04321 0.479029 7.20127L3.48301 10.2768L2.77309 14.6265C2.69842 15.0848 2.88451 15.5317 3.25958 15.794C3.43293 15.9157 3.63731 15.9862 3.84918 15.9975C4.06105 16.0087 4.2718 15.9601 4.45715 15.8574L8.13086 13.8185L11.8247 15.8574C12.0097 15.9608 12.2205 16.0097 12.4324 15.9984C12.6443 15.9872 12.8487 15.9163 13.0217 15.794C13.2055 15.6653 13.3489 15.4873 13.435 15.2807C13.5211 15.0742 13.5465 14.8475 13.5082 14.6271L12.7982 10.2773L15.8022 7.20184C15.9562 7.04378 16.0633 6.84646 16.1116 6.63167C16.16 6.41688 16.1477 6.19297 16.0762 5.98468L16.0756 5.98353Z"
                fill="#FFCC00"
              />
            </svg>
            {rate}({numberOfReviews})
          </div>
        </div>
      </div>
    </div>
  );
}
