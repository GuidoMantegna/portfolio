import React, { useState, useEffect } from "react";
import MockedMobile from "../assets/images/mockups/MockedMobiles.png";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  AnimatePresence,
  LayoutGroup,

} from "motion/react";
import { Project } from "../components";
import { PROJECTS_INFO, ProjectInfo } from "../constants";
import { IoClose } from "react-icons/io5";
import IMG from "../assets/images/mountains.jpg";
import RECS from "../assets/images/mockups/recs-thumbnail.png";
import TECKMARKET from "../assets/images/mockups/techmarket-thumbnail.png";
import GAMEBOY from "../assets/images/mockups/gameboy-thumbnail.png";
import MEALMARKET from "../assets/images/mockups/mealmarket-thumbnail.png";
import MELI from "../assets/images/mockups/meli-thumbnail.png";
import RECS_VIDEO from "../assets/images/mockups/recs-video.mov";

const ProjectsCopy: React.FC = () => {
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const scrollableDivRef = React.useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);
  const isInView = useInView(scrollableDivRef, { amount: "all" });
  const { scrollYProgress, scrollY } = useScroll({
    target: projectsRef,
    // offset: ["end end", "start start"],
    offset: ["start start", "end end"],
  });
  const [scrollYPercentage, setScrollYPercentage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYPercentage(latest * 100); // 1 to 100 %
    // console.log("Scroll Y Progress: ", latest);
    console.log("Scroll Y Percentage: ", scrollYPercentage);
  });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const translateXValue = [
    `${(200 - scrollYPercentage * 2)}%`,
    `${(100 - scrollYPercentage * 1)}%`,
    0,
    `-${(100 - scrollYPercentage * 1)}%`,
    `-${(200 - scrollYPercentage * 2)}%`,
  ];
  // const translateXValue = [
  //   `${(200 - (scrollYPercentage < 0.5 ? scrollYPercentage + 0.5 : scrollYPercentage) * 2)}%`, //`${(100 - (scrollYPercentage < 0.5 ? scrollYPercentage + 0.5 : ) * 2)}%`,
  //   `${(100 - (scrollYPercentage < 0.5 ? scrollYPercentage + 0.5 : scrollYPercentage) * 1)}%`,
  //   0,
  //   `-${(100 - (scrollYPercentage < 0.5 ? scrollYPercentage + 0.5 : scrollYPercentage) * 1)}%`,
  //   `-${(200 - (scrollYPercentage < 0.5 ? scrollYPercentage + 0.5 : scrollYPercentage) * 2)}%`,
  // ];

  return (
    <section
      className="h-[150vh]  relative bg-black"
      id="projects"
      ref={projectsRef}
    >
    {/* <div className="min-h-screen bg-black text-white p-8"> */}
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
                    I love building with React and modern JavaScript ecosystems. These projects tackle real-world challenges by crafting responsive, scalable, and interactive web applications—with a focus on clean architecture, reusability, and seamless user experiences.
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-[80%] m-auto">
                  {/* <div className="w-[80%] h-full m-auto flex items-center justify-center"> */}
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

                        } // fallback for other props
                      }}
                      // transition={{ delay: 0.1 * index }}
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
                // className="w-full max-w-6xl h-full max-h-[80vh] bg-zinc-900 rounded-2xl overflow-hidden relative"
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
                {/* <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <IoClose size={24} />
                </button> */}

                <div className="h-full flex justify-end">
                  {/* Left side - Content */}
                  {/* <motion.div
                    className="flex-1 p-12 flex flex-col justify-center"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="font-black text-6xl">
                        {selectedProject.title}
                      </h2>
                      <p className="stack mt-3 text-pink-400">{selectedProject.stack}</p>
                      <p className="font-extralight text-sm leading-7 mt-6">
                        {selectedProject.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </motion.div>
                  </motion.div> */}
                  <Project
                    title={selectedProject.title}
                    description={selectedProject.description}
                    stack={selectedProject.stack}
                    links={selectedProject.links}
                    mockups={selectedProject.mockups}
                  />

                  {/* Right side - Image */}
                  <motion.div
                    className="relative w-1/2"
                    // className="flex-1 relative"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <motion.div
                      layoutId={`project-image-${selectedProject.id}`}
                      className="w-full h-full rounded-l-2xl overflow-hidden"
                    >
                    {/* <motion.div className="absolute z-[1]">
                      
                      <motion.img
                        src={selectedProject.mockups}
                        alt={selectedProject.title}
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 0.25 }}
                        className="absolute z-[2] top-[20%]"
                      />
                    </motion.div> */}
                      <motion.img
                        layoutId={`project-img-${selectedProject.id}`}
                        src={selectedProject.background}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              {/* <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="w-full max-w-6xl h-full max-h-[80vh] bg-gray-100 rounded-2xl overflow-hidden relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                >
                  X
                </button>

                <div className="h-full flex">
                  <motion.div
                    className="flex-1 p-12 flex flex-col justify-center"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-5xl font-bold text-gray-800 mb-4">
                        {selectedProject.title}
                      </h2>
                      <p className="text-xl text-gray-600 mb-8">
                        {selectedProject.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex-1 relative"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <motion.div
                      layoutId={`project-image-${selectedProject.id}`}
                      className="w-full h-full rounded-l-2xl overflow-hidden"
                    >
                      <motion.img
                        layoutId={`project-img-${selectedProject.id}`}
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  )
};

export default ProjectsCopy;
