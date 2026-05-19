import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
  return (
      <div className="femaura-home min-h-screen bg-pink-50 flex flex-col">
      
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-600">FemAura</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-pink-600" onClick={()=>navigate('/home')}>Home</a>
          {/* <a href="#services" className="hover:text-pink-600">Services</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a> */}
           <button className="hover:text-pink-600" onClick={()=>navigate('/')}>Register</button>
             <button className="hover:text-pink-600" onClick={()=>navigate('/login')}>Login</button>
        </nav>
      </header>
      </div>
  )
}

export default About
