import React from 'react';
import lap from './assets/laptop.jpg';
import { delay, motion } from "framer-motion";

const container = (delay) =>({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}},
})  
function Hero() {
  return (
    <div className=' border-b border-neutral-900 pb-4 lg:mb-3.5'>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Venkatesh A</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text'>Full Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className='max-w-xl py-6 my-2 text-sm font-light tracking-tighter '>I am a passionate full stack Developer with knack for crafting roubust and responsive websites. I have developed a lot of projects thus got a lot of experience in building a website from scratch. I use React js and Tailwind css for front-end and Node js, Express js and Mongo DB for backend. My goal is to provide as much as value with my knowledge to solve your problems with best solution as possible.</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center '>
                    <motion.img initial={{x: 100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={lap} alt=' laptop' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;