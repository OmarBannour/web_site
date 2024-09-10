import React from 'react'
import Navbar from './Components/Nevbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programes/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimnials from './Components/Testimonials/Testimnials'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'/> 
    <Programs/>
    <About/>
    <Title subTitle='Galeery' title='Campus Photos'/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' title='What student says'/>
    <Testimnials/>
    <Title subTitle='Contact' title='Get in Touch'/>
    <Contact/>

    
    </div>

    </div>
  )
}

export default App
