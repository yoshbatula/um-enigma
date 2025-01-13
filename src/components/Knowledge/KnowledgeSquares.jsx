import knowledgeSquares from '@images/knowledgeSquares.svg'
import { motion } from 'motion/react'

export default function KnowledgeSquares(){

  return(
    <div className='hidden lg:flex flex-col justify-end overflow-hidden'>
      <motion.img 
      animate={{
        x:['0%','100%'],y:['0%','100%']
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
      src={knowledgeSquares} alt="" />
    
        <motion.img 
      animate={{
        x:'-150%',y:'-150%'
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
      src={knowledgeSquares} alt="" />
    </div>
  )
}