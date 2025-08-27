import React from "react";
import about from "./assets/about.jpeg";
import { motion } from "framer-motion";
import { Clock, Code, CodeXml, Palette, Target } from "lucide-react";
function About() {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h1 className="my-20 text-4xl text-center ">What you can expect?</h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, y: -100 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:mt-16"
        >
          <div className="justify-center block gap-10 my-0 lg:flex lg:my-8">
            <div className="my-10 lg:my-0">
              <div className="flex flex-col items-center gap-6 p-8 transition-transform duration-300 border shadow-lg w-80 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border-white/20 rounded-2xl h-96 hover:shadow-purple-700/30">
                <div className="h-2/5">
                  <Target className="text-purple-700 size-20 drop-shadow-md" />
                </div>
                <h3 className="text-xl font-semibold text-center text-white">
                  Business-Focused Results
                </h3>
                <p className="text-sm leading-relaxed text-center text-gray-300">
                  I build websites and applications with your business goals in
                  mind — whether it’s generating leads, improving conversions,
                  or enhancing brand presence. Every project is crafted to
                  deliver measurable impact.
                </p>
              </div>
            </div>
            <div className="my-10 lg:my-0">
              <div className="flex flex-col items-center gap-6 p-8 transition-transform duration-300 border shadow-lg w-80 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border-white/20 rounded-2xl h-96 hover:shadow-purple-700/30">
                <div className="h-2/5">
                  <Palette className="text-purple-700 size-20 drop-shadow-md" />
                </div>
                <h3 className="text-xl font-semibold text-center text-white">
                  Modern & Responsive Design
                </h3>
                <p className="text-sm leading-relaxed text-center text-gray-300">
                  Your website will look stunning on all devices — desktop,
                  tablet, and mobile. I focus on modern UI/UX design with smooth
                  animations using Framer Motion, creating an engaging and
                  interactive experience for your users.
                </p>
              </div>
            </div>
            <div className="my-10 lg:my-0">
              <div className="flex flex-col items-center gap-6 p-8 transition-transform duration-300 border shadow-lg w-80 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border-white/20 rounded-2xl h-96 hover:shadow-purple-700/30">
                <div className="h-2/5">
                  <CodeXml className="text-purple-700 size-20 drop-shadow-md" />
                </div>
                <h3 className="text-xl font-semibold text-center text-white">
                  End-to-End Development
                </h3>
                <p className="text-sm leading-relaxed text-center text-gray-300">
                  From concept to deployment, I handle every step of development
                  — front-end, back-end, and database integration. You’ll get a
                  fully functional, optimized product ready to launch.
                </p>
              </div>
            </div>
            <div className="my-10 lg:my-0">
              <div className="flex flex-col items-center gap-6 p-8 transition-transform duration-300 border shadow-lg w-80 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border-white/20 rounded-2xl h-96 hover:shadow-purple-700/30">
                <div className="h-2/5">
                  <Clock className="text-purple-700 size-20 drop-shadow-md" />
                </div>
                <h3 className="text-xl font-semibold text-center text-white">
                  Clear Communication & On-Time Delivery
                </h3>
                <p className="text-sm leading-relaxed text-center text-gray-300">
                  I prioritize transparent communication and timely updates
                  throughout the project. You’ll always know the progress, and
                  your project will be delivered on schedule — no surprises,
                  just results.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
