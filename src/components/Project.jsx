import React from 'react';
import blog from "../assets/blogs.png";
import expense from "../assets/expense.png";
import port from "../assets/port.png";
import star from "../assets/star.png";
import task from "../assets/task.png";
import mern from "../assets/mern.png";
import { motion } from 'framer-motion';
function Project() {
    const Projects = [
        {
            title: "Blog Verse",
            image: blog,
            description: "Blog Verse is my first full stack project in which I used MERN stack. In Blog Verse user can write their own blogs and also view latest blogs written by other users.",
            technologies: ["React", "Mongo DB", "Express JS", "Node JS", "Tailwind CSS"],
        },
        {
            title: "Task Tracker",
            image: task,
            description: "A full-stack web application built using the MERN stack for efficient task management. It features a user-friendly interface with light and dark modes, highlighting skills in front-end and back-end development, and responsive design.",
            technologies: ["React", "Tailwind CSS, Mongo DB", "Node JS", "Express JS"],
        },
        {
            title: "Portfolio website",
            image: port,
            description: "Personal portfoilio website showcaseing projects, skills and contact information",
            technologies: ["React", "Tailwind CSS", "Framer"],
        },
        {
            title: "Starbucks Clone",
            image: star,
            description: "Starbucks website clone to learn front-end development",
            technologies: ["Html", "Css", "Java Script"],
        },
        {
            title: "Expense Tracker",
            image: mern,
            description: "Tracks your income, expense, savings and show your progress in graph",
            technologies: ["React", "Tailwind CSS", "Express JS", "Node JS", "Chart JS"],
        }
    ];

    return (
        <div className='pb-4 border-b border-neutral-900'>
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 0.5}} className='my-20 text-4xl text-center'>Projects</motion.h1>
            <div>
                {Projects.map((project, index) => {
                    return (
                        <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                            <div className='w-full lg:w-1/4'>
                                <motion.img whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} src={project.image} width={250} height={250} alt={project.title} className='mb-6 rounded' />
                            </div>
                            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                                <p className='mb-4 text-neutral-400'>{project.description}</p>
                                {project.technologies.map((tech, index)=>(
                                    <span key={index} className='px-2 py-1 mr-2 text-sm font-medium text-purple-900 rounded bg-neutral-900'>{tech}</span>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;
