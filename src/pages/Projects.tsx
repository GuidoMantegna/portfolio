// LIBS
import { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { PROJECTS_INFO, ProjectInfo } from "../lib/constants"
// UI
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
// ICONS
import { Code, ExternalLink, ExternalLinkIcon } from "lucide-react"
import { SectionHOC } from "../components/SectionHOC"

function ProjectCarouselItem({
  project,
  isActive,
  position,
  onClick,
}: {
  project: ProjectInfo
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
      y: -75 * Math.abs(position),
      scale: 1 - Math.abs(position) * 0.1,
      opacity: 1 - Math.abs(position) * 0.1,
      zIndex: 10 - Math.abs(position),
      filter: `blur(${Math.abs(position) * 2}px)`,
    },
    below: {
      y: 75 * Math.abs(position),
      scale: 1 - Math.abs(position) * 0.1,
      opacity: 1 - Math.abs(position) * 0.1,
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
          <div className="relative w-full overflow-hidden lg:w-1/2 flex items-center justify-center h-[45vh]">
            <motion.img
              src={project.image}
              alt={project.title}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              whileHover={isActive ? { scale: 1.02 } : {}}

            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />

            {/* Action Buttons */}
            {isMobile && (
              <div className="absolute bottom-2 flex px-2 gap-2 w-full">
                <Button size="sm" variant="link" asChild className="flex-1 custom-backdrop text-xs">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Project
                  </a>
                </Button>
                <Button size="sm" variant="link" asChild className="flex-1 custom-backdrop text-accent text-xs">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Code className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>
            )}
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
            {!isMobile && (
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
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress, scrollY } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const prevY = scrollY.getPrevious() || 0;
    const currY = scrollY.get();

    const isScrollingDown = prevY < currY;
    const newIndex = isScrollingDown
      ? Math.ceil(latest * PROJECTS_INFO.length) - 1
      : Math.floor(latest * PROJECTS_INFO.length)
    setActiveIndex(newIndex)
  })

  // const handlePrev = () => {
  //   window.scrollBy({ top: -window.innerHeight, behavior: "smooth" })
  // }

  // const handleNext = () => {
  //   window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  // }

  const scrollToProject = (index: number) => {
    if (!wrapperRef.current) return
    const wrapperTop = wrapperRef.current.offsetTop
    window.scrollTo({ top: wrapperTop + index * window.innerHeight + 1, behavior: "smooth" })
  }

  return (
    <SectionHOC
      section="Projects"
      sectionSubtitle="// Selected Work"
      staticChildren={
        /* Carousel wrapper — outside the parallax transform to preserve sticky behaviour */
        <div ref={wrapperRef} className="mt-8 lg:mt-14" style={{ height: `150vh` }}>
          <div className="sticky top-0 h-screen overflow-hidden px-6 py-6 flex flex-col justify-center">
            <div className="mx-auto w-full max-w-2xl lg:max-w-6xl">

              {/* Carousel Container */}
              <div className="relative flex items-center gap-8">
                <div className="relative h-[600px] sm:h-[75vh] w-full overflow-hidden lg:h-[500px]">
                  <AnimatePresence mode="sync">
                    {PROJECTS_INFO.map((project, index) => (
                      <ProjectCarouselItem
                        key={project.id}
                        project={project}
                        isActive={index === activeIndex}
                        position={index - activeIndex}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex gap-2">
                  {PROJECTS_INFO.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToProject(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted"
                        }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-2xl text-xs lg:text-sm text-muted-foreground"
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
    </SectionHOC>
  )
}
