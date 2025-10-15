import webvemberWeb from "@images/WebDevBanner-6.png";
import webvemberAstro from "@images/webvemberAstro.png";
import webvemberGithub from "@images/webvemberGithub.png";
import whiteAboutArrow from "@images/whiteAboutArrow.svg";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function KnowledgeCards (){
  const [mouseHover, setMouseHover] = useState(null);
  const buttonWidthRef = useRef(null);
  const knowledgeCardHeightRef = useRef(null);
  const imageContainerHeightRef = useRef(null);
  const imageContainerWidthRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const knowledgeCard = document.getElementsByClassName("knowledgeCard")[0];
    knowledgeCardHeightRef.current =
      knowledgeCard.getBoundingClientRect().height;
    const buttonElement = knowledgeCard.getElementsByTagName("button")[0];
    buttonWidthRef.current = buttonElement.getBoundingClientRect().width;
    const imageContainer = knowledgeCard.getElementsByTagName("div")[0];
    imageContainerHeightRef.current =
      imageContainer.getBoundingClientRect().height;
    imageContainerWidthRef.current =
      imageContainer.getBoundingClientRect().width;
  }, [windowSize]);

  const imgs = [webvemberWeb];
  const titles = [
    "Web Development Start to Finish"
  ];
  const tags = ["WEB DEVELOPMENT"];

  const buttonVariant = {
    notHovered: { width: imageContainerWidthRef.current, y: "0px" },
    hovered: { width: imageContainerWidthRef.current * 0.87, y: "-20px" },
  };

  return imgs.map((imgSrc, index) => {
    return (
      <div
        onMouseEnter={() => setMouseHover(index)}
        onMouseLeave={() => setMouseHover(null)}
        key={"knowledge" + index}
        className="w-full max-w-[500px] min-h-[470px] flex flex-col p-[30px] px-[15px] xl:px-[30px] pb-[100px] hover:pb-[50px]
         transition-all ease-in-out duration-[700ms] gap-[17px] items-center justify-start
        knowledgeCard relative"
      >
        <span
          className="absolute left-[60px] top-[50px] font-Poppins-Bold text-[12px] 
        text-white z-10"
        >
          {tags[index]}
        </span>
        <span
          className={`${
            mouseHover === index ? "-translate-y-[10px]" : ""
          } absolute bottom-[120px] left-[60px] font-Poppins-SemiBold
        text-white text-[24px] z-10 ease-in-out duration-[600ms] transition-transform`}
        >
          {titles[index]}
        </span>
        <div
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
          className={`w-full flex-1 min-h-[250px] bg-cover bg-center origin-top rounded-[8px]
             relative overflow-clip `}
        >
          <div className="absolute inset-0 h-full w-full bg-knowledgeCardGradient"></div>
        </div>
        <motion.button
          variants={buttonVariant}
          animate={mouseHover === index ? "hovered" : "notHovered"}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
          }}
          className={`min-w-[200px] w-[calc(100%-60px)] min-h-[58px] flex justify-center items-center absolute
          bottom-[30px] mx-[30px] transition-colors ease-in-out duration-500
          text-[16px] font-Poppins-Bold text-[#0C6291] gap-[16px]
          knowledgeButton ${mouseHover === index ? "bg-white" : ""}
          border-[2px] border-[#0C6291] rounded-full`}
        >
          <span className="mt-[3px]">LEARN MORE</span>
          <span
            className="aspect-square w-[28px] rounded-full bg-[#0C6291]
        
          flex justify-center items-center relative 
          overflow-hidden"
          >
            <img
              className="w-[24px] transition-transform ease-in-out duration-300 "
              src={whiteAboutArrow}
              alt=""
            />
          </span>
        </motion.button>
      </div>
    );
  });
};
