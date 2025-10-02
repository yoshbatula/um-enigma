import webDevBanner from "@images/WebDevBanner-6.png";
import webvemberGithub from "@images/webvemberGithub.png";
import webvemberAstro from "@images/webvemberAstro.png";
import aboutArrow from "@images/aboutArrow.svg";
import whiteAboutArrow from "@images/whiteAboutArrow.svg";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";


const imgs = [webDevBanner, webvemberAstro,webvemberGithub];

export default function KnowledgeCarousel(){
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0)

  const DRAG_BUFFER = 60;
  const ONE_SECOND = 1000
  const DELAY = ONE_SECOND * 5

  useMotionValueEvent(dragX,"change",(latest)=>{
    if(typeof latest === "number" && dragging){
      dragXProgress.set(latest)
    }else{
      dragXProgress.set(0)
    }
  })

  useEffect(()=>{
    const intervalRef = setInterval(()=>{
      const x = dragXProgress.get()
      if(x === 0){
        setImgIndex((pv)=>{
          if(pv === imgs.length -1){
            return 0
          }else{
            return pv + 1
          }
        })
      }
    }
    ,DELAY)
    return () => clearInterval(intervalRef)
  })

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);

    }else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
      
    }
  };

  return (
    <>
      <div
        className="w-full h-full rounded-[8px] relative
      overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          transition={{
            duration:0.25,
            ease:'easeOut'
          }}
          style={{
            x:dragX,
          }}
          animate={{
            translateX: `-${imgIndex*100}%`
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className="flex items-center cursor-grab h-full w-full
         active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
      </div>

        <button
          className="w-full lg:w-auto px-[30px] self-baseline min-h-[60px] flex justify-center items-center
          text-[16px] font-Poppins-Bold text-[#0C6291] gap-[16px] mt-[17px] 
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
        <Buttons currentIndex={imgIndex} setCurrentImgIndex={setImgIndex}/>
    </>
  );

}
const Images = ({imgIndex}) => {
  return (
    <>
      {imgs.map((imgSrc, index) => {
        return (
          <motion.div
            className={`bg-cover bg-center w-full h-full object-cover shrink-0
              ${index === 0? 'rounded-l-[8px]':''} 
              ${index === imgs.length -1?'rounded-r-md':''}`} 
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
            animate={{
              scale: imgIndex === index?1: 1
            }}
            transition={{
              type: 'spring',
              mass: 2 ,
              stiffness: 200,
              damping: 20,
            }}
            key={index}
          ></motion.div>
        );
      })}
    </>
  );
};

const Buttons=({currentIndex,setCurrentImgIndex})=>{
  return(
    <div className=" w-[150px] min-h-[5px] mt-[30px] mb-[30px]
    rounded-[70px] bg-[#00000020] flex flex-1 overflow-clip">
      {imgs.map((_,index)=>
      <button key={index}
      className={`h-full w-full ${currentIndex ===index ?'bg-[#0065F2]':''}`}
      onClick={()=>setCurrentImgIndex(index)}/>
      )}
    </div>
  )
}