import aboutArrow from '@images/aboutArrow.svg'
import connectWithUs from '@images/connectWithUs.svg'
export default function Footer(){
  return(<section className="flex flex-col ">
    <div className="flex  justify-between px-[calc(4vw_+_20px)] lg:px-[6vw]  xl:px-[calc(8vw+60px)] mb-[60px] md:mb-[160px]">
      <a href='https://www.facebook.com/um.enigma' className='flex items-center gap-[4px]'>
      <p className="text-[10px] md:text-[12px] font-Poppins-Bold text-[#0C6291]">FACEBOOK</p>
      <img className=' w-[14px] md:w-[18px]' src={aboutArrow} alt="" />
      </a>
      <a href='https://instagram.com/cce.enigma' className='flex items-center gap-[4px]'>
      <p className="text-[10px] md:text-[12px] font-Poppins-Bold text-[#0C6291]">INSTAGRAM</p>
      <img className=' w-[14px] md:w-[18px]' src={aboutArrow} alt="" />
      </a>
      <a href="https://www.linkedin.com/company/um-enigma" className='flex items-center gap-[4px]'>
      <p className="text-[10px] md:text-[12px] font-Poppins-Bold text-[#0C6291]">LINKEDIN</p>
      <img className=' w-[14px] md:w-[18px]' src={aboutArrow} alt="" />
      </a>
      <a className='flex items-center gap-[4px]'>
      <p className="text-[10px] md:text-[12px] font-Poppins-Bold text-[#0C6291]">EMAIL</p>
      <img className=' w-[14px] md:w-[18px]' src={aboutArrow} alt="" />
      </a>
      
    </div>
    <div className='h-[50px] w-full bg-[#2C2C2C] px-[calc(4vw)] lg:px-[6vw] xl:px-[calc(8vw+32px)] 
    flex justify-between items-center'>
      <p className='text-[12px] font-Poppins-Bold text-white'>ALL RIGHTS RESERVED 2025</p>
      <p className='text-[12px] font-Poppins-Bold text-white'>CODED BY <a className='underline' target='_blank' href="https://www.facebook.com/aprilbords.nerosa">APRIL BORDZ</a></p>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-[45px] lg:bottom-[40px] w-[calc(100%-32px)] h-fit flex  items-start'>
      <img src={connectWithUs} className=' text-[7vw] font-Poppins-Bold
      w-full
      left-1/2  text-[#2C2C2C]'>
      
      </img>

      </div>
    </div>
  </section>)
}