import RotatingCircles from "./RotatingCircles";
import whiteAboutArrow from "@images/whiteAboutArrow.svg";
import aboutArrow from "@images/aboutArrow.svg";
import EventsCarousel from "./EventsCarousel";

export default function Events() {
  return (
    <section className="min-h-[100vh] lg:min-h-[83vh] grid grid-cols-2 grid-rows-[0.5fr_1.6fr_0.5fr] lg:grid-rows-2 
    px-[4vw] lg:px-[6vw] xl:px-[8vw] mt-[30px] mb-[30px] gap-2 lg:gap-0 ">
      <div className="lg:row-span-2 col-span-2 lg:col-span-1 flex justify-center items-center">
        <EventsCarousel />
      </div>
      <div className=" grid  grid-cols-2 col-span-2 lg:col-span-1 row-start-1 row-end-2
      lg:row-start-auto lg:row-end-auto 
      l
      items-end py-[20px]">
        <div className="flex pl-[30px] flex-col justify-end">
          <p className="font-Poppins-SemiBold text-[32px] text-[#0C6291]">4</p>
          <p
            className="font-Poppins-Medium text-[12px] lg:text-[14px] text-[#2C2C2C]
        opacity-70 "
          >
            Previous Events
          </p>
        </div>
        <RotatingCircles />
      </div>

      <div className="flex flex-col col-span-2 lg:col-span-1 justify-end pl-[20px] py-[30px]">
        <div className="flex gap-3 items-center mb-[12px] lg:mb-0">
          <span className="h-[2px] w-[40px] bg-[#A63346]"></span>
          <h3 className="font-Poppins-Medium text-[16px] lg:text-[18px] text-[#A63346]">
            Upcoming Events
          </h3>
        </div>
        <p className="font-Poppins-SemiBold text-[clamp(24px,3.8vw,43px)] mb-[16px] lg:mb-[4px]">
          Web Development Start to Finish:
        </p>
        <p
          className="font-Poppins-Medium text-[clamp(14px,2vw,18px)] opacity-70 

        text-[#2C2C2C]"
        >
          The Fundamentals of Web Development
        </p>
        <button
          className="w-full lg:w-auto px-[30px] self-baseline min-h-[60px] flex justify-center items-center
          text-[16px] font-Poppins-Bold text-[#0C6291] gap-[16px] mt-[24px] mb-[30px]
          hover:bg-[#0C6291]
          border-[2px] border-[#0C6291] rounded-full"
        >
          <span className="mt-[3px]">LEARN MORE</span>
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
    </section>
  );
}
