import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "chess-insight",
    title: "ChessInsight",
    description:
      "A free chess analysis tool that helps players improve their game by providing professional-level analysis without premium subscriptions.",
    startDate: "Apr 2025",
    endDate: "May 2025",
    image: "/chessInsight.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "react-chessboard",
      "chess-api.com",
      "Tailwind CSS",
      "NextAuth",
      "Neon DB",
      "Prisma",
    ],
    detailedDescription:
      "ChessInsight is a free, open-source chess analysis tool designed to help players of all levels improve their game. It allows users to upload PGN files or fetch games from platforms like Chess.com and Lichess, providing professional-grade analysis powered by Stockfish via chess-api.com. The platform offers a rich set of features including move categorization, visual navigation, and game statistics, all accessible through a modern, responsive interface.",
    features: [
      {
        text: "Upload PGN or fetch games from Chess.com/Lichess",
        highlights: [
          { text: "Upload PGN", color: "text-primary" },
          { text: "Chess.com/Lichess", color: "text-primary" },
        ],
      },
      {
        text: "Analyze moves with Stockfish via chess-api.com",
        highlights: [{ text: "Stockfish", color: "text-primary" }],
      },
      {
        text: "Move categorization: Book, Brilliant, Blunder, etc.",
        highlights: [{ text: "Move categorization", color: "text-primary" }],
      },
      {
        text: "Move navigation with visual arrows",
        highlights: [{ text: "visual arrows", color: "text-primary" }],
      },
      {
        text: "Full game replay with progress control",
        highlights: [{ text: "game replay", color: "text-primary" }],
      },
      {
        text: "User login via Google",
        highlights: [{ text: "Google", color: "text-primary" }],
      },
      {
        text: "Save analyzed games and revisit anytime",
        highlights: [{ text: "Save analyzed games", color: "text-primary" }],
      },
      {
        text: "View statistics based on analyzed games",
        highlights: [{ text: "statistics", color: "text-primary" }],
      },
    ],
    github: "https://github.com/its-kumar-yash/chess-insight",
    liveUrl: "https://chess-insight.vercel.app",
  },
  {
    id: "deepstudy-ai",
    title: "DeepStudy AI",
    description:
      "An advanced research assistant that generates comprehensive reports based on a given topic using AI models and web searches.",
    startDate: "Mar 2025",
    endDate: "",
    image: "/deepStudyAI.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel AI SDK",
      "Groq",
      "OpenRouter",
      "Exa Search API",
    ],
    detailedDescription:
      "DeepStudy AI is a powerful research assistant that leverages advanced AI models like DeepSeek, Llama3, Gemma2, and Gemini to generate comprehensive, topic-relevant reports. By integrating the Exa Search API and an iterative research loop, it refines queries and compiles structured reports with high accuracy, reducing report generation time by 40% and boosting information precision by 35%.",
    features: [
      {
        text: "Fully customizable research flow",
        highlights: [{ text: "customizable", color: "text-primary" }],
      },
      {
        text: "Adaptive search queries for better results",
        highlights: [{ text: "Adaptive search", color: "green" }],
      },
      {
        text: "Seamless AI model integration (DeepSeek, Llama3, Gemma2, Gemini)",
        highlights: [{ text: "AI model", color: "text-primary" }],
      },
      {
        text: "Modular and scalable architecture",
        highlights: [{ text: "scalable", color: "text-primary" }],
      },
      {
        text: "Iterative research process for accuracy",
        highlights: [{ text: "Iterative research", color: "text-primary" }],
      },
      {
        text: "Web search powered by Exa AI API",
        highlights: [{ text: "Exa AI API", color: "text-primary" }],
      },
    ],
    github: "https://github.com/its-kumar-yash/deep-study-ai-agent",
    liveUrl: "https://deep-study-ai-agent-production.up.railway.app/",
  },
  {
    id: "socially",
    title: "Socially",
    description:
      "A full-stack social media application enabling users to connect, share posts, and interact in real-time.",
    startDate: "Mar 2025",
    endDate: "",
    image: "/socially.png",
    technologies: [
      "Next.js",
      "Prisma",
      "Postgres",
      "Tailwind CSS",
      "Cloudinary",
      "Clerk",
      "Shadcn",
    ],
    detailedDescription:
      "Socially is a modern social media platform built with Next.js and Prisma, offering a scalable and maintainable solution for user connectivity. Features include real-time notifications, post interactions, and file uploads via Cloudinary, all wrapped in a responsive design optimized with Tailwind CSS and Clerk for authentication.",
    features: [
      {
        text: "User authentication and authorization",
        highlights: [{ text: "authentication", color: "text-primary" }],
      },
      {
        text: "Profile management",
      },
      {
        text: "Post creation, editing, and deletion",
        highlights: [{ text: "Post creation", color: "text-primary" }],
      },
      {
        text: "Commenting and liking posts",
      },
      {
        text: "Real-time notifications",
        highlights: [{ text: "Real-time", color: "text-primary" }],
      },
      {
        text: "Responsive design",
      },
      {
        text: "File uploads with Cloudinary",
        highlights: [{ text: "Cloudinary", color: "text-primary" }],
      },
    ],
    github: "https://github.com/its-kumar-yash/socially",
    liveUrl: "https://socially-ivory.vercel.app/",
  },
  {
    id: "tomato-disease-detection",
    title: "TinyML Tomato Doctor",
    description:
      "A lightweight TinyML model for real-time tomato plant disease detection using leaf images, optimized for edge devices.",
    startDate: "Feb 2024",
    endDate: "Mar 2024",
    image: "/tinyml.png",
    technologies: ["TensorFlow", "TensorFlow Lite", "Edge Impulse", "Python"],
    detailedDescription:
      "This project develops a lightweight machine learning model using TinyML to detect tomato plant diseases from leaf images in real-time. Built with TensorFlow Lite and Edge Impulse, the model achieves 89.6% accuracy across 10 disease categories using the Plant Village dataset. Optimized for edge devices, it empowers farmers with on-site disease diagnosis, despite challenges like dataset limitations and connectivity issues.",
    features: [
      {
        text: "Real-time disease detection on edge devices",
        highlights: [{ text: "Real-time", color: "text-primary" }],
      },
      {
        text: "89.6% accuracy across 10 disease categories",
        highlights: [{ text: "89.6% accuracy", color: "text-primary" }],
      },
      {
        text: "Data augmentation to prevent overfitting",
        highlights: [{ text: "Data augmentation", color: "text-primary" }],
      },
      {
        text: "Model optimization via quantization",
        highlights: [{ text: "quantization", color: "text-primary" }],
      },
      {
        text: "Deployment via Edge Impulse app",
        highlights: [{ text: "Edge Impulse", color: "text-primary" }],
      },
      {
        text: "Potential for multi-crop expansion",
        highlights: [{ text: "multi-crop", color: "text-primary" }],
      },
    ],
    github:
      "https://github.com/its-kumar-yash/Tomato-Plant-Disease-Detection-Model",
    liveUrl: "https://studio.edgeimpulse.com/public/336735/live",
  },
  {
    id: "intellichat",
    title: "IntelliChat",
    description:
      "An AI-powered chatbot leveraging OpenAI for intelligent, multi-turn conversations with a responsive UI.",
    startDate: "Jul 2023",
    endDate: "Sep 2023",
    image: "/intellichat.png",
    technologies: [
      "React.js",
      "CSS Modules",
      "OpenAI API",
      "Groq",
      "Node.js",
      "Express",
      "React Router",
      "Axios",
      "Firebase",
    ],
    detailedDescription:
      "IntelliChat is an advanced chatbot powered by OpenAI, capable of engaging in multi-turn conversations with context retention. Built with React.js and Node.js, it features a clean, responsive UI, Firebase authentication, and a real-time database for user data and feedback, making it a robust platform for interactive AI conversations.",
    features: [
      {
        text: "Real-time chat interface",
        highlights: [{ text: "Real-time", color: "text-primary" }],
      },
      {
        text: "AI-powered responses via OpenAI API",
        highlights: [{ text: "OpenAI API", color: "text-primary" }],
      },
      {
        text: "Conversational AI with context retention",
        highlights: [{ text: "Conversational AI", color: "text-primary" }],
      },
      {
        text: "Responsive and clean UI",
        highlights: [{ text: "Responsive UI", color: "text-primary" }],
      },
      {
        text: "Firebase authentication and database",
        highlights: [{ text: "Firebase", color: "text-primary" }],
      },
      {
        text: "User feedback and query submission",
        highlights: [{ text: "feedback", color: "text-primary" }],
      },
    ],
    github: "https://github.com/its-kumar-yash/react-ai-chatbot-app",
    liveUrl: "https://intellichat-bot.vercel.app/",
  },
  {
    id: "resumexpert",
    title: "ResumeXpert",
    description:
      "A web application for generating customized resumes with live preview and download functionality.",
    startDate: "Jun 2023",
    endDate: "Jul 2023",
    image: "/resumexpert.png",
    technologies: [
      "React.js",
      "CSS Modules",
      "React-To-Print",
      "Vercel",
      "Firebase",
    ],
    detailedDescription:
      "ResumeXpert is a user-friendly web application that enables users to create, customize, and download professional resumes in minutes. Built with React.js, it offers live preview, drag-and-drop functionality, and Firebase Firestore for data storage, ensuring a seamless and responsive experience for users building their resumes.",
    features: [
      {
        text: "Live resume preview",
        highlights: [{ text: "Live preview", color: "text-primary" }],
      },
      {
        text: "Drag-and-drop functionality",
        highlights: [{ text: "Drag-and-drop", color: "text-primary" }],
      },
      {
        text: "Support for PDF download",
        highlights: [{ text: "PDF download", color: "text-primary" }],
      },
      {
        text: "Editable resume sections",
        highlights: [{ text: "Editable", color: "text-primary" }],
      },
      {
        text: "Responsive and mobile-friendly design",
      },
      {
        text: "User feedback via contact form",
        highlights: [{ text: "feedback", color: "text-primary" }],
      },
    ],
    github: "https://github.com/its-kumar-yash/react-resume-builder",
    liveUrl: "https://resumexpert.vercel.app/",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg mx-auto">
            A collection of my recent work showcasing my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
