import Wrapper from "../layout/Wrapper";
import Button from "../shared/Button";

export default function ContactUs() {
  return (
    <Wrapper>
      <div>
        <div
          className="text-[#DF7F64] text-[clamp(16px,8vw,40px)] xl:text-[80px] text-center  "
          style={{ fontFamily: "Smooch, cursive" }}
        >
          Contact Us{" "}
        </div>
        <div className="flex flex-col gap-[24px] w-full h-full xl:w-[896px] xl:h-[305px] xl:mx-[172px] ">
          <div className="flex w-full gap-[24px]">
            <div className=" w-1/2 flex-col gap-[12px]">
              <div className="text-[#1B1B1B] text-[18px] font-poppins">
                Full name*
              </div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full h-[46px] bg-white border-[1px] border-[#B8B8B8] rounded-[5px]  text-[18px] font-poppins py-[17px] pl-[20px] pr-[16px] "
              />
            </div>
            <div className=" w-1/2 flex-col gap-[12px]">
              <div className="text-[#1B1B1B] text-[18px] font-poppins">
                Email*
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[46px] bg-white border-[1px] border-[#B8B8B8] rounded-[5px]  text-[18px] font-poppins py-[17px] pl-[20px] pr-[16px] "
              />
            </div>
          </div>
          <div>
            <div className=" w-full flex-col gap-[12px]">
              <div className="text-[#1B1B1B] text-[18px] font-poppins">
                Subject
              </div>
              <input
                type="text"
                placeholder="Subject (Optional)"
                className="w-full h-[46px] bg-white border-[1px] border-[#B8B8B8] rounded-[5px]  text-[18px] font-poppins py-[17px] pl-[20px] pr-[16px] "
              />
            </div>
          </div>
          <div className=" w-full flex-col gap-[12px]">
            <div className="text-[#1B1B1B] text-[18px] font-poppins">
              Message
            </div>
            <input
              type="text"
              placeholder="Write a message"
              className="w-full h-[90px] bg-white border-[1px] border-[#B8B8B8] rounded-[5px]  text-[18px] font-poppins py-[17px] pl-[20px] pr-[16px] "
            />
          </div>
          <div></div>
        </div>
        <div className="flex justify-center items-center w-full">
          <Button className="md:!w-[262px] md:!h-[44px] !mt-[24px] md:!leading-[24px] ">
            Send Message
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
