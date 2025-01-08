import { motion } from "motion/react"
import blueRectangle from '@images/blueRectangle.svg'

export default function Animations(){
  return (
    <>
    <RedBox />
    <BlueRectangle />
    <div className='w-full'></div>
    <div className='w-full'></div>
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