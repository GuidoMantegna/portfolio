import { motion, AnimatePresence, useInView } from "motion/react"
import { useRef, useState } from "react"
import { ChevronUp, ChevronDown, Code, ExternalLink } from "lucide-react"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog"
// import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Threat Intelligence Dashboard",
    subtitle: "Dashboard Application",
    description: "• Dashboard for monitoring cybersecurity threat indicators and intelligence campaigns. Features include real-time data visualization, filtering mechanisms, and performance-optimized UI rendering.",
    longDescription: "Velocity UI is a meticulously crafted React component library that prioritizes accessibility, performance, and developer experience. Built with TypeScript and Tailwind CSS, it offers over 50 production-ready components including advanced data tables, form elements with built-in validation, and animated UI primitives. The library features comprehensive Storybook documentation, extensive test coverage, and seamless integration with popular frameworks.",
    tags: ["React", "TypeScript", "Vitest", "Tailwind CSS"],
    features: ["50+ Components", "WCAG 2.1 Compliant", "Tree Shakeable", "Dark Mode Support"],
    link: "https://augur-challenge.vercel.app/",
    github: "https://github.com/GuidoMantegna/augur-challenge",
    image: "/augur-dashboard.png",
    year: "2024",
  },
  {
    id: 2,
    title: "Multi-Tenant Beauty Center Booking Systemant",
    subtitle: "Booking Platform",
    description: "• Booking platform MVP that allows users to explore beauty center services and schedule appointments online. The system is designed with multi-tenant capabilities and flexible scheduling logic.",
    longDescription: "DataViz Studio transforms complex datasets into beautiful, interactive visualizations. The platform supports real-time collaboration, allowing teams to work together on dashboards simultaneously. Built with Next.js and D3.js, it offers a powerful chart builder with drag-and-drop functionality, custom theming, and export options for various formats including PDF, PNG, and interactive embeds.",
    tags: ["Next.js", "TypeScript", "Radix UI", "React Test Library"],
    features: ["Real-time Collaboration", "20+ Chart Types", "Custom Themes", "Data Export"],
    link: "https://arionkoder-challenge.vercel.app/",
    github: "https://github.com/GuidoMantegna/arionkoder-challenge",
    image: "/beauty-center.png",
    year: "2024",
  },
  {
    id: 3,
    title: "Movies Recommendation",
    subtitle: "Social media platform",
    description: "• Full-stack MERN application that generates personalized movie recommendations based on user mood. Includes API design, dynamic filtering, and a scalable full-stack architecture.",
    longDescription: "Motion Kit brings life to React applications with physics-based animations that feel natural and responsive. The library provides an intuitive API for creating complex animation sequences, spring animations, and gesture-driven interactions. With built-in support for reduced motion preferences and excellent performance characteristics, it's the go-to solution for adding polish to any React project.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    features: ["Physics Engine", "Gesture Support", "Spring Animations", "Performance Optimized"],
    link: "https://recs-tailwind.vercel.app/home",
    github: "https://github.com/GuidoMantegna/recs-api",
    image: "/movies-rec.png",
    year: "2023",
  },
  {
    id: 4,
    title: "Meals Market",
    subtitle: "Groceries Shop & Recipes App",
    description: "• Web application for purchasing groceries, exploring recipes, and discovering food facts. Includes product catalog management, dynamic UI filtering, and recipe exploration.",
    longDescription: "DevFlow is a desktop application that helps developers understand and optimize their coding habits. It automatically tracks coding sessions across different projects and languages, providing insights into productivity patterns, focus time, and project distribution. The app features beautiful visualizations, goal setting, and integrations with popular tools like GitHub and Jira.",
    tags: ["React", "Redux", "Chakra UI", "React Router"],
    features: ["Auto Tracking", "Detailed Analytics", "Goal Setting", "IDE Integrations"],
    link: "https://meals-market.vercel.app/",
    github: "#https://github.com/GuidoMantegna/meals-market",
    image: "/meals-market.png",
    year: "2023",
  },
]

function ProjectCarouselItem({
  project,
  isActive,
  position,
  onClick,
}: {
  project: typeof projects[0]
  isActive: boolean
  position: number
  onClick?: () => void
}) {
  const variants = {
    active: {
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      filter: "blur(0px)",
    },
    above: {
      y: -120 * Math.abs(position),
      scale: 1 - Math.abs(position) * 0.1,
      opacity: 1 - Math.abs(position) * 0.3,
      zIndex: 10 - Math.abs(position),
      filter: `blur(${Math.abs(position) * 2}px)`,
    },
    below: {
      y: 120 * Math.abs(position),
      scale: 1 - Math.abs(position) * 0.1,
      opacity: 1 - Math.abs(position) * 0.3,
      zIndex: 10 - Math.abs(position),
      filter: `blur(${Math.abs(position) * 2}px)`,
    },
  }

  const getVariant = () => {
    if (position === 0) return "active"
    return position < 0 ? "above" : "below"
  }

  return (
    <motion.div
      className="absolute left-0 right-0 cursor-pointer"
      variants={variants}
      animate={getVariant()}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onClick={onClick}
      whileHover={isActive ? { scale: 1.02 } : {}}
    >
      <div
        className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
          isActive
            ? "border-primary/50 bg-stone-950/90 backdrop-blur-md"
            : "border-border/30 bg-stone-950/40 backdrop-blur-sm"
        }`}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative w-full overflow-hidden lg:w-1/2 flex items-center justify-center h-48 lg:h-auto">
            <img
              src={project.image}
              alt={project.title}
            //   fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
            
            {/* Year Badge */}
            {/* <div className="absolute top-4 left-4">
              <Badge className="bg-background/80 text-foreground backdrop-blur-sm">
                {project.year}
              </Badge>
            </div> */}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
            <div className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
              {project.subtitle}
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground lg:text-3xl">
              {project.title}
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground lg:text-sm">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-border/50 text-xs text-muted-foreground"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="border-border/50 text-xs text-muted-foreground">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
            {/* Action Buttons */}
           <div className="flex flex-col gap-3 pt-4 sm:flex-row">
             <Button asChild className="flex-1">
               <a href={project.link} target="_blank" rel="noopener noreferrer">
                 <ExternalLink className="mr-2 h-4 w-4" />
                 View Live Project
               </a>
             </Button>
             <Button asChild className="flex-1 bg-accent">
               <a href={project.github} target="_blank" rel="noopener noreferrer">
                 <Code className="mr-2 h-4 w-4" />
                 View Source Code
               </a>
             </Button>
           </div>

            {/* Action Hint */}
            {/* {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-xs text-muted-foreground"
              >
                Click to view details
              </motion.div>
            )} */}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
//   const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1))
  }

//   const handleProjectClick = (project: typeof projects[0], index: number) => {
//     if (index === activeIndex) {
//       setSelectedProject(project)
//       setIsModalOpen(true)
//     } else {
//       setActiveIndex(index)
//     }
//   }

  return (
    <section id="projects" className="relative min-h-screen px-6 py-10">
        <div className="absolute -top-5 left-0 w-full h-60 z-[-10] bg-gradient-to-b from-[#020202] to-transparent pointer-events-none z-10" />
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 block font-mono text-sm text-primary"
          >
            {"// Selected Work"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            A collection of projects that showcase my expertise in building
            performant, accessible, and visually engaging web applications.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center gap-8">
          {/* Navigation Controls - Left Side */}
          <div className="hidden flex-col gap-4 lg:flex">
            <Button
            //   variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="h-12 w-12 rounded-full border-border/50 backdrop-blur-sm disabled:opacity-30"
            >
              <ChevronUp className="h-5 w-5" />
              <span className="sr-only">Previous project</span>
            </Button>
            <Button
            //   variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={activeIndex === projects.length - 1}
              className="h-12 w-12 rounded-full border-border/50 backdrop-blur-sm disabled:opacity-30"
            >
              <ChevronDown className="h-5 w-5" />
              <span className="sr-only">Next project</span>
            </Button>
          </div>

          {/* Carousel */}
          <div className="relative h-[600px] w-full overflow-hidden lg:h-[500px]">
            <AnimatePresence mode="sync">
              {projects.map((project, index) => (
                <ProjectCarouselItem
                  key={project.id}
                  project={project}
                  isActive={index === activeIndex}
                  position={index - activeIndex}
                //   onClick={() => handleProjectClick(project, index)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Progress Indicator - Right Side */}
          <div className="hidden flex-col items-center gap-3 lg:flex">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "h-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
          <Button
            // variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="h-10 w-10 rounded-full"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          
          {/* Mobile Progress Dots */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <Button
            // variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={activeIndex === projects.length - 1}
            className="h-10 w-10 rounded-full"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {/* <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </section>
  )
}
