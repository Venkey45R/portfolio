import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className='pb-20 border-b border-neutral-900'>
        <motion.h1 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y:-100}} transition={{duration: 0.5}} className='my-10 text-4xl text-center '>Get In Touch</motion.h1>
        <motion.div whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: 50}} transition={{duration: 1}} className='tracking-tighter text-center '>
          <a href='mailto:venkateshamulraj@gmail.com'>
            <p className='my-4'>venkateshamulraj@gmail.com</p>
          </a>
            <p className='my-4'>+91_9342972725</p>
        </motion.div>
    </div>
  )
}

export default Contact;