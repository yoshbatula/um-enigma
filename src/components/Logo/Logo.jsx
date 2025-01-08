import Animations from './Animations';
import { InfiniteSlider } from './InfiniteSlider';

export default function Logo(){
  return(<section className="flex flex-col px-[calc(8vw+30px)]">
  <InfiniteSlider     />
  <div className='min-h-[35vh] mt-[26px] flex gap-[16px] mb-[200px]'>
  <Animations />
  </div>
  </section>)
}