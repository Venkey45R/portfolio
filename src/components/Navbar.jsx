import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-2 mb-20 '>
        <div className='flex items-center flex-shrink-0 '>
            <h1 className='text-xl font-bold '>Ve</h1>
        </div>
        <div className='flex items-center justify-center gap-4 mx-8 mt-8 mb-0 text-2xl'>
            <a href="https://www.linkedin.com/in/venkateshamulraj2004" target='_blank'>
              <FaLinkedin />
            </a>       
            <a href='https://github.com/Venkey45R' target='_blank'>   
              <FaGithub />
            </a>
            <a href='https://x.com/Venkatesh_4510' target='_blank'>   
              <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;