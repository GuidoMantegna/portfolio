import { motion, AnimatePresence, useInView } from "motion/react"
import { useRef, useState } from "react"
import { ChevronUp, ChevronDown, Code, ExternalLink, ExternalLinkIcon } from "lucide-react"
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
    subtitle: "Dashboard Demo",
    description: "• Dashboard for monitoring cybersecurity threat indicators and intelligence campaigns.",
    longDescription: "• Dashboard for monitoring cybersecurity threat indicators and intelligence campaigns. Features include real-time data visualization, filtering mechanisms, and performance-optimized UI rendering.",
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
    description: "• Booking platform MVP that allows users to explore beauty center services and schedule appointments online.",
    longDescription: "• Booking platform MVP that allows users to explore beauty center services and schedule appointments online. The system is designed with multi-tenant capabilities and flexible scheduling logic.",
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
    description: "• Full-stack MERN application that generates personalized movie recommendations based on user mood.",
    longDescription: "• Full-stack MERN application that generates personalized movie recommendations based on user mood. Includes API design, dynamic filtering, and a scalable full-stack architecture.",
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
    description: "• Web application for purchasing groceries, exploring recipes, and discovering food facts.",
    longDescription: "• Web application for purchasing groceries, exploring recipes, and discovering food facts. Includes product catalog management, dynamic UI filtering, and recipe exploration.",
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
      y: -100 * Math.abs(position),
      scale: 1 - Math.abs(position) * 0.1,
      opacity: 1 - Math.abs(position) * 0.4,
      zIndex: 10 - Math.abs(position),
      filter: `blur(${Math.abs(position) * 2}px)`,
    },
    below: {
      y: 100 * Math.abs(position),
      scale: 1 - Math.abs(position) * 0.1,
      opacity: 1 - Math.abs(position) * 0.4,
      zIndex: 10 - Math.abs(position),
      filter: `blur(${Math.abs(position) * 2}px)`,
    },
  }

  const getVariant = () => {
    if (position === 0) return "active"
    return position < 0 ? "above" : "below"
  }

  const isMobile = window.innerWidth < 768; // Example breakpoint for mobile devices

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
    // whileHover={{ filter: isActive ? "blur(0px) brightness(1.05)" : "blur(4px) brightness(0.9)" }}
    >
      <div
        className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300
          ${isActive
            ? "border-white/20 bg-stone-950/90"
            : "border-white/10 bg-stone-950/30 opacity-30"
          }`}
      >
        <div className="flex flex-col lg:flex-row brightness-[0.85] transition-all duration-300 group-hover:brightness-100">
          {/* Image Section */}
          <div className="relative w-full overflow-hidden lg:w-1/2 flex items-center justify-center h-48 lg:h-auto">
            <motion.img
              src={project.image}
              alt={project.title}
              //   fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              whileHover={isActive ? { scale: 1.02 } : {}}

            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />

            {/* Year Badge */}
            {/* <div className="absolute top-4 left-4">
              <Badge className="custom-backdrop text-xs text-muted-foreground font-mono uppercase">
                {project.subtitle}
              </Badge>
            </div> */}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-center p-4 lg:p-8">
            <div className="mb-1 lg:mb-2 font-mono text-xs lg:text-sm uppercase tracking-wider text-primary">
              {project.subtitle}
            </div>
            <h3 className="mb-3 text-md lg:text-2xl font-bold text-foreground lg:text-3xl">
              {project.title}
            </h3>
            <p className="mb-3 text-xs lg:leading-relaxed text-muted-foreground lg:text-sm">
              {isMobile ? project.description : project.longDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="custom-backdrop text-xs lg:text-sm text-muted-foreground font-mono"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="custom-backdrop text-xs lg:text-sm text-muted-foreground font-mono">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-6 sm:flex-row">
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

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1))
  }

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
          className="mb-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 block font-mono text-sm text-primary"
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
            className="mt-4 max-w-2xl text-sm lg:text-lg text-muted-foreground"
          >
            I love building with React and modern JavaScript ecosystems.
            Here, a collection of projects that showcase my expertise in building web applications.
          </motion.p>
          <a
            href="https://github.com/GuidoMantegna#-featured-projects"
            target="_blank" rel="noopener noreferrer"
            className="text-primary text-sm bg-blue-500/10 rounded-md px-2 py-1 mt-2 inline-flex items-center hover:bg-primary/20 transition-colors duration-300">
            <ExternalLinkIcon className="h-4 w-4 mr-2" />
            View More

          </a>
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
              className="h-12 w-12 rounded-full disabled:opacity-30"
            >
              <ChevronUp className="h-5 w-5" />
              <span className="sr-only">Previous project</span>
            </Button>
            <Button
              //   variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={activeIndex === projects.length - 1}
              className="h-12 w-12 rounded-full disabled:opacity-30"
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
                className={`h-2 w-2 rounded-full transition-all duration-300 ${index === activeIndex
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
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
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
    </section>
  )
}
