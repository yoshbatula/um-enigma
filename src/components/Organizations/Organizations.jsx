import organizationArrow from '@images/organizationArrow.svg'
import org1 from '@images/org1.svg'
import org2 from '@images/org2.svg'
import org3 from '@images/org3.svg'
import org4 from '@images/org4.svg'
import org5 from '@images/org5.png'
import org6 from '@images/org6.svg'
import org7 from '@images/org7.svg'
import org8 from '@images/org8.svg'

export default function Organizations(){
  return(
    <section className="min-h-[68vh] grid grid-rows-[40%_60%] mb-[30px] p-[30px] px-[calc(8vw_+_30px)]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className='flex items-center gap-[12px]'>
            <div className='w-[40px] h-[2px] bg-[#A63346]'></div>
            <h3 className='font-Poppins-Medium text-[18px] text-[#A63346] mb-[12px]'>Tech Organizations</h3>
          </div>
            <h4 className='font-Poppins-SemiBold text-[43px] text-[#2C2C2C] mb-[16px]'>COMMUNITIES</h4>
            <p className='font-Poppins-Medium text-[18px] text[#2C2C2C] opacity-70'>Student tech organizations affiliated by Enigma</p>
        </div>
        <img className='aspect-square w-[120px]' src={organizationArrow} alt="" />
      </div>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] grid-rows-2 mt-[45px]'>
        <Images />
      </div>
    </section>
  )
}

const Images = ()=>{
  const orgs = [org1,org2,org3,org4,org5,org6,org7,org8]
  return(
    orgs.map((imgSrc,index)=>{
      return(<div className={`w-full min-h-fit justify-center items-center bg-white ${index >3?'hidden lg:flex':''} flex`} key={index+imgSrc}>
        <img className={`${index === 4 || index === 5?'mix-blend-difference':''}`} src={imgSrc} alt="" />
      </div>)
    })
  )
}