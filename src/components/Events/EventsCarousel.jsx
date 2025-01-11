/* eslint-disable react/prop-types */
import webvemberFigma from "@images/webvemberFigma.png";
import webvemberWeb from "@images/webvemberWeb.png";
import webvemberGithub from "@images/webvemberGithub.png";
import webvemberAstro from "@images/webvemberAstro.png";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";

const imgs = [webvemberFigma, webvemberWeb, webvemberGithub, webvemberAstro];

export default function EventsCarousel() {
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
        className="w-[93%] h-[93%] rounded-[8px] relative
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
        <Buttons currentIndex={imgIndex} setCurrentImgIndex={setImgIndex}/>
      </div>
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
    <div className="absolute bottom-[30px] left-1/2 w-[150px] h-[5px] -translate-x-1/2
    rounded-[70px] bg-[#ffffff40] flex flex-1 overflow-clip">
      {imgs.map((_,index)=>
      <button key={index}
      className={`h-full w-full ${currentIndex ===index ?'bg-white':''}`}
      onClick={()=>setCurrentImgIndex(index)}/>
      )}
    </div>
  )
}