import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i: number) => {
//     const delay = 1 + i * 0.1;
//     return {
//       // dashArray: 200,
//       // pathLength: 1,
//       opacity: 1,
//       transition: {
//         // pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//       },
//     };
//   },
// };

const frontend = [
  "<Front-end Developer/>",
  "<Software Engineer/>",
  "<JS Developer/>",
];

const FrontendVariants = (isScr0llingUp: boolean) => ({
  initial: {
    opacity: 0,
    y: isScr0llingUp ? 20 : -20,
    filter: "blur(10px)",
    transition: { duration: 0.5 },
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: isScr0llingUp ? -20 : 20,
    filter: "blur(10px)",
    transition: {
      duration: 0.25,
    },
  },
});

const Home: React.FC = () => {
  const [H1BackPosition, setH1BackPosition] = useState({ x: 0, y: 0 });
  const titleRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: titleRef,
    offset: ["start start", "end end"],
  });
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [isScr0llingUp, setIsScr0llingUp] = useState(false);
  const [h1before, setH1before] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log({ latest: Math.floor((latest * 100) / 4) });
    let simplifiedLatest = Math.floor((latest * 100) / 3);

    const textNumber = (prevState: number) => {
      if (prevState === simplifiedLatest || simplifiedLatest > 3)
        return prevState;
      return simplifiedLatest;
    };

    setSelectedTextIndex(Math.floor(latest * 10));
    // setSelectedTextIndex((prevState) => textNumber(prevState));

    const prev = scrollY.getPrevious();
    const curr = scrollY.get();
    setIsScr0llingUp(
      prev !== undefined && curr !== undefined ? prev > curr : false
    );

    console.log("lastest", -20 * latest * 10 + 200);
    // console.log("lastest", (-20 * Math.floor(latest *10)) + 200);

    setH1before(-25 * latest * 10 + 200);
    // setH1before(() => 100 - latest * 10 * 10);
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

      console.log("mouse position", {
        x: Math.floor((x / windowWidth) * 100),
        y: Math.floor((y / windowHeight) * 100),
      });
      // setH1BackPosition({ x: isLeft ? -4 : 4, y: isUp ? 1 : -1 });
      setH1BackPosition({
        x: Math.floor((x / windowWidth) * 100),
        y: Math.floor((y / windowHeight) * 100),
      });
    };

    document.addEventListener("mousemove", setH1BG);

    return () => {
      document.removeEventListener("mousemove", setH1BG);
    };
  }, []);

  return (
    <>
      <section className="h-[250vh] relative bg-white" id="home" ref={titleRef}>
        <motion.div
          className="sticky top-0 h-[100vh] py-[4%] flex flex-col justify-center h1-main"
          style={{
            ["--main-clip" as any]: `circle(5% at ${H1BackPosition.x}% ${H1BackPosition.y}%)`,
          }}
        >
          <motion.h1
            className={`text-[140px] leading-[100px] text-left font-extrabold relative z-[1] pl-12 `}
            layout
          >
            Guido
            <br />
            Mantegna.
          </motion.h1>

          <AnimatePresence mode="popLayout">
            {frontend.map((text, index) => {
              if (index !== selectedTextIndex) return null;
              return (
                <motion.h2
                  className="text-[75px] text-gray-950 font-bold mt-4 pl-12"
                  key={`frontend-${index}`}
                  variants={FrontendVariants(isScr0llingUp)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {text}
                </motion.h2>
              );
            })}
          </AnimatePresence>
          <motion.div
            className="absolute w-full h-full left-0 py-[4%] flex flex-col justify-center h1-mask"
            style={{
              // clipPath: `inset(0% 0px 0px 0px)`,
              clipPath: `inset(${h1before}% 0px 0px 0px)`,
              ["--after-top" as any]: `${h1before}%`,
            }}
          >
            <motion.h1
              className={`text-[140px] leading-[100px] text-left font-extrabold relative z-[1] h1-text pl-12 `}
            >
              Guido
              <br />
              Mantegna.
            </motion.h1>
          </motion.div>
        </motion.div>
      </section>
      {/* <div className="h-screen"></div> */}
    </>
  );
};

export default Home;
