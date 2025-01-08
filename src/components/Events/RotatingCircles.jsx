export default function RotatingCircles(){
  const blockOfCircles = Array.from({ length: 4 }, () => "");
  return(
    <div className="flex flex-wrap ">
      {blockOfCircles.map((block,index)=>
      index === 1 || index === 2?(
      <div className="w-[50%] aspect-square flex items-baseline rotatingCircleContainer overflow-hidden" key={index}>
        <div className={`w-[100%] aspect-square
        ${index === 1 && 'rotate-180 mt-auto'}
          rounded-t-[70px]  bg-rotatingCircleGradient`}></div>
      </div>)
      :(<div className="w-[50%] aspect-square flex items-baseline rotatingCircleContainer overflow-hidden" key={index}>
        <div className={`w-[100%] aspect-square 
          rounded-tr-[70px] ${index===3?'rotate-180':'mt-auto'} 
          bg-rotatingCircleGradient`}></div>
      </div>)
      )}
    </div>
  )
}