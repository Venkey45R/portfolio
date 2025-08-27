import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative p-[3px] rounded-2xl overflow-hidden"
    >
      <nav className="flex items-center justify-between py-2 my-8">
        <div className="flex items-center flex-shrink-0 ">
          <h1 className="mt-4 text-xl font-bold lg:text-2xl">Venkatesh A</h1>
        </div>
        <div className="flex items-center justify-center gap-4 mx-8 mt-4 mb-0 text-2xl lg:mt-8">
          <a
            href="https://www.linkedin.com/in/venkateshamulraj2004"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Venkey45R" target="_blank">
            <FaGithub />
          </a>
          <a href="https://x.com/Venkatesh_4510" target="_blank">
            <FaSquareXTwitter />
          </a>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
