import Animations from './Animations';
import { InfiniteSlider } from './InfiniteSlider';
import enigmaWordLogo from '@images/enigmaWordLogo.png'

export default function Logo(){
  return(<section className="flex flex-col px-[calc(8vw+30px)]">
  <InfiniteSlider     />
  <div className='max-h-[35vh] min-h-fit mt-[26px] flex gap-[16px] '>
  <Animations />
  </div>
  <img className='grow-0 w-fit self-center mt-[50px] mb-[326px]' src={enigmaWordLogo} alt="" />
  </section>)
}