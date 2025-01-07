import wheel from '@images/wheel.svg'

export default function RotatingWheel(){
  const blockOfRectangles = Array.from({ length: 4 }, () => "");
  return(<>
    <img className='rotatingWheel' src={wheel} alt="" />
    <div className="w-[170%] aspect-square -translate-x-[20%] -translate-y-[25%] rounded-full bg-wheelGradient absolute z-10"></div>
  </>)
} 