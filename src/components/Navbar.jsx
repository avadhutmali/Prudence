import React from 'react'
import logo from '../assets/Logo/WhatsApp Image 2024-08-17 at 10.10.51_a8c7da21.png';
import { motion } from "framer-motion"
import TextReveal from './TextReveal';

function Navbar() {
  return (
      <div className="h-[20vh] flex items-center justify-center w-full logo relative  ml-2">
        <img src={logo} className='absolute left-0 w-[25vh]' alt="" />
        <TextReveal text="Prudence" />
      </div>
  )
}

export default Navbar