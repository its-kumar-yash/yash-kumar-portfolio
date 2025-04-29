"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  title: string;
  achievements: Array<{
    text: string;
    highlights?: Array<{
      text: string;
      color: string;
    }>;
  }>;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Zelo Innovations Pvt. Ltd.",
    location: "Delhi, India",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    title: "Software Engineer Intern",
    achievements: [
      {
        text: "Built a RAG pipeline with hybrid search, improving retrieval accuracy by 20%, leading to 50% fewer failed queries.",
        highlights: [
          {
              text: "RAG pipeline",
              color: "text-primary"
          },
          {
            text: "50%",
            color: "text-primary"
          },
          {
            text: "20%",
            color: "text-primary"
          }
        ]
      },
      {
        text: "Developed a Mock Server using Postman and Mockoon to streamline API testing for the frontend.",
        highlights: [
          {
            text: "Mock Server",
            color: "text-primary"
          },
          {
            text: "Postman",
            color: "text-primary"
          },
          {
            text: "Mockoon",
            color: "text-primary"
          }
        ]

      },
      {
        text: "Revamped the frontend by collaborating with the design team, incorporating dynamic animations."
      },
      {
        text: "Resolved 30+ bugs to improve user experience and application stability.",
        highlights: [
          {
            text: "30+",
            color: "text-primary"
          }
        ]
      },
    ],
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Mockoon",
      "Postman",
      "Python",
      "ChromeDB",
      "Qdrant",
      "LangChain",
      "CohereAPI"
    ],
  },
];

export default function ExperienceSection() {

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to render text with highlights
  const renderHighlightedText = (item : any) => {
    if (!item.highlights || item.highlights.length === 0) {
      return item.text;
    }

    let result = [];
    let lastIndex = 0;

    // Sort highlights by their position in the text
    const sortedHighlights = [...item.highlights].sort((a, b) => 
      item.text.indexOf(a.text) - item.text.indexOf(b.text)
    );

    sortedHighlights.forEach((highlight, i) => {
      const highlightIndex = item.text.indexOf(highlight.text, lastIndex);
      
      if (highlightIndex > lastIndex) {
        // Add the text before the highlight
        result.push(
          <React.Fragment key={`text-${i}`}>
            {item.text.substring(lastIndex, highlightIndex)}
          </React.Fragment>
        );
      }
      
      // Add the highlighted text
      result.push(
        <span key={`highlight-${i}`} className={highlight.color}>
          {highlight.text}
        </span>
      );
      
      lastIndex = highlightIndex + highlight.text.length;
    });

    // Add any remaining text after the last highlight
    if (lastIndex < item.text.length) {
      result.push(
        <React.Fragment key="text-end">
          {item.text.substring(lastIndex)}
        </React.Fragment>
      );
    }

    return result;
  };

  return (
    <section id="experience" className="py-20 !bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md dark:hover:shadow-purple-900/20 !gap-3">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline">
                      {exp.startDate} - {exp.endDate}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-primary">
                    {exp.title}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-2.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span className="text-muted-foreground text-justify">
                          {renderHighlightedText(achievement)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="flex flex-wrap gap-2 px-6 pt-2 pb-4">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}