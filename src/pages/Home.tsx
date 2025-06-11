import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.1;
    return {
      // dashArray: 200,
      // pathLength: 1,
      opacity: 1,
      transition: {
        // pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const frontend: { [key: number]: string } = {
  0: "Front-end Developer",
  1: "Software Engineer",
  2: "Technology Enthusiast",
  3: "",
};

const FrontendVariants = (isScr0llingUp: boolean) => ({
  initial: {
    opacity: 0,
    y: isScr0llingUp ? 20 : -20,
    filter: "blur(10px)",
    // transition: {
    //   opacity: { duration: 0.5 },
    //   y: { duration: 0.05 },
    // },
    transition: { duration: .5 }
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    // transition: {
    //   opacity: { duration: 0.5 },
    //   y: { duration: 0.25 },
    // },
  },
  exit: {
    opacity: 0,
    y: isScr0llingUp ? -20 : 20,
    filter: "blur(10px)",
    // transition: {
    //   opacity: { duration: 0.25 },
    //   y: { duration: 0.25 },
    // },
    transition: {
      duration: 0.25,
    },
  },
});

const Home: React.FC = () => {
  const [H1BackPosition, setH1BackPosition] = useState({ x: 0, y: 0 });
  const H1Ref = React.useRef<HTMLHeadingElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);
  const [isScr0llingUp, setIsScr0llingUp] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // latest is the up-to-date value
    // Do something with latest
    console.log({ latest: Math.floor((latest * 100) / 4) });
    const frontedMSG = (prevState: number) => {
      let simplifiedLatest = Math.floor((latest * 100) / 4);
      if (prevState === simplifiedLatest || simplifiedLatest > 3)
        return prevState;
      return simplifiedLatest;
    };
    setScrollYValue((prevState) => frontedMSG(prevState));
    const prev = scrollY.getPrevious();
    const curr = scrollY.get();
    setIsScr0llingUp(
      prev !== undefined && curr !== undefined ? prev > curr : false
    );
    console.log(isScr0llingUp ? "Scrolling Up" : "Scrolling Down");
  });

  useEffect(() => {
    // Get mouse position
    const setH1BG = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const YCenter = windowHeight / 2;
      const XCenter = windowWidth / 2;
      const isUp = y < YCenter;
      const isLeft = x < XCenter;

      setH1BackPosition({ x: isLeft ? -4 : 4, y: isUp ? 1 : -1 });
    };

    // console.log("scrollYProgress", scrollYProgress.get())

    // Add event listener
    document.addEventListener("mousemove", setH1BG);

    // Remove event listener
    return () => {
      document.removeEventListener("mousemove", setH1BG);
    };
  }, []);

  return (
    <>
      <section className="h-[200vh]" id="home">
        {/* <section className="h-[200vh] flex items-center" id="home"> */}

        <motion.div
          // initial={{ y: "-20px" }}
          // whileInView={{ y: "0" }}
          // transition={{ type: "spring" }}
          className="sticky top-0"
        >
          <motion.div style={{ scaleX: scrollYProgress }} />
          <h1
            ref={H1Ref}
            className={`text-[140px] leading-[110px] text-left font-extrabold py-[4%] ps-[5%] h-[100vh] content-center flex flex-col`}
            style={{
              backgroundPositionX: `${H1BackPosition.x}%`,
              backgroundPositionY: `${H1BackPosition.y}%`,
            }}
          >
            {/* Guido Mantegna. */}
            <motion.span>Guido</motion.span>
            <AnimatePresence mode="popLayout">
              {/* {scrollYValue < 0.04 && ( */}
              <motion.div>
                <motion.span
                  initial={{
                    opacity: 0,
                    // scale: 0,
                    // y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    // scale: 1,
                    // y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    // scale: 0,
                    // y: -20,
                  }}
                  transition={{
                    duration: 0.25,
                    // ease: "backInOut",
                    // % of time for each keyframe to be reached
                    // times: [0, 0.25, 0.5, 0.85, 1],
                  }}
                >
                  Mantegna.
                </motion.span>
              </motion.div>
              {/* )} */}
              <motion.span className="text-[60px] text-gray-950 flex">
                <AnimatePresence mode="popLayout">
                  {"<"}

                  {/* {frontend[scrollYValue].split("").map((el, i) => ( */}
                  <motion.p
                  // key={i}
                  // variants={draw}
                  // custom={i}
                  // initial="hidden"
                  // animate="visible"
                  // className={el === "d" ? "pr-[15px]" : ""}
                  >
                    {/* {el} */}
                  </motion.p>
                  {/* ))} */}
                  {/* <p className="relative">{" />"}</p> */}
                </AnimatePresence>
              </motion.span>
              <AnimatePresence mode="popLayout">
                {scrollYValue === 0 && (
                  <motion.span
                    className="text-[60px] text-gray-950 flex"
                    key="frontend-0"
                    variants={FrontendVariants(isScr0llingUp)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {frontend[scrollYValue]}
                  </motion.span>
                )}
                {scrollYValue === 1 && (
                  <motion.span
                    className="text-[60px] text-gray-950 flex"
                    key="frontend-1"
                    variants={FrontendVariants(isScr0llingUp)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {frontend[scrollYValue]}
                  </motion.span>
                )}
                {scrollYValue === 2 && (
                  <motion.span
                    className="text-[60px] text-gray-950 flex"
                    key="frontend-2"
                    variants={FrontendVariants(isScr0llingUp)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {frontend[scrollYValue]}
                  </motion.span>
                )}
              </AnimatePresence>
            </AnimatePresence>
          </h1>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
