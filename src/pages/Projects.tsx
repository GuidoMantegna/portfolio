import MockedMobile from "../assets/images/mockups/MockedMobiles.png"
import { FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"
import { IoIosRocket } from "react-icons/io"

const Projects: React.FC = () => {
  return (
    <section
      className="h-screen flex items-center text-white relative bg-black"
      id="projects"
    >
      {/* <div className="mx-10 flex-1 relative">
        <h3 className="font-black text-6xl">Full-Stack Movie Rec. App</h3>
        <p className="stack mt-3 text-pink-400">
          mongo, express, react, node, typescript, tailwind, vite, mongoose
        </p>
        <p className="font-extralight text-sm leading-9 mt-6">
          Developed a dynamic full-stack app that enables users to request
          personalized movie recommendations based on their mood. With a sign-up
          feature, users can actively ask for or provide recommendations. Built
          using the MERN stack (MongoDB, Express, React, Node.js).
        </p>
        <div className="mt-10 font-light flex gap-6 underline">
          <a className="flex items-center gap-2" target="_blank" href="#">
            <IoIosRocket /> Webapp
          </a>
          <a className="flex items-center gap-2" target="_blank" href="#">
            <FaGithub /> Front-end
          </a>
          <a className="flex items-center gap-2" target="_blank" href="#">
            <FaGithub /> Back-end
          </a>
          <a className="flex items-center gap-2" target="_blank" href="#">
            <IoDocumentText /> API Docs
          </a>
        </div>
      </div>
      <div className="flex-1 h-full flex items-center justify-center projects-mockups">
        <img
          src={MockedMobile}
          alt="Mocked Mobiles"
          className="h-3/4 relative"
        />
      </div> */}
    </section>
  )
}

export default Projects
