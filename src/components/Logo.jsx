import React from 'react'
import logo from '../logoimg/logo.png'; // Import the image file


function Logo({width = "100%"}) {
  
  return (
    <img src={logo}    style={{ width, filter: 'brightness(80%)' }}  alt='Logo placeholder' className='rounded-full' />
  )
}

export default Logo;