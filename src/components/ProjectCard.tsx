"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image?: string;
  technologies: string[];
  detailedDescription: string;
  features: Array<{
    text: string;
    highlights?: Array<{
      text: string;
      color: string;
    }>;
  }>;
  github?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const renderHighlightedText = (item: any) => {
    if (!item.highlights || item.highlights.length === 0) {
      return item.text;
    }

    let result = [];
    let lastIndex = 0;

    // Sort highlights by their position in the text
    const sortedHighlights = [...item.highlights].sort(
      (a, b) => item.text.indexOf(a.text) - item.text.indexOf(b.text)
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="group h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md dark:hover:shadow-purple-900/10 !py-0 !gap-0 justify-between">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <Badge variant={"outline"} className="text-xs">
                    {`${project.startDate} ${
                      project.endDate !== "" ? `- ${project.endDate}` : ""
                    } `}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge variant={"outline"} key={tech} className="px-2 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0">
            <Button onClick={() => setIsOpen(true)} variant="default">
              View Details
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl sm:max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              <Badge className="text-xs">
                {`${project.startDate} ${
                  project.endDate !== "" ? `- ${project.endDate}` : ""
                } `}
              </Badge>
            </DialogDescription>
          </DialogHeader>

          {project.image && (
            <div className="relative w-full h-64 sm:h-80 rounded-md overflow-hidden my-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Overview</h4>
              <p className="text-muted-foreground">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Key Features</h4>
              <ul className="space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-2.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      {renderHighlightedText(feature)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <h4 className="w-full text-lg font-medium mb-0">Technologies</h4>
              {project.technologies.map((tech) => (
                <Badge key={tech} className="px-2 py-1">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              )}

              {project.liveUrl && (
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
