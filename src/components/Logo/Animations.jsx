import { motion, useAnimate } from "motion/react"
import blueRectangle from '@images/blueRectangle.svg'
import blackArrow from '@images/blackArrow.svg'
import maroonSquare from '@images/maroonSquare.svg'
import { useEffect } from "react"
export default function Animations(){


  return (
    <>
    <RedBox />
    <BlueRectangle />
    <BlackArrow />
    <MaroonSquare />
  </>)
}

const RedBox = ()=>{
  return(<>
    <div className='w-full pt-[30px]'>
    <div className='w-[65%] -rotate-45  grid grid-cols-2 grid-rows-2 gap-[30px]'>
      <motion.div 
      animate={{
        x:'calc(100%  + 30px)'
      }}
      transition={{
        type:'spring',
        stiffness: 100, // Adjust stiffness for movement speed
        damping: 15, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
      className='aspect-square w-full bg-redBoxGradient place-self-end'></motion.div>
      <motion.div 
      animate={{
        y:'calc(100%  + 30px)'
      }}
      transition={{
        type:'spring',
        stiffness: 100, // Adjust stiffness for movement speed
        damping: 15, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
      className='aspect-square w-full bg-redBoxGradient place-self-end'></motion.div>
      <motion.div 
      animate={{
        y:'calc(-100%  - 30px)'
      }}
      transition={{
        type:'spring',
        stiffness: 100, // Adjust stiffness for movement speed
        damping: 15, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
      className='aspect-square w-full bg-redBoxGradient'></motion.div>
      <motion.div 
      animate={{
        x:'calc(-100%  - 30px)'
      }}
      transition={{
        type:'spring',
        stiffness: 100, // Adjust stiffness for movement speed
        damping: 15, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
      className='aspect-square w-full bg-redBoxGradient'></motion.div>
    </div>

    </div>
  </>)
}

const BlueRectangle = () =>{
  return(
    <>
    <div className='w-full  h-fit flex gap-[20px] items-start overflow-hidden'>
    
    <motion.img
      animate={{
        y:'101%'
      }}
      transition={{
        type:'spring',
        stiffness: 100, // Adjust stiffness for movement speed
        damping: 15, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
     className="max-w-[calc(50%_-_10px)]" src={blueRectangle} alt="" />
    <motion.img 
      animate={{
        y:'-101%',
        scaleX:[-1,-1]
      }}
      transition={{
        type:'spring',
        stiffness: 100, // Adjust stiffness for movement speed
        damping: 15, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
    className="-scale-x-[1] max-w-[calc(50%_-_10px)]" src={blueRectangle} alt="" />
    </div>
    </>
  )
}

const BlackArrow = () =>{
  return(
    <>
    <div className='w-full max-w-[23%] h-fit flex items-start overflow-hidden p-[2px] flex-wrap relative'>
    <motion.img 
      animate={{
        y:'-100%',
        x:'-100%'
      }}
      transition={{
        type:'spring',
        stiffness: 300, // Adjust stiffness for movement speed
        damping: 20, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
    className="w-full max-w-[50%]"  src={blackArrow} alt="" /> 
    <motion.img 
      animate={{
        y:'-100%',
        x:'100%',
        rotate:[90,90]
      }}
      transition={{
        type:'spring',
        stiffness: 300, // Adjust stiffness for movement speed
        damping: 20, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}

    className="w-full max-w-[50%] rotate-90"  src={blackArrow} alt="" /> 
    <motion.img 
      animate={{
        y:'100%',
        x:'-100%',
        rotate:[270,270]
      }}
      transition={{
        type:'spring',
        stiffness: 300, // Adjust stiffness for movement speed
        damping: 20, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
    className="w-full max-w-[50%] rotate-[270deg]"  src={blackArrow} alt="" /> 
    <motion.img 
      animate={{
        y:'100%',
        x:'100%',
        rotate:[180,180]
      }}
      transition={{
        type:'spring',
        stiffness: 300, // Adjust stiffness for movement speed
        damping: 20, // Adjust damping to control how "bouncy" the animation is
        mass: 1, // Set mass to modify the weight of the movement
        repeatDelay:1,
        repeatType:'mirror',
        repeat:Infinity
      }}
    className="w-full max-w-[50%] rotate-180"  src={blackArrow} alt="" /> 
    <span className="w-[15%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    rotate-45
     aspect-square bg-[#2C2C2C]"></span>
    </div>

    </>
  )
}

const MaroonSquare = () =>{
  const [scope,animate] = useAnimate()
  useEffect(() => {
    // Define a function to create the infinite animation loop
    const startAnimation = async () => {
      function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
      }
      while (true) {
        animate('img:first-child', { x: '100%' }, { type: "spring", stiffness: 100, damping: 15,mass:1, });
        await animate('img:nth-child(2)', { x: '-100%' }, { type: "spring", stiffness: 100, damping: 15,mass:1 });
        animate('img:first-child', { y: '100% ' }, {delay:1, type: "spring", stiffness: 100, damping: 15,mass:1, });
        await animate('img:nth-child(2)', { y: '-100%' }, {delay:1, type: "spring", stiffness: 100, damping: 15,mass:1 });
        animate('img:first-child', { x:'0%',y: '0%' }, {delay:1, type: "spring", stiffness: 100, damping: 15,mass:1, });
        await animate('img:nth-child(2)', {  x:'0%',y: '0%' }, {delay:1, type: "spring", stiffness: 100, damping: 15,mass:1 });
        await delay(1000)
      }
    };

    startAnimation();
  }, [animate])
  return(
    <div ref={scope} className='w-full max-w-[23%] flex flex-col h-fit  overflow-hidden'>
      <motion.img 
      className="aspect-square w-full max-w-[50%] " src={maroonSquare} alt="" />
      <motion.img className="ml-auto aspect-square w-full max-w-[50%]" src={maroonSquare} alt="" />
    </div>
  )
}