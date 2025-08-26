import React, { useState, useEffect } from "react";
import MockedMobile from "../assets/images/mockups/MockedMobiles.png";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "motion/react";
import { Project } from "../components";
import { PROJECTS_INFO } from "../constants";
import IMG from "../assets/images/mountains.jpg";
import RECS from "../assets/images/mockups/recs-thumbnail.png";
import TECKMARKET from "../assets/images/mockups/techmarket-thumbnail.png";
import GAMEBOY from "../assets/images/mockups/gameboy-thumbnail.png";
import MEALMARKET from "../assets/images/mockups/mealmarket-thumbnail.png";
import MELI from "../assets/images/mockups/meli-thumbnail.png";
import RECS_VIDEO from "../assets/images/mockups/recs-video.mov";

const Projects: React.FC = () => {
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const scrollableDivRef = React.useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const isInView = useInView(scrollableDivRef, { amount: "all" });
  const { scrollYProgress, scrollY } = useScroll({
    target: projectsRef,
    // offset: ["end end", "start start"],
    offset: ["start start", "end end"],
  });
  const [scrollYPercentage, setScrollYPercentage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYPercentage(latest * 100); // 1 to 100 %
    console.log("Scroll Y Progress: ", latest);
  });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const projectId = target.id;
    setSelectedProject(projectId === selectedProject ? null : projectId);
    console.log("Clicked on project: ", projectId);
  };

  const selectedClasses = `absolute z-[1] top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center`;
  // const unselectedClasses = `rounded-lg shadow-lg border-3 border-black border translate-x-[150%]`;
  const unselectedClasses = `rounded-lg shadow-lg border-3 border-black border translate-x-[${
    (100 - scrollYPercentage) * 2
  }%]`;

  return (
    <section
      className="h-[150vh]  relative bg-black"
      id="projects"
      ref={projectsRef}
    >
      <motion.div className="flex flex-col items-center justify-center text-white h-[100vh] sticky top-0">
        <motion.div
          // ref={scrollableDivRef}
          id="projects-preview-pics"
          className="w-[45%] flex flex-col items-center gap-4"
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          // viewport={{ root: scrollableDivRef, amount: "all" }}
          viewport={{ amount: "all" }}
        >
          <h3 className="text-5xl font-bold">Projects</h3>
          <p className="text-center text-sm font-extralight">
            I love building with React and modern JavaScript ecosystems. These
            projects tackle real-world challenges by crafting responsive,
            scalable, and interactive web applications—with a focus on clean
            architecture, reusability, and seamless user experiences.
          </p>
        </motion.div>
        <div
          className={`w-full h-[40%] images mt-12 ${
            scrollYPercentage > 0 ? "gap-4" : "gap-0"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            {/* MAIN / MODAL */}
            <motion.div
              id="recs-preview"
              onClick={handleClick}
              className={`bg-red-50 bg-opacity-75 flex items-center justify-center top-0 left-0 z-[2]`}
              initial={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
              animate={{
                width: selectedProject === "recs-preview" ? "100%" : "15%",
                position: selectedProject === "recs-preview" ? "absolute" : "relative",
                height: selectedProject === "recs-preview" ? "100%" : "100%",
              }}
              transition={{ duration: 2 }}
              // transition={{ duration: 0.5, ease: "easeInOut" }}
              // style={{
              //   position:
              //     selectedProject === "recs-preview" ? "absolute" : "relative",
              //   width: selectedProject === "recs-preview" ? "100%" : "auto",
              // }}
            >
              {/* PROJECT CONTAINER */}
              <motion.div
               style={{
                //  backgroundImage: `url(${RECS})`,
                //  backgroundSize: "contain",
                //  backgroundPosition: "center",
                //   backgroundRepeat: "no-repeat",
                  backgroundColor: "rgba(145, 145, 145, 0.75)",
               }}
                initial={{
                  height: "100%",
                  width: "150px",
                }}
                animate={{
                  height: selectedProject === "recs-preview" ? "80%" : "100%",
                  width: selectedProject === "recs-preview" ? "100%" : "150px",
                }}
                transition={{ duration: 2 }}
                // className={`w-[150px]`}
                layout
              >
                {/* PROJECT IMAGE */}
                {/* <motion.img 
                  src={RECS} 
                  alt="Projects Preview"
                  className={`h-full w-auto`}
                /> */}
              </motion.div>
            </motion.div>
            {/* <motion.div
            id="recs-preview"
            onClick={handleClick}
            className={
              selectedProject === "recs-preview"
                ? selectedClasses
                : unselectedClasses
            }
            animate={{
              width: selectedProject === "recs-preview" ? "100%" : "15%",
              height: selectedProject === "recs-preview" ? "100%" : "100%",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {selectedProject !== "recs-preview" ? (
              <motion.img
                className=" h-full rounded-lg shadow-lg border-3 border-black border"
                src={RECS}
                alt="Projects Preview"
              />
            ) : (
              <div className="w-[90%] h-[90%] flex items-center justify-center  project rounded-lg shadow-lg relative">
                <Project
                  key={PROJECTS_INFO[0].id}
                  title={PROJECTS_INFO[0].title}
                  description={PROJECTS_INFO[0].description}
                  stack={PROJECTS_INFO[0].stack}
                  links={PROJECTS_INFO[0].links}
                />
                <div className="h-full flex-1 flex items-center justify-center projects-mockups rounded-r-lg">
                  <img
                    src={MockedMobile}
                    alt="Mocked Mobiles"
                    className="h-3/4 relative"
                  />
                </div>
              </div>
            )}
          </motion.div> */}
            {/* <video
              className=" h-full rounded-lg shadow-lg border-3 border-black border"
              style={{ transform: `translateX(${(100 - scrollYPercentage) * 2}%)`}}
              // autoPlay
              // loop
              muted
              playsInline
            >
              <source src={RECS_VIDEO} type="video/mp4" />
            </video> */}

            <motion.img
              src={TECKMARKET}
              alt="Projects Preview"
              className="inline h-full rounded-lg shadow-lg border-3 border-black border"
              style={{
                transform: `translateX(${(100 - scrollYPercentage) * 1}%)`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.img
              src={GAMEBOY}
              alt="Projects Preview"
              className="inline h-full rounded-lg shadow-lg border-3 border-black border"
            />
            <motion.img
              src={MEALMARKET}
              alt="Projects Preview"
              className="inline h-full rounded-lg shadow-lg border-3 border-black border"
              style={{
                transform: `translateX(-${(100 - scrollYPercentage) * 1}%)`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.img
              src={MELI}
              alt="Projects Preview"
              className="inline h-full rounded-lg shadow-lg border-3 border-black border"
              style={{
                transform: `translateX(-${(100 - scrollYPercentage) * 2}%)`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
        {/* <Project
          key={PROJECTS_INFO[Math.floor(scrollYPercentage / 20)].id}
          title={PROJECTS_INFO[Math.floor(scrollYPercentage / 20)].title}
          description={PROJECTS_INFO[Math.floor(scrollYPercentage / 20)].description}
          stack={PROJECTS_INFO[Math.floor(scrollYPercentage / 20)].stack}
          links={PROJECTS_INFO[Math.floor(scrollYPercentage / 20)].links}
        />
        <div className="h-full flex-1 flex items-center justify-center projects-mockups">
          <img
            src={MockedMobile}
            alt="Mocked Mobiles"
            className="h-3/4 relative"
          />
        </div> */}
      </motion.div>
    </section>
  );
};

export default Projects;
