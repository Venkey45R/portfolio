import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "eSubhaleka",
      duration: "Jan 2023 – Apr 2023",
      details: [
        "Designed and developed responsive wedding invitation templates using HTML, CSS, and JavaScript.",
        "Improved cross-browser compatibility and maintained clean, reusable code.",
        "Collaborated with designers to transform creative ideas into interactive web templates.",
        "Delivered work on tight timelines with attention to design quality and detail.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 text-white">
      <div className="max-w-5xl px-6 mx-auto">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-4xl text-center"
        >
          Experience
        </motion.h1>
        <div className="relative ml-4 border-l-2 border-purple-600">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-6"
            >
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full -left-4 ring-4 ring-neutral-950">
                <Briefcase className="w-4 h-4 text-white" />
              </span>
              <div className="p-6 transition-all shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:shadow-purple-700/30">
                <div className="flex flex-col mb-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-purple-300">
                    {exp.duration}
                  </span>
                </div>
                <p className="mb-4 font-medium text-purple-400">
                  {exp.company}
                </p>
                <ul className="space-y-2 list-disc list-inside text-neutral-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
