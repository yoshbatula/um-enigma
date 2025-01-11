import { AboutCardSection } from './AboutCardSection';
import aboutArrow from "@images/aboutArrow.svg";
import whiteAboutArrow from "@images/whiteAboutArrow.svg";
import RotatingWheel from "./RotatingWheel";
export default function About() {
  return (
    <>
      <section
        className="min-h-lvh mt-[50px] lg:mt-[150px] grid grid-cols-[50%_50%]
    grid-rows-3 lg:grid-rows-[65%_35%] px-[4vw] lg:px-[6vw] xl:px-[8vw]"
      >
        <div className="flex flex-col justify-start px-[16px]  
        lg:px-[0px] xl:px-[28px] col-span-2 lg:col-span-1 lg:mb-[50px]">
          <div className="flex gap-4 items-center">
            <span className="h-[2px] w-[40px] bg-[#B65968]"></span>
            <h2 className="font-Poppins-SemiBold text-[16px] lg:text-[18px] text-[#A63346]">
              About Us
            </h2>
          </div>
          <h4
            className="font font-Poppins-SemiBold text-[clamp(24px,3.8vw,43px)] leading-none

        max-w-[20ch] mt-4"
          >
            EMPOWERING STUDENTS IN TECH THROUGH CONNECTION
          </h4>
          <p
            className="font-Poppins-Medium text-[clamp(14px,2vw,18px)] 
             mt-[24px] text-[#2C2C2C]
            opacity-70
        max-w-[50ch]"
          >
            Our organization is dedicated to connecting students in tech,
            providing them with opportunities to learn, share experiences, and
            grow together. Join us to be a part of a vibrant community of
            aspiring programmers and tech enthusiasts.
          </p>
          <button
            className="w-full lg:w-[272px] min-h-[60px] flex justify-center items-center
          text-[16px] font-Poppins-Bold text-[#0C6291] gap-[16px] mt-[34px] lg:mt-[49px]
          hover:bg-[#0C6291]
          border-[2px] border-[#0C6291] rounded-full"
          >
            <span className="mt-[3px]">LEARN MORE ENIGMA</span>
            <span
              className="aspect-square w-[28px] rounded-full bg-[#0C6291]
        
          flex justify-center items-center relative learnMoreSpan 
          overflow-hidden"
            >
              <img
                className="w-[24px] transition-transform ease-in-out duration-300 "
                src={whiteAboutArrow}
                alt=""
              />
              <img
                className="absolute top-1/2 left-1/2 w-[24px] 
            transition-transform ease-in-out duration-300
            -translate-x-[150%] translate-y-[50%]
            "
                src={aboutArrow}
                alt=""
              />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-[50%_50%] w-fit lg:w-full pl-[16px] lg:pl-[37px] grid-rows-2 lg:grid-rows-[20%_80%]
        col-span-2 lg:col-span-1">
          <div
            className="flex flex-col mt-[106px] lg:mt-[43px] leading-none 
            col-span-2 row-start-2 row-end-3 lg:row-span-1
        gap-[8px]"
          >
            <p
              className="font-Poppins-SemiBold text-[32px] tracking-tighter text-[#0c6291]
          "
            >
              12
            </p>
            <p className="font-Poppins-Medium text-[14px] text-[#2C2C2C]
            opacity-70">
              Partnered Communities
            </p>
          </div>
          <div className="flex flex-col justify-end mb-[23px]">
            <p className="font-Poppins-SemiBold text-[32px] tracking-tighter text-[#0c6291]">
              100+
            </p>
            <p className="font-Poppins-Medium text-[14px] text-[#2C2C2C]
            opacity-70">
              Members
            </p>
          </div>
          <div className="flex justify-center items-center relative w-full overflow-hidden  ">
            <RotatingWheel />
          </div>
        </div>
      <AboutCardSection     />
      </section>
    </>
  );
}
