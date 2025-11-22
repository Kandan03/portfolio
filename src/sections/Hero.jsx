"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const fullName = "Somaskandan";
  const roles = useMemo(() => ["Full Stack Developer", "Creative Problem Solver", "UI/UX Enthusiast", "Tech Innovator"], []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentRole = "";

    const typeRole = () => {
      const current = roles[currentIndex];

      if (isDeleting) {
        currentRole = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentRole = current.substring(0, charIndex + 1);
        charIndex++;
      }

      setDisplayText(currentRole);

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => (isDeleting = true), 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % roles.length;
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(typeRole, speed);
    };

    typeRole();
  }, [roles, isMounted]);

  const transition = {
    duration: 0.8,
    delay: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const techIcons = [
    { name: "React", emoji: "⚛️", delay: 0 },
    { name: "Next.js", emoji: "▲", delay: 0.2 },
    { name: "Node.js", emoji: "🟢", delay: 0.4 },
    { name: "TypeScript", emoji: "📘", delay: 0.6 },
  ];

  return (
    <div
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between p-3 min-h-screen overflow-hidden"
    >
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {techIcons.map((tech, index) => {
            const positions = [
              { x: "10%", y: "20%" },
              { x: "80%", y: "30%" },
              { x: "20%", y: "70%" },
              { x: "90%", y: "80%" },
            ];
            const pos = positions[index] || positions[0];
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  delay: tech.delay,
                  ease: "easeInOut",
                }}
                className="absolute text-4xl"
                style={{
                  left: pos.x,
                  top: pos.y,
                }}
              >
                {tech.emoji}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Left Image */}
      <div className="max-w-md w-full hidden md:block relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={transition}
          className="w-full hidden md:block"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/heroVid.gif"
              width={100}
              height={100}
              alt="Hero animation"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Center Content */}
      <div className="max-w-2xl space-y-6 text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-2"
        >
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-500 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl mt-20 md:mt-0 md:text-3xl lg:text-5xl xl:text-6xl md:px-5 font-bold leading-tight"
        >
          Hello! I&apos;m{" "}
          <motion.span
            className="font-orbitron bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {fullName}
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-lg lg:text-2xl md:px-5 font-semibold text-gray-700 dark:text-gray-200 min-h-8"
        >
          <span className="inline-flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <span className="font-orbitron bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-purple-600 ml-1"
              />
            </span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-sm xl:text-lg md:px-5 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          Passionate about building innovative web solutions. Let&apos;s create
          something amazing together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row md:px-5 gap-4 pt-6 items-center justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" size="lg" className="w-full sm:w-auto group" asChild>
              <Link href="#contact">
                Get in Touch
                <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 pt-8"
        >
          {[
            { label: "Projects", value: "50+" },
            { label: "Experience", value: "3+ Years" },
            { label: "Technologies", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <p className="text-2xl font-bold font-orbitron bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="max-w-md w-full hidden md:block relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: -20 }}
          transition={transition}
          className="w-full hidden md:block"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Image
              src="/heroVid.gif"
              width={100}
              height={100}
              alt="Hero animation"
              className="w-full h-auto rounded-lg shadow-lg transform scale-x-[-1]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
