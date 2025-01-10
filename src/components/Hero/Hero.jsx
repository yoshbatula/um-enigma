import facebookLogo from "@images/facebookLogo.svg";
import instagramLogo from "@images/instagramLogo.svg";
import linkedinLogo from "@images/linkedinLogo.svg";
        
export default function Hero() {
  return (
    <section
      className="heroSection bg-no-repeat
      bg-cover bg- min-h-lvh px-[7vw] pb-[10px]
     text-white font-Poppins-Black flex flex-col justify-end "
    >
      <div className="flex gap-3 mb-[10px]">
        <img className="w-[42px] lg:w-[58px]" src={facebookLogo} alt="" />
        <img className="w-[42px] lg:w-[58px]" src={instagramLogo} alt="" />
        <img className="w-[42px] lg:w-[58px]" src={linkedinLogo} alt="" />
      </div>
      <p className="font-Poppins-Medium text-[clamp(21px,4.5vw,38px)] w-[18ch] lg:w-[28ch] leading-tight mb-[15px] ">
        Ignite Aspiration. Spark Excellence.
      </p>
      <div className="min-h-auto w-full relative leading-[0.9] mb-[0px]  overflow-clip ">
        <span className="font-Poppins-Bold text-[20vw] invisible">ENIGMA</span>
        <span className="absolute text left-0  w-[100%] h-full bg-[white]">

        <span className="absolute bg-neonGradient -rotate-[30deg] rotate neonGradient left-[-10%] 
         top-[-100%] w-[35%] h-[300%] 
        "></span>
        <span className="absolute bg-crimsonGradient rounded-full  bottom-[-155%] aspect-square w-[57%]
        translate-y-full  -translate-x-[84%]"></span>
        <span className="absolute bg-crimsonGradient2 rounded-full aspect-square w-[75%]
           -translate-y-2/4 translate-x-[92%]"></span>
        </span>
      </div>
    </section>
  );
}
