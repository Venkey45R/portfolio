import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sunil Kumar M",
    role: "Java Developer",
    text: "Working with Venkatesh was an amazing experience. He understood my requirements clearly and delivered a clean, professional website much faster than I expected. His attention to detail and focus on making the site user-friendly really stood out. I’m very happy with the end result.",
  },
  {
    name: "Dhanis Ahmed K",
    role: "Member, Microsoft Campus Club",
    text: "Venkatesh not only built the website exactly as I envisioned but also suggested improvements that made it even better. He communicated with me regularly, gave updates, and ensured the project stayed on track. The final site was responsive, modern, and goal-oriented — I would definitely recommend him.",
  },
  {
    name: "Saravana SM",
    role: "AWS Cloud Developer",
    text: "What I liked most about working with Venkatesh was his professionalism. He was quick to respond to my queries, delivered everything on time, and made sure the website aligned perfectly with my goals. The whole process felt smooth and hassle-free, and the final product exceeded my expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Testimonials</h2>
        <div className="justify-between block gap-16 lg:flex">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              className="flex flex-col p-6 my-8 transition-all shadow-lg lg:my-0 bg-gradient-to-b from-white/10 to-white/5 hover:shadow-purple-700/30 backdrop-blur-md border-white/20 rounded-2xl hover:shadow-xl"
            >
              <h4 className="relative text-xl font-bold -top-8 -left-8">
                <Quote className="size-12" />
              </h4>
              <p className="relative mb-6 leading-relaxed text-neutral-300 h-5/6 -top-6">
                “{t.text}”
              </p>
              <h4 className="flex justify-end text-lg font-semibold text-purple-400 h-1/6">
                – {t.name}
              </h4>
              <p className="flex justify-end text-xs text-purple-400">
                {t.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
