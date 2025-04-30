'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2, Database, Layout, Terminal, BrainCircuit, Wrench,
  Infinity, Layers, FileCode, FileJson, PaintBucket, Server,
  FlaskConical, Activity, Braces, Cpu, BarChart, BoxSelect,
  Binary, Workflow, GitBranch, MessageSquareCode, BookOpen,
  ScrollText, LayoutGrid
} from 'lucide-react'

// Define the skill map with categories and skills
const SKILL_DATA = {
  Frontend: [
    { name: 'React.js', icon: <Infinity size={24} className="text-blue-500" /> },
    { name: 'Next.js', icon: <Layers size={24} className="text-black dark:text-white" /> },
    { name: 'TypeScript', icon: <FileCode size={24} className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FileJson size={24} className="text-yellow-500" /> },
    { name: 'HTML', icon: <Code2 size={24} className="text-orange-600" /> },
    { name: 'CSS', icon: <PaintBucket size={24} className="text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <LayoutGrid size={24} className="text-cyan-500" /> }
  ],
  Backend: [
    { name: 'Node.js', icon: <Server size={24} className="text-green-600" /> },
    { name: 'Firebase', icon: <FlaskConical size={24} className="text-amber-500" /> },
    { name: 'RESTful APIs', icon: <Activity size={24} className="text-indigo-500" /> }
  ],
  Database: [
    { name: 'SQL', icon: <Database size={24} className="text-blue-700" /> },
    { name: 'Firebase', icon: <FlaskConical size={24} className="text-amber-500" /> }
  ],
  Languages: [
    { name: 'C/C++', icon: <Braces size={24} className="text-purple-600" /> },
    { name: 'Python', icon: <BrainCircuit size={24} className="text-yellow-600" /> },
    { name: 'JavaScript', icon: <FileJson size={24} className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <FileCode size={24} className="text-blue-600" /> },
    { name: 'SQL', icon: <Database size={24} className="text-blue-700" /> }
  ],
  'ML & Data Science': [
    { name: 'TensorFlow', icon: <Cpu size={24} className="text-orange-500" /> },
    { name: 'Matplotlib', icon: <BarChart size={24} className="text-blue-500" /> },
    { name: 'Pandas', icon: <BoxSelect size={24} className="text-blue-800" /> },
    { name: 'NumPy', icon: <Binary size={24} className="text-cyan-700" /> },
    { name: 'Scikit-Learn', icon: <Workflow size={24} className="text-orange-600" /> }
  ],
  Tools: [
    { name: 'Git/GitHub', icon: <GitBranch size={24} className="text-black dark:text-white" /> },
    { name: 'Postman', icon: <MessageSquareCode size={24} className="text-orange-500" /> },
    { name: 'Mockoon', icon: <Terminal size={24} className="text-purple-500" /> },
    { name: 'Jupyter Notebook', icon: <BookOpen size={24} className="text-orange-400" /> },
    { name: 'Vercel AI SDK', icon: <ScrollText size={24} className="text-gray-700" /> }
  ]
}

// Define the category icons and colors
const CATEGORY_ICONS = {
  Frontend: { icon: <Layout size={28} />, color: 'text-blue-500 bg-blue-500/10' },
  Backend: { icon: <Server size={28} />, color: 'text-green-600 bg-green-600/10' },
  Database: { icon: <Database size={28} />, color: 'text-amber-500 bg-amber-500/10' },
  Languages: { icon: <Terminal size={28} />, color: 'text-violet-600 bg-violet-600/10' },
  'ML & Data Science': { icon: <BrainCircuit size={28} />, color: 'text-cyan-600 bg-cyan-600/10' },
  Tools: { icon: <Wrench size={28} />, color: 'text-slate-500 bg-slate-500/10' }
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof SKILL_DATA>('Frontend')
  const [isInView, setIsInView] = useState(false)
  
  // Get categories array
  const categories = Object.keys(SKILL_DATA)
  
  // Set up intersection observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const section = document.getElementById('skills-section')
    if (section) observer.observe(section)
    
    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

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
            const categoryInfo = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
            return (
              <motion.button
                key={category}
                className={`relative group py-4 md:py-5 rounded-xl transition-all shadow-sm duration-300 flex flex-col items-center gap-2
                  ${selectedCategory === category 
                    ? categoryInfo.color
                    : 'bg-background/30 hover:bg-accent/30 hover:border hover:border-primary'}`}
                onClick={() => setSelectedCategory(category as keyof typeof SKILL_DATA)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${selectedCategory === category ? `${categoryInfo.color.split(' ')[0]}` : 'text-foreground/70'}`}>
                  {categoryInfo.icon}
                </div>
                <p className={`text-sm font-medium ${selectedCategory === category ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {category}
                </p>
                
                {/* Underline indicator for selected category */}
                {selectedCategory === category && (
                  <motion.div 
                    className={`absolute -bottom-1 left-0 h-1 w-full rounded-full ${categoryInfo.color.split(' ')[0]}`}
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
                      {skill.icon}
                    </div>
                    <p className="mt-3 font-medium text-center text-sm">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className={`mt-8 p-4 rounded-lg ${CATEGORY_ICONS[selectedCategory].color}`}>
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
  )
}

// Helper function to get category descriptions
function getCategoryDescription(category:any) {
  switch(category) {
    case 'Frontend':
      return 'Building responsive user interfaces and interactive web applications with modern JavaScript frameworks and CSS.';
    case 'Backend':
      return 'Developing server-side applications, APIs, and services to power web applications.';
    case 'Database':
      return 'Managing and querying data efficiently with relational and NoSQL database systems.';
    case 'Languages':
      return 'Programming languages I use for various development tasks and problem-solving.';
    case 'ML & Data Science':
      return 'Building machine learning models and analyzing data with powerful Python libraries.';
    case 'Tools':
      return 'Development tools and utilities I use to streamline the software development workflow.';
    default:
      return '';
  }
}