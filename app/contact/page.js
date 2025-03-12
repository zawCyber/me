"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ContactPage = () => {
  const [scale, setScale] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleScroll = (event) => {
      setScale((prev) => Math.min(1.1, Math.max(0.9, prev + (event.deltaY > 0 ? -0.05 : 0.05))));
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white flex flex-col items-center px-4 sm:px-6 py-12">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-wrap justify-between px-6 sm:px-10 py-4 shadow-lg">
        <div className="text-lg sm:text-xl font-bold text-yellow-400">Reza Ryandi Maulana</div>
        <ul className="hidden sm:flex space-x-4">
          {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map((item, index) => (
            <li key={index} className="hover:text-yellow-400 transition cursor-pointer">{item}</li>
          ))}
        </ul>
      </nav>

      {/* Profile Section */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } : {}}
        className="text-center mt-20 sm:mt-24 mb-8 sm:mb-10"
      >
        <motion.div className="relative inline-block" animate={{ scale }}>
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <span className="absolute -bottom-2 right-0 bg-yellow-500 text-black p-1 rounded-full text-xs">👋</span>
        </motion.div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">
          Hello I'm <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: "easeOut" } } : {}}
            className="text-yellow-400"
          >Reza Ryandi Maulana</motion.span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mt-2 px-4 sm:px-0">
          I'm a <span className="font-semibold text-yellow-400">full-stack developer</span> with <span className="font-bold">2 years</span> of experience.<br />
          I enjoy building <i>sites & apps</i>. My focus is <span className="underline text-yellow-400">React (Next.js)</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactPage;
