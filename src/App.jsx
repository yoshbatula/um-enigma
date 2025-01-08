import './App.css'
import About from './components/About/About'
import Events from './components/Events/Events'
import Hero from './components/Hero/Hero'
import Knowledge from './components/Knowledge/Knowledge'
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
    </div>
  )
}

export default App
