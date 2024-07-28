import React from 'react';
import about from './assets/about.jpeg';
import { motion } from 'framer-motion';
function About() {
  return (
    <div className='pb-4 border-b  border-neutral-900'>
        <h1 className='my-20 text-4xl text-center '>About <span className=' text-neutral-500'>Me</span></h1>
        <div className='flex flex-wrap '>
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration: 0.5}} className='w-full  lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center '>
                    <img src={about} alt='about me' className=' rounded-2xl'/>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x:100}} transition={{duration: 0.5}} className='w-full  lg:w-1/2 lg:mt-16'>
                <div className='flex justify-center  lg:justify-start'>
                    <p className='max-w-xl py-6 my-2 '>I am a dedicated full stack developer with passion for creating effective and user-friendly websites. Through my intrest, I have built small projects and learnt variety of technologies include React js, Node js, Express js, Tailwind css and Mongo DB. My journey in full stack development began with curiosity and I still have the same curiosity to learn new technologies and adapt to new challenges. Outside coding, I enjoy outdoor activities to keep me active and energitic and explore new oppourtunities.</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;