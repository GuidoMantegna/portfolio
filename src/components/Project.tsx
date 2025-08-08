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
    <motion.div className="mx-10 flex-1 relative">
      <h3 className="font-black text-6xl">{title}</h3>
      <p className="stack mt-3 text-pink-400">{stack}</p>
      <p className="font-extralight text-sm leading-7 mt-6">{description}</p>
      <div className="mt-10 font-light flex gap-6 underline">
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
  );
};

export default Project;
