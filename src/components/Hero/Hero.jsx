import facebookLogo from "@images/facebookLogo.svg";
import instagramLogo from "@images/instagramLogo.svg";
import linkedinLogo from "@images/linkedinLogo.svg";
export default function Hero() {
  return (
    <section
      className="bg-heroGradient min-h-lvh px-[140px] pb-[10px]
     text-white font-Poppins-Black flex flex-col justify-end"
    >
      <div className="flex gap-3 ml-[20px] mb-[10px]">
        <img src={facebookLogo} alt="" />
        <img src={instagramLogo} alt="" />
        <img src={linkedinLogo} alt="" />
      </div>
      <p className="font-Poppins-Medium text-[32px] mb-[5px] ml-[20px]">
        Ignite Aspiration. Spark Excellence.
      </p>
      <p className="text-[360px] font-Poppins-Bold leading-[0.8] ">ENIGMA
        
      </p>
    </section>
  );
}
