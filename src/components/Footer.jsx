import aboutArrow from '@images/aboutArrow.svg'
import connectWithUs from '@images/connectWithUs.svg'
export default function Footer(){
  return(<section className="flex flex-col ">
    <div className="flex  justify-between px-[calc(8vw+60px)] mb-[180px]">
      <a className='flex gap-[4px]'>
      <p className="text-[12px] font-Poppins-Bold text-[#0C6291]">FACEBOOK</p>
      <img src={aboutArrow} alt="" />
      </a>
      <a className='flex gap-[4px]'>
      <p className="text-[12px] font-Poppins-Bold text-[#0C6291]">INSTAGRAM</p>
      <img src={aboutArrow} alt="" />
      </a>
      <a className='flex gap-[4px]'>
      <p className="text-[12px] font-Poppins-Bold text-[#0C6291]">LINKEDIN</p>
      <img src={aboutArrow} alt="" />
      </a>
      <a className='flex gap-[4px]'>
      <p className="text-[12px] font-Poppins-Bold text-[#0C6291]">EMAIL</p>
      <img src={aboutArrow} alt="" />
      </a>
      
    </div>
    <div className='h-[50px] w-lvw bg-[#2C2C2C] px-[calc(8vw+32px)] 
    flex justify-between items-center'>
      <p className='text-[12px] font-Poppins-Bold text-white'>ALL RIGHTS RESERVED 2024</p>
      <p className='text-[12px] font-Poppins-Bold text-white'>CODED BY APRIL BORDZ</p>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-[40px] w-[calc(100%-32px)] h-fit flex  items-start'>
      <img src={connectWithUs} className=' text-[7vw] font-Poppins-Bold
      w-full
      left-1/2  text-[#2C2C2C]'>
      
      </img>

      </div>
    </div>
  </section>)
}