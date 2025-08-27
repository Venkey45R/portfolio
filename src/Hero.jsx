import React from "react";
import lap from "./assets/laptop.jpg";
import { delay, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const handleContact = () => {
  const link = document.createElement("a");
  link.href = "https://www.linkedin.com/in/venkateshamulraj2004/";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Hero() {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-40 lg:h-5/6 h-[780px]">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-2xl tracking-tight lg:mt-16 lg:text-4xl"
            >
              Hi, I’m Venkatesh I build modern, scalable web apps for
              businesses.
            </motion.h1>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="max-w-lg py-6 my-2 font-light tracking-tighter text-md "
            >
              I help businesses build modern, responsive, and high-quality web
              apps with React, Node.js, and MongoDB. I deliver clean UIs and
              scalable backends tailored to your needs. With Framer Motion, I
              create animated, interactive websites that not only look stunning
              but also deliver an engaging user experience that keeps visitors
              coming back.
            </motion.p>
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.8 }}
              className="relative px-4 py-2 mb-4 font-medium text-white transition-all duration-300 bg-transparent lg:mb-0 hover:px-6 rounded-xl hover:text-white"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderImage: "linear-gradient(to right, #f9a8d4, #8b5cf6) 1",
              }}
              onClick={handleContact}
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="relative p-[3px] rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-2xl visibleLoopRing"
              aria-hidden="true"
            ></div>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={lap}
              alt="laptop"
              className="relative z-10 block rounded-lg"
            />
          </motion.div>
        </div>

        <style>
          {`
            .visibleLoopRing {
              background: conic-gradient(
                from 0deg,
                transparent 0deg 300deg,
                #a855f7 300deg 360deg
              );
              animation: visibleLoopStride 3s linear infinite;
              will-change: transform;
              z-index: 0;
            }
            @keyframes visibleLoopStride {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Hero;
