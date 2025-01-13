import Animations from './Animations';
import { InfiniteSlider } from './InfiniteSlider';
import enigmaWordLogo from '@images/enigmaWordLogo.png'

export default function Logo(){
  return(<section className="flex flex-col px-[4vw]  lg:px-[6vw] xl:px-[calc(8vw+30px)]">
  <InfiniteSlider     />
  <div className='min-h-[30vh]  md:min-h-fit md:mt-[26px] grid grid-rows-2 grid-cols-2 md:flex gap-[16px] '>
  <Animations />
  </div>
  <img className='grow-0 w-fit self-center mt-[50px] mb-[182px] md:mb-[326px]' src={enigmaWordLogo} alt="" />
  </section>)
}