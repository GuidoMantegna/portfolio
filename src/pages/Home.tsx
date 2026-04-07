import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
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

  // Parallax transforms for background layers
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  
  // Smooth spring animations for parallax
  const smoothParallaxY1 = useSpring(parallaxY1, { stiffness: 100, damping: 30 });
  const smoothParallaxY2 = useSpring(parallaxY2, { stiffness: 80, damping: 25 });
  const smoothParallaxY3 = useSpring(parallaxY3, { stiffness: 120, damping: 35 });
  
  // Background scale and opacity for depth effect
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const smoothBgScale = useSpring(bgScale, { stiffness: 100, damping: 30 });
  
  // Gradient overlay opacity for smooth transition
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.6, 0.85]);

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
        {/* Parallax Background Container */}
        <div className="parallax-container sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
          {/* Base layer - slowest parallax */}
          <motion.div
            className="parallax-layer parallax-layer-base absolute inset-0 w-full h-[130%]"
            style={{
              y: smoothParallaxY3,
              scale: smoothBgScale,
            }}
          />
          
          {/* Middle layer - medium parallax with geometric shapes */}
          <motion.div
            className="parallax-layer parallax-layer-mid absolute inset-0 w-full h-[150%]"
            style={{
              y: smoothParallaxY1,
            }}
          >
            {/* Floating geometric elements */}
            <motion.div 
              className="absolute top-[10%] right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-900/20 to-transparent blur-xl"
              style={{ y: smoothParallaxY2 }}
            />
            <motion.div 
              className="absolute top-[30%] left-[10%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-rose-900/15 to-transparent blur-lg"
              style={{ y: smoothParallaxY1 }}
            />
            <motion.div 
              className="absolute bottom-[20%] right-[25%] w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-bl from-indigo-900/20 to-transparent blur-2xl"
              style={{ y: smoothParallaxY3 }}
            />
          </motion.div>
          
          {/* Top layer - fastest parallax with grid lines */}
          <motion.div
            className="parallax-layer parallax-layer-top absolute inset-0 w-full h-[160%]"
            style={{
              y: smoothParallaxY2,
            }}
          />
          
          {/* Progressive gradient overlay for smooth mask integration */}
          <motion.div
            className="absolute inset-0 w-full h-full parallax-gradient-overlay"
            style={{
              opacity: overlayOpacity,
            }}
          />
        </div>

        <motion.div className="sticky top-0 h-[100vh] py-[4%] flex flex-col justify-center z-10">
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
            {/* Parallax background visible through mask */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 w-full h-[130%] parallax-mask-bg"
                style={{
                  y: smoothParallaxY1,
                  scale: smoothBgScale,
                }}
              />
              {/* Floating elements in mask area */}
              <motion.div 
                className="absolute top-[15%] right-[20%] w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 blur-xl"
                style={{ y: smoothParallaxY2 }}
              />
              <motion.div 
                className="absolute bottom-[30%] left-[15%] w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-500/25 to-cyan-500/15 blur-2xl"
                style={{ y: smoothParallaxY3 }}
              />
            </div>
            
            <motion.div className="code-lines-numbers absolute left-8 flex flex-col text-gray-900 text-xs gap-2 text-right h-[75%] overflow-hidden mask z-10">
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
            <motion.h1 className={`h1-text z-10 relative`}>
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
