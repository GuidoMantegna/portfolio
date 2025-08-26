import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  LayoutGroup,
} from "motion/react";
import { Project } from "../components";
import { PROJECTS_INFO, ProjectInfo } from "../constants";
import { IoClose } from "react-icons/io5";

const ProjectsCopy: React.FC = () => {
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(
    null
  );
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });
  const [scrollYPercentage, setScrollYPercentage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYPercentage(latest * 100); // 1 to 100 %
  });

  const translateXValue = [
    `${200 - scrollYPercentage * 2}%`,
    `${100 - scrollYPercentage * 1}%`,
    0,
    `-${100 - scrollYPercentage * 1}%`,
    `-${200 - scrollYPercentage * 2}%`,
  ];

  return (
    <section
      className="h-[150vh]  relative bg-black"
      id="projects"
      ref={projectsRef}
    >
      <LayoutGroup>
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <>
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-6xl mx-auto sticky top-0"
              >
                <div className="text-center mb-16">
                  <motion.h1
                    className="text-6xl font-bold mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Projects
                  </motion.h1>
                  <motion.p
                    className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    I love building with React and modern JavaScript ecosystems.
                    These projects tackle real-world challenges by crafting
                    responsive, scalable, and interactive web applications—with
                    a focus on clean architecture, reusability, and seamless
                    user experiences.
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-[80%] m-auto">
                  {PROJECTS_INFO.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layoutId={`project-${project.id}`}
                      className="cursor-pointer group"
                      onClick={() => setSelectedProject(project)}
                      initial={{
                        y: 20,
                        opacity: 0,
                        x: translateXValue[index],
                        margin: "5px",
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        x: translateXValue[index],
                        margin: scrollYPercentage > 0 ? "5px" : "0px",
                      }}
                      transition={{
                        x: { type: "spring", stiffness: 100, damping: 20 }, // custom transition for x
                        default: {
                          delay: 0.1 * index,
                        },
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        layoutId={`project-image-${project.id}`}
                        className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-orange-400 via-red-500 to-blue-900 relative"
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          layoutId={`project-img-${project.id}`}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            >
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="w-full max-w-6xl h-full max-h-[80vh] rounded-2xl overflow-hidden relative"
              >
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 text-white"
                  whileHover={{
                    scale: 1.25,
                    rotate: 90,
                    transition: { duration: 0.3 },
                  }}
                >
                  <IoClose size={28} />
                </motion.button>

                <Project {...selectedProject} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
};

export default ProjectsCopy;
