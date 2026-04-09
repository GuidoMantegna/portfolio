import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowDown } from "lucide-react";

const ROLES = [
  "<Front-end Developer/>",
  "<Software Engineer/>",
  "<Love to build things/>",
];

const RolesVariants = (isScr0llingUp: boolean) => ({
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

function GuidoHeadline({ className, isMask }: { className?: string; isMask?: boolean }) {
  return (
    <motion.h1 className={`leading-[35px] md:leading-[50px] ${isMask ? "text-white" : ""}`} layout>
      <span className="text-[90px] md:text-[120px] font-extrabold tracking-tighter">Guido</span>
      <br />
      <span className="text-[50px] md:text-[120px] font-extrabold tracking-[-7px]">
        <span className={`GM-logo text-[80px] md:text-[120px] font-extrabold  ${isMask ? "-dark" : "-light"}`}>M</span>antegna.
      </span>
    </motion.h1>
  )
}

function CodeLines({ codeLines, className }: { codeLines: number[]; className?: string }) {
  return (
    <motion.div className={`code-lines-numbers absolute left-2 flex flex-col text-gray-900 text-xs gap-2 text-right h-[75%] overflow-hidden mask ${className || ""}`}>
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
  )
}

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
        {/* MAIN CONTENT */}
        <motion.div className="sticky top-0 h-[100vh] py-[4%] flex flex-col justify-center items-center">
          {/* CODE LINE NUMBERS */}
          <CodeLines codeLines={codeLines} />
          {/* GUIDO MANTEGNA */}
          <GuidoHeadline className="-light" />
          {/* ROLES */}
          <AnimatePresence mode="popLayout">
            {ROLES.map((text, index) => {
              if (index !== selectedTextIndex) return null;
              return (
                <motion.h2
                  className={`text-[20px] md:text-[60px] font-extrabold md:mt-4 tracking-tighter roles text-center`}
                  key={`ROLES-${index}`}
                  variants={RolesVariants(isScr0llingUp)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {text}
                </motion.h2>
              );
            })}
          </AnimatePresence>
          {/* SCROLL INDICATOR */}
          {!selectedTextIndex && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col items-center gap-2 absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <span className="text-sm text-mist-950">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-5 w-5 text-mist-950" />
              </motion.div>
            </motion.div>
          )}
          {/* H1 MASK */}
          <motion.div
            className="absolute w-full h-full left-0 py-[4%] flex flex-col justify-center items-center h1-mask"
            style={{
              clipPath: `inset(${h1MaskPosition}% 0px 0px 0px)`,
              ["--after-top" as any]: `${h1MaskPosition}%`,
            }}
          >
            <CodeLines codeLines={codeLines} className="text-white" />
            <GuidoHeadline className="text-white -dark" isMask={true} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
