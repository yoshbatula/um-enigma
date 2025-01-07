import './App.css'
import About from './components/About/About'
import Events from './components/Events/Events'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className='min-h-lvh relative' >
      <Navbar></Navbar>      
      <Hero></Hero>
      <About></About>
      <Events ></Events>
    </div>
  )
}

export default App
