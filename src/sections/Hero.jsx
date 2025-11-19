import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = {
    duration: 0.8,
    delay: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between p-3"
    >
      <div className="max-w-md w-full hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={transition}
          className="w-full hidden md:block"
        >
          <Image
            src="/heroVid.gif"
            width={100}
            height={100}
            alt="Hero animation"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
      <div className="max-w-2xl space-y-6 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl mt-20 md:mt-0 md:text-3xl lg:text-5xl xl:text-6xl md:px-5 font-bold leading-tight"
        >
          Hello! I&apos;m{" "}
          <span className="font-orbitron bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Somaskandan
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-lg lg:text-2xl md:px-5 font-semibold text-gray-700 dark:text-gray-200"
        >
          Full Stack Developer & Creative Problem Solver
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
          <Button variant="default" size="lg" className="w-full sm:w-auto">
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View Projects
          </Button>
        </motion.div>
      </div>
      <div className="max-w-md w-full hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: -20 }}
          transition={transition}
          className="w-full hidden md:block"
        >
          <Image
            src="/heroVid.gif"
            width={100}
            height={100}
            alt="Hero animation"
            className="w-full h-auto rounded-lg shadow-lg transform scale-x-[-1]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
