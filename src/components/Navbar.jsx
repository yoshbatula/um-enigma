import navArrow from '@images/navArrow.svg'
import navColoredArrow from '@images/navColoredArrow.svg'
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

export default function Navbar({textInView,heroSectionInView}){
  const [isHidden,setHidden] = useState()
   const { scrollY } = useScroll(); 
   useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && !textInView) {
      setHidden(true);
    } else if(latest < previous) {
      setHidden(false);
    }
  });
  const navbarVariants = {
    hidden:{y:'-100px'},
    visible:{y:'0px'}
  }
  return(
    <motion.section 
    transition={{
      type:'spring',
      damping:15,
      stiffness:150,
      mass:1,
    }}
    variants={navbarVariants}
    animate={isHidden?'hidden':'visible'}
    className="fixed top-[24px] px-[4vw] lg:px-[6vw] 
    will-change-transform xl:px-[8vw] flex z-30
    justify-between w-full text-white items-start">
      <button className={`w-[70px] aspect-square cursor-pointer 
        ${!heroSectionInView?'coloredLogo':'whiteLogo'} bg-white`} />
      <div className='flex gap-[50px]'>
        <button className={`min-h-[55px] min-w-[210px] items-center 
        rounded-[80px]  
        ${!heroSectionInView?'border-none bg-[#006794] hover:bg-[#175c7a]'
          :'border-white hover:bg-[#00000027] border-[1px]'}
        gap-[16px] hidden lg:flex justify-center `}>
          <span className='font-Poppins-Bold mt-[3px  '>CONTACT US</span>
          <div className='aspect-square rounded-full w-[29px] bg-white'>
            <img src={!heroSectionInView? navColoredArrow:navArrow} alt="" />
          </div>
        </button>
        <div className='flex gap-[25px]  items-center'>  
          <button className={`font-Poppins-Bold 
            ${!heroSectionInView?'text-[#006794]':'text-white'}`}>MENU</button>
          <button className={`w-[45px] aspect-square whiteBox 
            ${!heroSectionInView?'bg-[#006794]':'bg-white'}`}  />
        </div>
      </div>
    </motion.section>
  )
}