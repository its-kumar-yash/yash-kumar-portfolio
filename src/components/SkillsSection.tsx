"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Terminal,
  BrainCircuit,
  Wrench,
  Infinity,
  Layers,
  FileCode,
  FileJson,
  PaintBucket,
  Server,
  FlaskConical,
  Activity,
  Braces,
  Cpu,
  BarChart,
  BoxSelect,
  Binary,
  Workflow,
  GitBranch,
  MessageSquareCode,
  BookOpen,
  ScrollText,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

// Define the skill map with categories and skills
const SKILL_DATA = {
  Frontend: [
    {
      name: "React.js",
      icon: (
        <Image
          src="/reactjs.svg"
          width={36}
          height={36}
          alt="reactjs"
          className=""
        />
      ),
    },
    {
      name: "Next.js",
      icon: (
        <Image
          src="/nextjs.svg"
          width={36}
          height={36}
          alt="nextjs"
          className=""
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <Image
          src="/typescript.svg"
          width={36}
          height={36}
          alt="ts"
          className=""
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <Image
          src="/javascript.svg"
          width={36}
          height={36}
          alt="js"
          className=""
        />
      ),
    },
    {
      name: "HTML",
      icon: (
        <Image src="/html.svg" width={40} height={40} alt="html" className="" />
      ),
    },
    {
      name: "CSS",
      icon: (
        <Image src="/css.svg" width={40} height={40} alt="css" className="" />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <Image
          src="/tailwindcss.svg"
          width={40}
          height={40}
          alt="tailwindcss"
          className=""
        />
      ),
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: (
        <Image src="/node.svg" width={40} height={40} alt="node" className="" />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <Image
          src="/firebase.svg"
          width={40}
          height={40}
          alt="firebase"
          className=""
        />
      ),
    },
    {
      name: "Express.js",
      icon: (
        <Image
          src="/express.svg"
          width={40}
          height={40}
          alt="express"
          className=""
        />
      ),
      darkIcon: (
        <Image
          src="/express-dark.svg"
          width={40}
          height={40}
          alt="express"
          className=""
        />
      ),
    },
    {
      name: "Flask",
      icon: (
        <Image
          src="/flask-dark.svg"
          width={45}
          height={45}
          alt="flask"
          className=""
        />
      ),
      darkIcon: (
        <Image
          src="/flask.svg"
          width={45}
          height={45}
          alt="flask"
          className=""
        />
      ),
    },
    {
      name: "FastAPI",
      icon: (
        <Image
          src="/fastapi.svg"
          width={40}
          height={40}
          alt="fastapi"
          className=""
        />
      ),
    },
  ],
  Database: [
    {
      name: "SQL",
      icon: (
        <Image src="/sql.svg" width={70} height={70} alt="sql" className="" />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <Image
          src="/mongodb.svg"
          width={50}
          height={50}
          alt="mongodb"
          className=""
        />
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <Image
          src="/postgres.svg"
          width={50}
          height={50}
          alt="postgres"
          className=""
        />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <Image
          src="/firebase.svg"
          width={40}
          height={40}
          alt="firebase"
          className=""
        />
      ),
    },
    {
      name: "Supabase",
      icon: (
        <Image
          src="/supabase.png"
          width={40}
          height={40}
          alt="supabase"
          className=""
        />
      ),
    },
    {
      name: "Neon",
      icon: (
        <Image
          src="/neondb.svg"
          width={40}
          height={40}
          alt="neondb"
          className=""
        />
      ),
    },
  ],
  Languages: [
    {
      name: "C/C++",
      icon: (
        <Image
          src="/cplusplus.svg"
          width={45}
          height={45}
          alt="c"
          className=""
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <Image
          src="/python.svg"
          width={45}
          height={45}
          alt="python"
          className=""
        />
      ),
    },
    // {
    //   name: "TypeScript",
    //   icon: (
    //     <Image
    //       src="/typescript.svg"
    //       width={36}
    //       height={36}
    //       alt="ts"
    //       className=""
    //     />
    //   ),
    // },
    {
      name: "JavaScript",
      icon: (
        <Image
          src="/javascript.svg"
          width={36}
          height={36}
          alt="js"
          className=""
        />
      ),
    },
    {
      name: "SQL",
      icon: (
        <Image src="/sql.svg" width={70} height={70} alt="sql" className="" />
      ),
    },
  ],
  "ML & Data Science": [
    {
      name: "TensorFlow",
      icon: (
        <Image
          src="/tensorflow.svg"
          width={40}
          height={40}
          alt="tensorflow"
          className=""
        />
      ),
    },
    {
      name: "Matplotlib",
      icon: (
        <Image
          src="/matplotlib.svg"
          width={40}
          height={40}
          alt="matplotlib"
          className=""
        />
      ),
    },
    {
      name: "Pandas",
      icon: (
        <Image
          src="/pandas.svg"
          width={40}
          height={40}
          alt="pandas"
          className=""
        />
      ),
    },
    {
      name: "NumPy",
      icon: (
        <Image
          src="/numpy.svg"
          width={40}
          height={40}
          alt="numpy"
          className=""
        />
      ),
    },
    {
      name: "Scikit-Learn",
      icon: (
        <Image
          src="/sckit.svg"
          width={60}
          height={60}
          alt="sckit"
          className=""
        />
      ),
    },
    {
      name: "OpenCV",
      icon: (
        <Image
          src="/opencv.svg"
          width={40}
          height={40}
          alt="opencv"
          className=""
        />
      ),
    },
    {
      name: "PyTorch",
      icon: (
        <Image
          src="/pytorch.svg"
          width={40}
          height={40}
          alt="pytorch"
          className=""
        />
      ),
    },
  ],
  Tools: [
    {
      name: "Git/GitHub",
      icon: (
        <Image
          src="/github.svg"
          width={50}
          height={50}
          alt="github"
          className=""
        />
      ),
    },
    {
      name: "Postman",
      icon: (
        <Image
          src="/postman.svg"
          width={50}
          height={50}
          alt="postman"
          className=""
        />
      ),
    },
    {
      name: "Docker",
      icon: (
        <Image
          src="/docker.svg"
          width={50}
          height={50}
          alt="docker"
          className=""
        />
      ),
    },
    {
      name: "Jupyter Notebook",
      icon: (
        <Image
          src="/jupyter.svg"
          width={40}
          height={40}
          alt="jupyter"
          className=""
        />
      ),
    },
    {
      name: "Vercel AI SDK",
      icon: <Image
      src="/vercel-dark.svg"
      width={40}
      height={40}
      alt="vercel"
      className=""
    />,
    darkIcon: <Image
      src="/vercel.svg"
      width={40}
      height={40}
      alt="vercel"
      className=""
    />,
    },
  ],
};

// Define the category icons and colors
const CATEGORY_ICONS = {
  Frontend: {
    icon: <Layout size={28} />,
    color: "text-blue-500 bg-blue-500/10",
  },
  Backend: {
    icon: <Server size={28} />,
    color: "text-green-600 bg-green-600/10",
  },
  Database: {
    icon: <Database size={28} />,
    color: "text-amber-500 bg-amber-500/10",
  },
  Languages: {
    icon: <Terminal size={28} />,
    color: "text-violet-600 bg-violet-600/10",
  },
  "ML & Data Science": {
    icon: <BrainCircuit size={28} />,
    color: "text-cyan-600 bg-cyan-600/10",
  },
  Tools: {
    icon: <Wrench size={28} />,
    color: "text-slate-500 bg-slate-500/10",
  },
};

export default function SkillsSection() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof SKILL_DATA>("Frontend");
  const [isInView, setIsInView] = useState(false);

  // Get categories array
  const categories = Object.keys(SKILL_DATA);

  // Set up intersection observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills-section" className="py-20 !bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Technical Stack</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => {
            const categoryInfo =
              CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
            return (
              <motion.button
                key={category}
                className={`relative group py-4 md:py-5 rounded-xl transition-all shadow-sm duration-300 flex flex-col items-center gap-2
                  ${
                    selectedCategory === category
                      ? categoryInfo.color
                      : "bg-background/30 hover:bg-accent/30 hover:border hover:border-primary"
                  }`}
                onClick={() =>
                  setSelectedCategory(category as keyof typeof SKILL_DATA)
                }
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`${selectedCategory === category ? `${categoryInfo.color.split(" ")[0]}` : "text-foreground/70"}`}
                >
                  {categoryInfo.icon}
                </div>
                <p
                  className={`text-sm font-medium ${selectedCategory === category ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {category}
                </p>

                {/* Underline indicator for selected category */}
                {selectedCategory === category && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-1 w-full rounded-full ${categoryInfo.color.split(" ")[0]}`}
                    layoutId="categoryUnderline"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px]"
            >
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {SKILL_DATA[selectedCategory].map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl py-6 px-3 hover:shadow-md hover:border-primary transition-all duration-300"
                  >
                    <div className="flex justify-center items-center h-16">
                      {theme === "dark" && "darkIcon" in skill && skill.darkIcon
                        ? skill.darkIcon
                        : skill.icon}
                    </div>
                    <p className="mt-3 font-medium text-center text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <div
                className={`mt-8 p-4 rounded-lg ${CATEGORY_ICONS[selectedCategory].color}`}
              >
                <div className="flex items-center gap-3">
                  {CATEGORY_ICONS[selectedCategory].icon}
                  <h3 className="font-medium">{selectedCategory}</h3>
                </div>
                <p className="mt-2 text-sm">
                  {getCategoryDescription(selectedCategory)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Helper function to get category descriptions
function getCategoryDescription(category: any) {
  switch (category) {
    case "Frontend":
      return "Building responsive user interfaces and interactive web applications with modern JavaScript frameworks and CSS.";
    case "Backend":
      return "Developing server-side applications, APIs, and services to power web applications.";
    case "Database":
      return "Managing and querying data efficiently with relational and NoSQL database systems.";
    case "Languages":
      return "Programming languages I use for various development tasks and problem-solving.";
    case "ML & Data Science":
      return "Building machine learning models and analyzing data with powerful Python libraries.";
    case "Tools":
      return "Development tools and utilities I use to streamline the software development workflow.";
    default:
      return "";
  }
}
