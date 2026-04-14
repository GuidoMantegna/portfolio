import React, { useState, useMemo } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  MotionValue,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import { ROLES } from "../lib/constants";

const RolesVariants = (isScrollingUp: boolean) => ({
  initial: {
    opacity: 0,
    y: isScrollingUp ? 20 : -20,
    filter: "blur(10px)",
    transition: { duration: 0.25 },
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: isScrollingUp ? -20 : 20,
    filter: "blur(10px)",
    transition: {
      duration: 0.25,
    },
  },
});

// Capped at 100 — only ~15-30 are ever visible through the mask
const CODE_LINE_NUMBERS = Array.from({ length: 100 }, (_, i) => i + 1);

const GuidoHeadline = React.memo(function GuidoHeadline({
  isMask,
  scrollYProgress,
}: {
  isMask?: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  const [phase, setPhase] = useState<"before" | "between" | "ending">("before");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.95) setPhase("ending");
    else if (latest > 0.85) setPhase("between");
    else setPhase("before");
  });

  const beforeEnding = phase === "before";
  const isEnding = phase === "ending";

  return (
    <AnimatePresence mode="popLayout">
      <motion.h1
        className={`leading-[35px] lg:leading-[50px] ${isMask ? "text-white" : ""} my-0 mx-auto ${isEnding ? "fixed left-4 top-4" : ""}`}
        layout
      >
        <span className={`font-extrabold tracking-tighter ${isEnding ? "text-2xl lg:text-4xl GM-logo" : "text-[55px] sm:text-[95px] lg:text-[135px]"}`}>
          G
          <span>{beforeEnding ? "uido" : "M."}</span>
        </span>
        <br />
        {beforeEnding && (
          <span className="text-[55px] sm:text-[95px] lg:text-[135px] font-extrabold tracking-[-6px] lg:tracking-[-10px]">
            <span className="text-[55px] sm:text-[95px] lg:text-[135px] font-extrabold">M</span>antegna
          </span>
        )}
      </motion.h1>
    </AnimatePresence>
  );
});

const CodeLines = React.memo(function CodeLines({
  codeLines,
  className,
}: {
  codeLines: number[];
  className?: string;
}) {
  return (
    <motion.div className={`code-lines-numbers absolute left-2 flex flex-col text-gray-900 text-xs gap-2 text-right h-[75%] overflow-hidden mask ${className || ""}`}>
      {codeLines.map((lineNumber) => (
        <span key={`line-number-${lineNumber}`} className="line-number">
          {lineNumber}
        </span>
      ))}
    </motion.div>
  );
});

const Home: React.FC = () => {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: titleRef,
    offset: ["start start", "end end"],
  });
  const [scrollState, setScrollState] = useState({ selectedTextIndex: 0, isScrollingUp: false });
  const { selectedTextIndex, isScrollingUp } = scrollState;

  // Derived — only recalculates when selectedTextIndex changes (~10 times total per scroll)
  const codeLines = useMemo(
    () => CODE_LINE_NUMBERS.slice(selectedTextIndex * 10),
    [selectedTextIndex]
  );

  // MotionValues applied directly to DOM — bypass React reconciliation entirely
  const h1ClipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(200% 0px 0px 0px)", "inset(-50% 0px 0px 0px)"]
  );
  // Formula: 200 - 250 * progress  (matches original: -25 * latest * 10 + 200)
  const afterTopCSS = useTransform(scrollYProgress, (v) => `${200 - 250 * v}%`);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const prevY = scrollY.getPrevious() ?? 0;
    setScrollState({
      selectedTextIndex: Math.floor(latest * 10),
      isScrollingUp: scrollY.get() < prevY,
    });
  });

  return (
    <section className="h-[150vh] relative bg-white" id="home" ref={titleRef}>
      {/* MAIN CONTENT */}
      <motion.div className="sticky top-0 h-[100vh] z-[200] flex flex-col justify-center">
        {/* CODE LINE NUMBERS */}
        <CodeLines codeLines={codeLines} />
        {/* ROLES */}
        <div className="w-fit my-0 mx-auto">
          <AnimatePresence mode="popLayout">
            {ROLES.map((text, index) => {
              if (index !== selectedTextIndex) return null;
              return (
                <motion.h2
                  className="text-[20px] md:text-[35px] font-bold mb-8 ml-2 roles font-mono lg:tracking-[5px]"
                  key={`ROLES-${index}`}
                  variants={RolesVariants(isScrollingUp)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {text}
                </motion.h2>
              );
            })}
          </AnimatePresence>
          {/* GUIDO MANTEGNA */}
          <GuidoHeadline scrollYProgress={scrollYProgress} />
        </div>
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
        {/* GRADIENT MASK */}
        <div className="absolute -bottom-[175px] h-[175px] w-full bg-gradient-to-b from-black to-transparent -z-10" />
        {/* H1 MASK */}
        <motion.div
          className="absolute w-full h-full left-0 py-[4%] flex flex-col justify-center items-center h1-mask"
          style={{
            clipPath: h1ClipPath,
            ["--after-top" as any]: afterTopCSS,
          }}
        >
          <CodeLines codeLines={codeLines} className="text-white" />
          <GuidoHeadline isMask={true} scrollYProgress={scrollYProgress} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
