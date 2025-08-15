import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";

interface ProjectInfo {
  title: string;
  description: string;
  stack: string;
  links: { name: string; url: string; type: string }[];
}

const Project: React.FC<ProjectInfo> = ({
  title,
  description,
  stack,
  links,
}) => {
  return (
    <motion.div
      className="flex-1 p-12 flex flex-col justify-center"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white"
      >
        <h2 className="font-black text-5xl">{title}</h2>
        <p className="stack mt-3 text-pink-400 text-sm">{stack}</p>
        <p className="font-extralight text-sm leading-7 mt-6">{description}</p>
        <div className="mt-10 font-light flex gap-6 text-sm flex-wrap">
          {links.map((link) => (
            <a
              key={link.name}
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              href={link.url}
            >
              {link.type === "deploy" && <IoIosRocket />}
              {link.type === "repo" && <FaGithub />}
              {link.type === "docs" && <IoDocumentText />}
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
