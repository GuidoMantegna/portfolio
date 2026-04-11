// LIBS
import React from "react";
import { motion } from "framer-motion";
import { HARD_SKILLS } from "../lib/constants";
// UI
import { Badge } from "../components/ui/Badge";
import { SectionHOC } from "../components/SectionHOC";

const About: React.FC = () => {

  return (
    <SectionHOC section="About" sectionSubtitle="// Who am I?">
      <motion.div>
        <div className="mt-6 leading-6 font-extralight text-sm custom-backdrop p-2 lg:p-6 rounded-lg lg:leading-6">
          <p>I'm a <b>software engineer</b> specializing in <b>frontend development</b>, with a strong background in the <b>React.js</b> ecosystem.
            I have solid leadership skills and actively drive projects forward, focusing on <b>architecture</b>, <b>performance</b>, and the adoption of modern tools while ensuring best development practices are followed. I also design and leverage <b>AI Development</b> workflows to improve engineering productivity.
          </p>
          <div className="flex flex-wrap justify-center mt-2">
            {HARD_SKILLS.map((skill) => (
              <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary">
                {skill.badge ? <img src={skill.badge} alt={`${skill.skill} badge`} className="h-4 inline" /> : null}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionHOC>
  );
};

export default About;
