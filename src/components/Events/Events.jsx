import RotatingCircles from "./RotatingCircles";

export default function Events() {
  
  return (
    <section className="min-h-[83vh] grid grid-cols-2 grid-rows-2 px-[8vw] mb-[130px] ">
      <div className="row-span-2 flex justify-center items-center">
        <div className="w-[90%] h-[90%] bg-red-300 rounded-[8px]"></div>
      </div>
      <div className=" grid grid-cols-2">
      <div className="flex pl-[30px] flex-col justify-end">
        <p className="font-Poppins-SemiBold text-[32px] text-[#0C6291]">4</p>
        <p className="font-Poppins-Medium text-[14px] text-[#2C2C2C]
        opacity-70 mb-[20px]">
          Previous Events
        </p>
      </div>
      <RotatingCircles />
      </div>
      
    </section>
  );
}
