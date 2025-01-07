import facebookLogo from "@images/facebookLogo.svg";
import instagramLogo from "@images/instagramLogo.svg";
import linkedinLogo from "@images/linkedinLogo.svg";
export default function Hero() {
  return (
    <section
      className="bg-heroGradient min-h-lvh px-[140px] pb-[10px]
     text-white font-Poppins-Black flex flex-col justify-end"
    >
      <div className="flex gap-3 ml-[20px]">
        <img src={facebookLogo} alt="" />
        <img src={instagramLogo} alt="" />
        <img src={linkedinLogo} alt="" />
      </div>
      <p className="font-Poppins-Medium text-[32px] leading-tight translate-y-4  ml-[20px]">
        Ignite Aspiration. Spark Excellence.
      </p>
      <div className="min-h-auto w-fit relative leading-[0.9] mb-[0px]  overflow-clip ">
        <span className="font-Poppins-Bold text-[20vw] invisible">ENIGMA</span>
        <svg className="absolute top-0 left-0 w-full h-full">
          <mask className="" id="textMask">
          <text
            className="relative"
            fill="white"
            x="0"
            y="0"
            fontSize={"20vw"}
            fontFamily="Poppins-Bold"
            dominantBaseline={"Hanging"}
          >
            ENIGMA
          </text>

          </mask>
        </svg>
        <span className="absolute text left-0  w-[100%] h-full bg-[white]">

        <span className="absolute bg-neonGradient -rotate-[30deg] rotate neonGradient left-[-10%] 
         top-[-100%] w-[35%] h-[300%] 
        "></span>
        <span className="absolute bg-crimsonGradient rounded-full aspect-square w-[60%]
        translate-y-full  -translate-x-[50%]"></span>
        <span className="absolute bg-crimsonGradient2 rounded-full aspect-square w-[75%]
           -translate-y-2/4 translate-x-[92%]"></span>
        </span>
      </div>
    </section>
  );
}
