import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-2 mb-20 '>
        <div className='flex items-center flex-shrink-0 '>
            <h1 className='text-xl font-bold '>Ve</h1>
        </div>
        <div className='flex items-center justify-center gap-4 mx-8 mt-8 mb-0 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar;