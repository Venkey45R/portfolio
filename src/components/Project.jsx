import React from "react";
import huddle from "../assets/huddle.png";
import II from "../assets/II.png";
import WA from "../assets/WA.png";
import SS from "../assets/SS.png";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
function Project() {
  const Projects = [
    {
      title: "Huddle - Real Time Chat Application",
      image: huddle,
      description:
        "A mobile responsive real-time chat app built using Socket.IO and MERN stack, designed for seamless conversations that support both light mode and dark mode",
      points: [
        "Enabled real-time messaging with WebSockets and event-driven architecture",
        "Implemented user authentication with JWT and session persistence",
        "Optimized for fast, low-latency communication, even with multiple concurrent users",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Tailwind CSS",
      ],
      cta: "https://chatapp-ob8g.onrender.com/",
    },
    {
      title: "Invest Insight – Financial Health Tracker",
      image: II,
      description:
        "A MERN stack web app that helps users track their income, savings, and investments while offering personalized financial health insights.",
      points: [
        "Designed secure user authentication with JWT & protected routes",
        "Built interactive dashboards with Chart.js to visualize asset allocation, savings ratio, and more",
        "Provided personalized recommendations to improve financial health",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Chart.js",
        "JWT",
        "Tailwind CSS",
      ],
      cta: "https://github.com/Venkey45R/invest-inshight",
    },
    {
      title: "Weather App – Real-Time Forecasts",
      image: WA,
      description:
        "A lightweight React application delivering real-time weather forecasts using public APIs.",
      points: [
        "Integrated GeoCode API to fetch user location dynamically",
        "Pulled real-time weather data from Weatherbit API with Axios",
        "Handled loading states & error handling for smooth UX",
      ],
      technologies: [
        "React",
        "Axios",
        "Weatherbit API",
        "GeoCode API",
        "Tailwind CSS",
      ],
      cta: "https://github.com/Venkey45R/weather-app",
    },
    {
      title: "Skill Sync – Developer Collaboration Platform",
      image: SS,
      description:
        "A full-stack project management and collaboration tool for developers and teams.",
      points: [
        "Implemented role-based access control for project creators and contributors",
        "Integrated advanced packages like Multer for file uploads, Nodemailer for email notifications, Framer Motion for UI animations, Bcrypt for secure password hashing",
        "Focused on scalable architecture and clean UI animations for better team workflows",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Mongo DB",
        "Framer Motion",
        "Multer",
        "Node mailer",
        "Bcrypt",
        "Tailwind CSS",
      ],
      cta: "https://github.com/Venkey45R/skillSync",
    },
  ];

  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl text-center"
      >
        Projects
      </motion.h1>
      <div className="">
        {Projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-8 px-6 mb-16 transition-transform duration-300 shadow-lg hover:shadow-purple-700/30 lg:flex-row lg:justify-center bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border-white/20 rounded-2xl"
            >
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                className="w-full mt-4 shadow-lg lg:w-1/3 rounded-2xl hover:scale-105 lg:mt-0"
              />
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full p-2 shadow-lg lg:p-6 lg:w-2/3 rounded-2xl hover:shadow-xl"
              >
                <h3 className="mb-4 text-2xl font-bold text-purple-400">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed text-neutral-300">
                  {project.description}
                </p>
                <ul className="mb-6 space-y-2 list-disc list-inside text-neutral-400">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="leading-snug">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 my-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-purple-200 transition-colors border border-purple-700 rounded-full bg-purple-900/30 hover:bg-purple-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 px-5 py-1.5 text-sm font-semibold text-purple-300 transition-colors border border-purple-600 rounded-full shadow-md hover:bg-purple-600/20"
                  >
                    View Project <MoveRight />
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
