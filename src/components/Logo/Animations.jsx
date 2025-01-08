import { motion } from "motion/react"


export default function Animations(){
  return (
    <>
    <RedBox />
    <div className='w-full'></div>
    <div className='w-full'></div>
    <div className='w-full'></div>
  </>)
}

const RedBox = ()=>{
  return(<>
    <div className='w-full py-[10px]'>
    <div className='w-[60%] -rotate-45  grid grid-cols-2 grid-rows-2 gap-[30px]'>
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