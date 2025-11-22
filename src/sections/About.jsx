"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Palette, Heart, Award, Target } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    { name: "Frontend", icon: Palette, color: "from-blue-500 to-cyan-500" },
    { name: "Backend", icon: Code, color: "from-purple-500 to-pink-500" },
    { name: "Full Stack", icon: Rocket, color: "from-orange-500 to-red-500" },
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
    "Python", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git"
  ];

  const stats = [
    { label: "Projects", value: "50+", icon: Target },
    { label: "Experience", value: "3+", icon: Award },
    { label: "Passion", value: "100%", icon: Heart },
  ];

  return (
    <div id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-4">
            About <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-card border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-bold font-orbitron mb-4 text-primary">
                Who I Am
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I&apos;m a passionate Full Stack Developer with a love for creating
                innovative web solutions that make a difference. With expertise in both
                frontend and backend technologies, I bring ideas to life through clean,
                efficient, and scalable code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or working on creative side projects
                that challenge my skills and expand my knowledge.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-linear-to-br ${skill.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-sm">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-card border rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold font-orbitron mb-6 text-primary">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium hover:border-blue-500/40 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card border rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold font-orbitron text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
            My Philosophy
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I believe in writing code that&apos;s not just functional, but also maintainable,
            scalable, and beautiful. Every project is an opportunity to learn, grow, and
            create something meaningful that solves real-world problems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
