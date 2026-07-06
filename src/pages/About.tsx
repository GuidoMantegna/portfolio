// LIBS
import React from "react";
import { motion } from "framer-motion";
import { HARD_SKILLS } from "../lib/constants";
// UI
import { SectionHOC } from "../components/SectionHOC";

const About: React.FC = () => {

  return (
    <SectionHOC section="About" sectionSubtitle="// Who am I?">
      <motion.div>
        <div className="mt-6 leading-6 font-extralight text-sm custom-backdrop p-2 lg:p-12 rounded-lg lg:leading-6">
          <p>
            I'm a <b>Product Engineer</b> specializing in <b>Frontend development</b>, with strong expertise in <b>React</b> ecosystem. 
            I also build custom <b>Full-Stack applications</b>, contributing across the entire product lifecycle: from requirements gathering and solution design to software architecture and development. <br />
            I have experience building products for the <b>fintech industry</b> and currently work as a Freelancer, delivering end-to-end products using a <b>Specification-Driven Development (SDD)</b> approach and <b>AI-assisted development</b> to accelerate delivery without compromising software quality, maintainability, or reliability.
          </p>
          
          {/* <p>I'm a <b>software engineer</b> specializing in <b>frontend development</b>, with a strong background in the <b>React.js</b> ecosystem.
            I have solid leadership skills and actively drive projects forward, focusing on <b>architecture</b>, <b>performance</b>, and the adoption of modern tools while ensuring best development practices are followed. I also design and leverage <b>AI Development</b> workflows to improve engineering productivity.
          </p> */}
          <ul className="flex flex-wrap justify-center mt-2 lg:mt-4 gap-2">
            {HARD_SKILLS.map((skill) => {
              if (!skill.badge) return null;
              return (
                <li>
                  <img src={skill.badge} alt={`${skill.skill} badge`} className="h-4 lg:h-5 inline" />
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </SectionHOC>
  );
};

export default About;
