"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Award } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EducationSection() {
  const education: Education[] = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Netaji Subhas University of Technology, Delhi",
      duration: "2021 - 2025",
      description:
        "CGPA: 8.63/10. Coursework includes Object-Oriented Programming, Data Structures & Algorithms, Embedded Systems, DBMS, Operating System, Machine Learning.",
    },
    {
      degree: "Senior Secondary",
      institution: "Kendriya Vidyalaya, Delhi",
      duration: "2020",
      description: "Graduated with 93.4% marks.",
    },
    {
      degree: "Secondary",
      institution: "Kendriya Vidyalaya, Delhi",
      duration: "2018",
      description: "Graduated with 86.4% marks.",
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "Graph Camp Mentee",
      issuer: "Codeforces Master",
      date: "2024",
      description:
        "Selected as mentee out of 40000+ students, solved 3 hard problems on shortest paths, featured in the Hall of Fame.",
    },
    {
      title: "GSSoC Contributor",
      issuer: "GSSoC",
      date: "2024",
      description:
        "Contributed to 10+ repositories, ranked among the top 200 contributors.",
    },
    {
      title: "Hacktoberfest Participant",
      issuer: "Hacktoberfest",
      date: "2023",
      description:
        "Successfully completed Hacktoberfest'23 with 5+ contributions to Open Source projects.",
    },
    {
      title: "HackXtreme 2023",
      issuer: "HackXtreme",
      date: "2023",
      description:
        "Successfully concluded the hackathon, placing my team in the top 10% of participants.",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Education & Achievements</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and notable accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6 space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-medium">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group !gap-0 h-full border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md dark:hover:shadow-purple-900/10">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.degree}</CardTitle>
                        <Badge variant="outline">{item.duration}</Badge>
                      </div>
                      <p className="text-sm text-primary">
                        {item.institution}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6 space-x-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-medium">Achievements</h3>
            </div>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full !gap-0 border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md dark:hover:shadow-purple-900/10">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <Badge variant="outline">{item.date}</Badge>
                      </div>
                      <p className="text-sm text-primary">
                        {item.issuer}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
