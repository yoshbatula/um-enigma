import KnowledgeCards from "./KnowledgeCards";
import aboutArrow from "@images/aboutArrow.svg";
import whiteAboutArrow from "@images/whiteAboutArrow.svg";
import KnowledgeSquares from "./KnowledgeSquares";
import KnowledgeCarousel from "./KnowledgeCarousel";
export default function Knowledge() {
  
  return (
    <section className="min-h-[117vh] grid grid-rows-[1fr_270px] lg:grid-rows-[67%_33%] px-[4vw] xl:px-[calc(8vw+30px)]">
      <div className="hidden w-full lg:flex">
        <KnowledgeCards />
      </div>
      <div className="flex flex-col items-center lg:hidden">
        <KnowledgeCarousel />
      </div>
      <div className="grid grid-cols-4 h-fit">
        <div className="col-span-4 lg:col-span-2 gap-[12px] pl-[20px] py-[30px] lg:p-[30px] flex flex-col justify-end">
          <div className="flex gap-[12px] items-center">
            <div className="w-[40px] h-[2px] bg-[#A63346]"></div>
            <h3 className="font-Poppins-Medium text-[16px] lg:text-[18px] text-[#A63346]">
              Knowledge Hub
            </h3>
          </div>
          <p className="font-Poppins-SemiBold text-[clamp(24px,3.8vw,43px)] text-[#2C2C2C] leading-none">
            Resources
          </p>
          <p className="font-Poppins-Medium  text-[#2C2C2C] opacity-70 mt-[4px]">
            Introduction to Web Development
          </p>
          <button
            className="w-full lg:w-fit px-[30px] py-[15px] min-h-[60px] flex justify-center items-center
          text-[16px] font-Poppins-Bold text-[#0C6291] gap-[16px] mt-[4px]
          hover:bg-[#0C6291]
          border-[2px] border-[#0C6291] rounded-full"
          >
            <span className="mt-[3px]">VIEW MORE</span>
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
        <div className="p-[30px] hidden lg:flex flex-col justify-end">
          <p className="font-Poppins-SemiBold text-[#0C6291] text-[38px]">
            10+
          </p>
          <p className="font-Poppins-Medium text-[14px] text-[#2C2C2C]">Resources</p>
        </div>
      <KnowledgeSquares></KnowledgeSquares>
      </div>
    </section>
  );
}
