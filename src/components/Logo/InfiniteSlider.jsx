import blueStar from '@images/blueStar.svg'
import maroonStar from '@images/maroonStar.svg'
import redStar from '@images/redStar.svg'
export function InfiniteSlider() {
  return <div className='max-w-full overflow-hidden'>
    <div className="h-[120px] w-fit max-w-fit flex items-center gap-[45px]
    transition-transform infiniteSlider">
      <img src={blueStar}></img>
      <p className='font-Poppins-Medium min-w-[13.5ch] text-[32px] text-[#2C2C2C]'>Spark Excellence</p>
      <img src={maroonStar}></img>
      <p className='font-Poppins-Medium min-w-[13ch] text-[32px] text-[#2C2C2C]'>Ignite Aspiration</p>
      <img src={redStar}></img>
      <p className='font-Poppins-Medium min-w-[13.5ch] text-[32px] text-[#2C2C2C]'>Spark Excellence</p>
      <img src={maroonStar}></img>
      <p className='font-Poppins-Medium min-w-[13ch] text-[32px] text-[#2C2C2C]'>Ignite Aspiration</p>
      <img src={blueStar}></img>
      <p className='font-Poppins-Medium min-w-[13.5ch] text-[32px] text-[#2C2C2C]'>Spark Excellence</p>
      <img src={maroonStar}></img>
      <p className='font-Poppins-Medium min-w-[13ch] text-[32px] text-[#2C2C2C]'>Ignite Aspiration</p>
      <img src={redStar}></img>
      <p className='font-Poppins-Medium min-w-[13.5ch] text-[32px] text-[#2C2C2C]'>Spark Excellence</p>
      <img src={maroonStar}></img>
      <p className='font-Poppins-Medium min-w-[13ch] text-[32px] text-[#2C2C2C]'>Ignite Aspiration</p>

    </div>

    </div>;
}
  