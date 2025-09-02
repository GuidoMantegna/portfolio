import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const ROLES = [
  "<Front-end Developer/>",
  "<Software Engineer/>",
  "<Love to build things/>",
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

const CODE_LINE_NUMBERS = [...Array(window.innerHeight)].map((_, i) => i + 1);

const Home: React.FC = () => {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: titleRef,
    offset: ["start start", "end end"],
  });
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [isScr0llingUp, setIsScr0llingUp] = useState(false);
  const [h1MaskPosition, setH1MaskPosition] = useState(100);
  const [codeLines, setCodeLines] = useState<number[]>(CODE_LINE_NUMBERS);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const prevY = scrollY.getPrevious() || 0;
    const currY = scrollY.get();

    setIsScr0llingUp(prevY > currY);
    setSelectedTextIndex(Math.floor(latest * 10));
    setH1MaskPosition(-25 * latest * 10 + 200);
    setCodeLines(CODE_LINE_NUMBERS.slice(Math.floor(latest * 10) * 10));
  });

  return (
    <>
      <section className="h-[250vh] relative bg-white" id="home" ref={titleRef}>
        <motion.div className="sticky top-0 h-[100vh] py-[4%] flex flex-col justify-center">
          <motion.div className="code-lines-numbers absolute left-8 flex flex-col text-gray-900 text-xs gap-2 text-right h-[75%] overflow-hidden">
            {codeLines.map((lineNumber) => (
              <motion.span
                key={`line-number-${lineNumber}`}
                className="line-number"
                layout
              >
                {lineNumber}
              </motion.span>
            ))}
          </motion.div>
          <motion.h1 className={``} layout>
            Guido
            <br />
            Mantegna.
          </motion.h1>

          <AnimatePresence mode="popLayout">
            {ROLES.map((text, index) => {
              if (index !== selectedTextIndex) return null;
              return (
                <motion.h2
                  className={`text-[60px] font-extrabold mt-4 pl-[10%] tracking-tighter roles role-${selectedTextIndex}`}
                  key={`ROLES-${index}`}
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
              clipPath: `inset(${h1MaskPosition}% 0px 0px 0px)`,
              ["--after-top" as any]: `${h1MaskPosition}%`,
            }}
          >
            <motion.div className="code-lines-numbers absolute left-8 flex flex-col text-gray-900 text-xs gap-2 text-right h-[75%] overflow-hidden mask">
              {codeLines.map((lineNumber) => (
                <motion.span
                  key={`line-number-${lineNumber}`}
                  className="line-number"
                  layout
                >
                  {lineNumber}
                </motion.span>
              ))}
            </motion.div>
            <motion.h1 className={`h1-text`}>
              Guido
              <br />
              Mantegna.
            </motion.h1>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
