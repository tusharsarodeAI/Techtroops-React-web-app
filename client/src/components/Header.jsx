import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import Home from '../pages/Home'
import { useState } from 'react';
import { IoLogoPolymer } from "react-icons/io";


  
const Header = () => {
    
  return (
   <>
    <div className=' shadow-md w-full h-16 flex items-center'>
        <div className=' md:px-8 py-7 px-8 flex items-center text-2xl '>
             
             <IoLogoPolymer />

            <div>
                 <span className=' text-blue-800 '>Tech</span>Troops
            </div>
        </div>
        <div className=' mr-16 text-xl'>
                <ul className=' flex justify-between items-center gap-10'>
                    <Link to="/"><li className=' hover:text-blue-800'>Home</li></Link>
                    <Link to="/dashbord"><li className=' hover:text-blue-800'>Dashbord</li></Link>
                    <Link to="/bookpage"><li className=' hover:text-blue-800'>Books</li></Link>
                    <Link to="/jobspost"><li className=' hover:text-blue-800'>Jobs</li></Link>
                    
                </ul>
            </div>
    </div>
   </>
     

)
}

export default Header
