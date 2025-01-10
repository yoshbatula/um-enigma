import './App.css'
import About from './components/About/About'
import Events from './components/Events/Events'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Knowledge from './components/Knowledge/Knowledge'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar'
import Organizations from './components/Organizations/Organizations'

function App() {
  
  return (
    <div className='min-h-lvh relative' >
      <Navbar></Navbar>      
      <Hero></Hero>
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
