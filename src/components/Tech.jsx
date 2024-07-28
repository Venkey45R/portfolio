import React from 'react';
import {RiReactjsLine} from 'react-icons/ri';
import {SiMongodb} from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { animate, motion, transform } from 'framer-motion';

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Tech() {
  return (
    <div className='pb-24 border-b border-neutral-900'>
        <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{ opacity: 0, y: -100}} transition={{duration: 1.5}} className='my-20 text-4xl text-center '>Technologies</motion.h1>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-4 '>
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='p-4 border-4 rounded-2xl border-neutral-800'>
            <RiReactjsLine className=' text-7xl text-cyan-400'/>
          </motion.div>
          <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='p-4 border-4 rounded-2xl border-neutral-800'>
            <SiMongodb className='text-green-500 text-7xl'/>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='p-4 border-4 rounded-2xl border-neutral-800'>
            <SiExpress className=' text-7xl'/>
          </motion.div>
          <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='p-4 border-4 rounded-2xl border-neutral-800'>
            <FaNodeJs  className='text-green-500 text-7xl'/>
          </motion.div>
          <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='p-4 border-4 rounded-2xl border-neutral-800'>
            <RiTailwindCssFill className=' text-7xl text-cyan-400'/>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech;