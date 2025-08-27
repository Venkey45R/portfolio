import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kcp5u6d",
        "template_1rp822f",
        form.current,
        "S5c9kHsADu9cIyQ_W"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setName("");
          setMail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <section className="py-20 border-b border-neutral-900">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-white">Get In Touch</h1>
        <p className="max-w-xl mx-auto text-neutral-400">
          Have a project in mind, or just want to say hello? Fill out the form
          below and I’ll get back to you soon.
        </p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center"
      >
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl p-8 border shadow-lg bg-white/10 backdrop-blur-md border-white/20 rounded-2xl"
        >
          <div className="relative mb-6">
            <User className="absolute text-purple-400 left-3 top-3" size={20} />
            <input
              input
              type="text"
              placeholder="Your Name"
              value={name}
              name="user_name"
              className="w-full py-3 pl-10 pr-4 text-white outline-none rounded-xl bg-neutral-900 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-6">
            <Mail className="absolute text-purple-400 left-3 top-3" size={20} />
            <input
              type="email"
              placeholder="Your Email"
              value={mail}
              name="user_email"
              className="w-full py-3 pl-10 pr-4 text-white outline-none rounded-xl bg-neutral-900 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-6">
            <MessageSquare
              className="absolute text-purple-400 left-3 top-3"
              size={20}
            />
            <textarea
              rows={6}
              placeholder="Write your message..."
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full py-3 pl-10 pr-4 text-white outline-none rounded-xl bg-neutral-900 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 font-semibold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
            >
              🚀 Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
