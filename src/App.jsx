import { useRef } from 'react'
import './App.css'
import About from './components/About/About'
import Events from './components/Events/Events'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Knowledge from './components/Knowledge/Knowledge'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar'
import Organizations from './components/Organizations/Organizations'
import { useInView } from 'motion/react'

function App() {
  const textRef = useRef(null)
  const textInView = useInView(textRef,{
    margin:"-35% 0px 0px 0px"
  })
  const heroSectionRef = useRef(null)
  const heroSectionInView = useInView(heroSectionRef)

  return (
    <div className='min-h-lvh relative' >
      <Navbar textInView={textInView}  heroSectionInView={heroSectionInView} ></Navbar>      
      <Hero textRef={textRef} heroSectionRef={heroSectionRef} ></Hero>
      <About></About>
      <Events ></Events>
      <Organizations></Organizations>
      <Knowledge></Knowledge>
      <Logo></Logo>
      <Footer></Footer>
    </div>
  )
}

export default App
