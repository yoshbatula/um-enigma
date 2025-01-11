import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";

export function AboutCardSection() {
  return (
    <>
      <div
        className="hidden lg:flex col-span-2 justify-between 
  xl:px-[28px] self-center items-center"
      >
        <div className="flex flex-col justify-center  gap-5">
          <div
            className="aboutCard1 w-[40px] aspect-square bg-[#EAEAEA] 
          transition-colors ease-out duration-300"
          ></div>
          <p className="max-w-[24ch] font-Poppins-SemiBold text-[clamp(16px,1.2vw,18px)]">
            Empowering Students in Tech Through Connection
          </p>
          <p
            className="max-w-[32ch] font-Poppins-Medium text-[clamp(14px,1vw,16px)] text-[#2C2C2C]
          opacity-70  "
          >
            Our organization is dedicated to connecting students in tech,
            providing them opportunities to learn
          </p>
        </div>
        <div className="flex flex-col justify-center  gap-5">
          <div
            className="aboutCard2 w-[40px] aspect-square bg-[#EAEAEA] 
          transition-colors ease-out duration-300"
          ></div>
          <p className="max-w-[24ch] font-Poppins-SemiBold text-[clamp(16px,1.2vw,18px)] ">
            Empowering Students in Tech Through Connection
          </p>
          <p
            className="max-w-[32ch] font-Poppins-Medium text-[clamp(14px,1vw,16px)] text-[#2C2C2C]
          opacity-70  "
          >
            Our organization is dedicated to connecting students in tech,
            providing them opportunities to learn
          </p>
        </div>
        <div className="flex flex-col justify-center  gap-5">
          <div
            className="aboutCard3 w-[40px] aspect-square bg-[#EAEAEA] 
          transition-colors ease-out duration-300"
          ></div>
          <p className="max-w-[24ch] font-Poppins-SemiBold text-[clamp(16px,1.2vw,18px)] ">
            Empowering Students in Tech Through Connection
          </p>
          <p
            className="max-w-[32ch] font-Poppins-Medium text-[clamp(14px,1vw,16px)]  text-[#2C2C2C]
            "
          >
            Our organization is dedicated to connecting students in tech,
            providing them opportunities to learn
          </p>
        </div>
      </div>
      <MobileAboutCardSection />
    </>
  );
}

const MobileAboutCardSection = () => {
  const cardImgs = ["aboutCard1", "aboutCard2", "aboutCard3"];

  const [dragging, setDragging] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  const DRAG_BUFFER = 30;
  const ONE_SECOND = 1000;
  const DELAY = ONE_SECOND * 5;

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragXProgress.set(latest);
    } else {
      dragXProgress.set(0);
    }
  });

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();
      if (x === 0) {
        setCardIndex((pv) => {
          if (pv === cardImgs.length - 1) {
            return 0;
          } else {
            return pv + 1;
          }
        });
      }
    }, DELAY);
    return () => clearInterval(intervalRef);
  });

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && cardIndex < cardImgs.length - 1) {
      setCardIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && cardIndex > 0) {
      setCardIndex((pv) => pv - 1);
    }
  };
  return (
    <div
      className="w-full h-fit mt-[20px] pb-[60px]  pl-[16px]
     xl:px-[28px] col-span-2 flex lg:hidden relative"
    >
      <div className="w-full overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          transition={{
            stiffness: 200,
            damping: 15,
            mass: 1,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${cardIndex * 100}%`,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className="flex w-full "
        >
          <Cards cardImgs={cardImgs} />
        </motion.div>
      </div>
      <Buttons
        cardIndex={cardIndex}
        cardImgs={cardImgs}
        setCardIndex={setCardIndex}
      />
    </div>
  );
};

const Cards = ({ cardImgs }) => {
  return (
    <>
      {cardImgs.map((imgClass) => {
        return (
          <motion.div
            key={"img" + imgClass}
            className="min-w-full flex justify-start"
          >
            <div className="flex flex-col justify-start max-w-fit  gap-5">
              <div
                className={`${imgClass}  w-[40px] aspect-square bg-[#EAEAEA] 
              transition-colors ease-out duration-300`}
              ></div>
              <p className="max-w-[24ch] font-Poppins-SemiBold text-[clamp(18px,3vw,23px)]">
                Empowering Students in Tech Through Connection
              </p>
              <p
                className="max-w-[32ch] font-Poppins-Medium text-[clamp(14px,1vw,18px)] text-[#2C2C2C]
              opacity-70  "
              >
                Our organization is dedicated to connecting students in tech,
                providing them opportunities to learn
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Buttons = ({ cardIndex, setCardIndex, cardImgs }) => {
  return (
    <div
      className="absolute bottom-[30px] left-[89px] w-[100px] h-[5px] 
    rounded-[70px] bg-[#ffffff40] flex flex-1 overflow-clip"
    >
      {cardImgs.map((_, index) => (
        <button
          key={index}
          className={`h-full w-full ${cardIndex === index ? "bg-[#006794]" : "bg-[#a4bcc684]"}`}
          onClick={() => setCardIndex(index)}
        />
      ))}
    </div>
  );
};
