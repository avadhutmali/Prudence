import React from 'react'
import logo from '../assets/images/Group photo.jpg';
import {motion} from 'framer-motion'

function Prudence() {
  return (
    <div className="heroSection mx-auto">
      <div className="images h-full w-[50vw]"><img src={logo} alt="" /></div>
    </div>
  )
}

export default Prudence