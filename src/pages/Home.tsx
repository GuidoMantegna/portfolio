import React, { useEffect, useState } from "react"
import { motion } from "motion/react"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.1
    return {
      // dashArray: 200,
      // pathLength: 1,
      opacity: 1,
      transition: {
        // pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

const frontend = "<Front-end Developer/>".split("")

const Home: React.FC = () => {
  const [H1BackPosition, setH1BackPosition] = useState({ x: 0, y: 0 })
  const H1Ref = React.useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Get mouse position
    const setH1BG = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const YCenter = windowHeight / 2
      const XCenter = windowWidth / 2
      const isUp = y < YCenter
      const isLeft = x < XCenter

      setH1BackPosition({ x: isLeft ? -4 : 4, y: isUp ? 1 : -1 })
    }

    // Add event listener
    document.addEventListener("mousemove", setH1BG)

    // Remove event listener
    return () => {
      document.removeEventListener("mousemove", setH1BG)
    }
  }, [])

  return (
    <>
      <section className="h-screen flex items-center" id="home">
        <motion.div
          initial={{ y: "-20px" }}
          whileInView={{ y: "0" }}
          transition={{ type: "spring" }}
        >
          <h1
            ref={H1Ref}
            className={`text-[140px] leading-[110px] text-left font-extrabold py-[4%] ps-[5%] transition-all ease-linear duration-500`}
            style={{
              backgroundPositionX: `${H1BackPosition.x}%`,
              backgroundPositionY: `${H1BackPosition.y}%`,
            }}
          >
            Guido Mantegna.
            {/* <span className="block text-[60px] text-gray-950">{`<Front-end Developer/>`}</span> */}
            <span className="text-[60px] text-gray-950 flex">
              {frontend.map((el, i) => (
                <motion.p
                  variants={draw}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  className={el === "d" ? "pr-[15px]" : ""}
                >
                  {el}
                </motion.p>
              ))}
            </span>
          </h1>
        </motion.div>
      </section>
    </>
  )
}

export default Home
