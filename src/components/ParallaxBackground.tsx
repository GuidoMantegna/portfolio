import { motion, useScroll, useTransform } from "motion/react"

export function ParallaxBackground() {
  const { scrollY, scrollYProgress } = useScroll()

  const vh = window.innerHeight
  const homeEnd = vh * 2.5 // Home section is h-[250vh]

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const rotation = useTransform(scrollYProgress, [0, 1], ["0deg", "10deg"])

  // Fade in the entire pattern after the Home section ends
  const patternReveal = useTransform(scrollY, [homeEnd * 0.85, homeEnd], [0, 1])

  // Colorful layer opacity, ramping up after Home
  const colorOpacity = useTransform(
    scrollY,
    [homeEnd, homeEnd + vh, homeEnd + vh * 2],
    [0.15, 0.4, 0.6]
  )

  // Mask expands only after Home section
  const maskSize = useTransform(scrollY, [homeEnd, homeEnd + vh * 1.5], ["0%", "150%"])
  const maskImage = useTransform(
    maskSize,
    (size) => `radial-gradient(ellipse ${size} ${size} at 80% 20%, black 40%, transparent 70%)`
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-background" />

      {/* Pattern layers — hidden during Home, revealed after */}
      <motion.div className="absolute inset-0" style={{ opacity: patternReveal }}>
        {/* Grayscale pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/pattern-c.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // y: backgroundY,
            rotate: rotation,
            scale,
            filter: "grayscale(100%)",
            opacity: 0.08,
          }}
        />

        {/* Colorful pattern (masked reveal) */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/pattern-c.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // y: backgroundY,
            rotate: rotation,
            scale,
            opacity: colorOpacity,
            maskImage,
            WebkitMaskImage: maskImage,
          }}
        />
      </motion.div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Animated glow spots */}
      <motion.div
        className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.2 200 / 0.15) 0%, transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.2 330 / 0.15) 0%, transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
        }}
      />
    </div>
  )
}
