"use client";

import { ExternalLink, Github, ArrowRight, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const LANGUAGE_MAP = {
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  Python: "Python",
  Java: "Java",
  "C++": "C++",
  "C#": "C#",
  Go: "Go",
  Rust: "Rust",
  PHP: "PHP",
  Ruby: "Ruby",
  Swift: "Swift",
  Kotlin: "Kotlin",
  HTML: "HTML",
  CSS: "CSS",
  SCSS: "SCSS",
  Vue: "Vue.js",
  React: "React",
  Angular: "Angular",
  Svelte: "Svelte",
  "Jupyter Notebook": "Jupyter",
  Shell: "Shell",
  Dockerfile: "Docker",
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=all`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const repos = await response.json();

        const processedProjects = await Promise.all(
          repos
            .filter((repo) => !repo.fork && repo.description)
            .slice(0, 8) 
            .map(async (repo) => {
              let languages = [];
              try {
                const langResponse = await fetch(repo.languages_url);
                if (langResponse.ok) {
                  const langData = await langResponse.json();
                  languages = Object.keys(langData)
                    .slice(0, 5)
                    .map((lang) => LANGUAGE_MAP[lang] || lang);
                }
              } catch (err) {
                console.error(`Failed to fetch languages for ${repo.name}:`, err);
              }

              const imageUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;

              return {
                id: repo.id,
                title: repo.name
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" "),
                description: repo.description || "No description available.",
                image: imageUrl,
                tech: languages.length > 0 ? languages : [repo.language || "Code"],
                github: repo.html_url,
                live: repo.homepage || null,
                featured: repo.stargazers_count > 5 || repo.topics.includes("portfolio") || repo.topics.includes("showcase"),
                stars: repo.stargazers_count,
              };
            })
        );

        setProjects(processedProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    if (GITHUB_USERNAME && GITHUB_USERNAME !== "your-username") {
      fetchProjects();
    } else {
      setLoading(false);
      setError("Please configure your GitHub username in the Projects component");
    }
  }, []);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div id="projects" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-4">
            My <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            A collection of projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Loading projects from GitHub...</span>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-destructive mb-4">{error}</p>
            <p className="text-muted-foreground text-sm">
              Please check your GitHub username configuration in the Projects component.
            </p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/50 to-transparent" />
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="px-3 py-1 bg-background/80 backdrop-blur-sm border rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="absolute top-4 right-4 flex gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live ${project.title} project`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium hover:border-blue-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      variant="default"
                      className="group/btn"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View live ${project.title} project`}>
                        View Project
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found. Please check your GitHub username configuration.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              Let&apos;s Work Together
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
