import React from 'react'
import './App.css'
import Home from './sections/Home'
import About from './sections/About'
import Resume from './sections/Resume'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Sidebar from './sections/Sidebar'
import BurgerIcon from './components/BurgerIcon'

function App() {
 

  return (
    <>
      <div className=' relative flex flex-col items-center justify-between'>

        <div className='absolute lg:invisible '>
          <BurgerIcon/>
        </div>

        <div className='absolute left-2  h-screen flex justify-center top-[25vh] sm:invisible lg:visible  '>
        <Sidebar/>
        </div>
        
        <Home />
        <About/>
        <Resume/>
        <Portfolio/>
        <Services/>
        <Contact/>
      </div>
    </>
  )
}

export default App
