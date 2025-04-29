"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, Code, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col space-y-8 md:space-y-8">
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-muted-foreground text-italic font-mono"
            >
              Learn. Build. Repeat.
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Yash Kumar
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Fullstack Developer & AI Enthusiast
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 max-w-2xl"
          >
            <p className="text-muted-foreground leading-relaxed text-justify">
              I'm a <span className="text-purple-500">Fullstack Developer</span>{" "}
              and <span className="text-purple-500">AI Enthusiast</span> based
              in New Delhi, passionate about building intelligent, high-impact
              solutions. I specialize in developing robust applications with and
              crafting AI-driven systems that solve real-world problems. Beyond
              coding, I enjoy exploring new technologies and sharpening my
              problem-solving skills through competitive programming. Always
              learning, always building.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowDownCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-background/70 !hover:bg-accent/70"
              >
                <a
                  href="https://github.com/its-kumar-yash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://leetcode.com/its-kumar-yash/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="mr-2 h-4 w-4" /> LeetCode
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
