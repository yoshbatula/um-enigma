import RotatingCircles from "./RotatingCircles";
import whiteAboutArrow from '@images/whiteAboutArrow.svg'
import aboutArrow from '@images/aboutArrow.svg'
export default function Events() {
  return (
    <section className="min-h-[83vh] grid grid-cols-2 grid-rows-2 px-[8vw] mt-[100px] mb-[130px] ">
      <div className="row-span-2 flex justify-center items-center">
        <div className="w-[93%] h-[93%] bg-red-300 rounded-[8px]"></div>
      </div>
      <div className=" grid grid-cols-2">
        <div className="flex pl-[30px] flex-col justify-end">
          <p className="font-Poppins-SemiBold text-[32px] text-[#0C6291]">4</p>
          <p
            className="font-Poppins-Medium text-[14px] text-[#2C2C2C]
        opacity-70 mb-[20px]"
          >
            Previous Events
          </p>
        </div>
        <RotatingCircles />
      </div>

      <div className="flex flex-col justify-end pl-[30px] py-[30px]">
        <div className="flex gap-3 items-center ">
          <span className="h-[2px] w-[40px] bg-[#A63346]"></span>
          <h3 className="font-Poppins-Medium text[18px] text-[#A63346]">
            Upcoming Events
          </h3>
        </div>
        <p className="font-Poppins-SemiBold text-[43px] mb-[4px]">Unveiling The Web</p>
        <p className="font-Poppins-Medium text-[18px] opacity-70 
        text-[#2C2C2C]">
          Introduction To Web Development
        </p>
                  <button
            className="px-[30px] self-baseline min-h-[60px] flex justify-center items-center
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
