import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Avatar from "../assets/images/avatar.png";

const HARD_SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Tailwind",
  "Git",
  "Node",
  "MongoDB",
  "Express",
  "Next.js",
  "Jest",
  "SASS",
  "Figma",
  "Chakra UI",
  "Jira",
  "Postman",
  "SCRUM",
  "NPM",
];

const About: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, []);
  return (
    <motion.section
      id="about"
      className="h-[200vh] flex items-center justify-center text-white"
    >
      <motion.div
        className="mx-[10%] w-3/4"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ amount: "all", once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex gap-8 items-center">
          <div className="">
            <h2 className="font-extralight text-2xl">About me</h2>
            <h3 className="font-black text-6xl mt-3">
              Hi! I'm <br />
              Guido Mantegna
            </h3>
          </div>
          <div className="flex-1">
            <img alt="GM Pic" src={Avatar} className="max-w-[230px] m-auto" />
          </div>
        </div>
        <div className="mt-12 font-extralight text-sm leading-7 text-justify">
          <p className="">
            <span className="font-medium">Senior Frontend Developer</span> with
            a thorough understanding of
            <span className="font-medium"> React</span> and its core principles,
            experienced in its most popular workflows, design patterns and
            libraries. Proficiency in developing
            <span className="font-medium"> end-to-end</span> applications using
            the <span className="font-medium">MERN</span> stack.
          </p>
          <p className="mt-4">
            Driven by a passion for{" "}
            <span className="font-medium">
              building intuitive and high-quality applications
            </span>
            , I prioritize{" "}
            <span className="font-medium">
              clean code practices and attention to UX/UI details
            </span>
            . Strong organizational skills, efficiently managing tasks and
            collaborating effectively with cross-functional teams thanks to
            cultivated interpersonal and communication abilities.
          </p>
        </div>
        {/* <motion.div className="overflow-hidden w-full mt-8">
          <motion.ul
            className="flex gap-4 text-xl text-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {HARD_SKILLS.map((skill) => (
              <motion.li
                key={skill}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div> */}
        <div className="overflow-hidden w-full mt-8 relative marquee">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [-0, -contentWidth] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate the list twice for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div ref={contentRef} className=" ">
                <ul key={i} className="flex gap-8 text-xl mr-8">
                  {HARD_SKILLS.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
