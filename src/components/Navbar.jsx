import whiteLogo from '@images/whiteLogo.svg'
import whiteBox from '@images/whiteBox.svg'
import navArrow from '@images/navArrow.svg'

export default function Navbar(){
  return(
    <section className="absolute top-[24px] px-[140px] flex 
    justify-between w-full text-white items-start">
      <img className='cursor-pointer' src={whiteLogo} alt="" />
      <div className='flex gap-[50px]'>
        <button className='min-h-[55px] min-w-[210px] items-center rounded-[80px]
        gap-[16px] flex justify-center border-white border-[1px] hover:bg-[#00000027]'>
          <span className='font-Poppins-Bold mt-[3px]'>CONTACT US</span>
          <div className='aspect-square rounded-full w-[29px] bg-white'>
            <img src={navArrow} alt="" />
          </div>
        </button>
        <div className='flex gap-[25px] items-center'>  
          <button className='font-Poppins-Bold'>MENU</button>
          <img className='cursor-pointer' src={whiteBox} alt="" />
        </div>
      </div>
    </section>
  )
}