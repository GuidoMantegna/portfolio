import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoDocumentText } from "react-icons/io5"

const Contact: React.FC = () => {
  return (
    <section
      className="h-screen flex items-center text-white p-8 relative"
      id="contact"
    >
      <div className="mx-16">
        <h2 className="font-extralight text-2xl">About me</h2>
        <h3 className="font-black text-6xl mt-3">Let's keep in touch!</h3>

        <div className="mt-8">
          <ul className="font-extralight leading-9 text-2xl">
            <li>
              <a
                className="flex items-center gap-2"
                target="_blank"
                href="https://www.linkedin.com/in/guidomantegna/"
              >
                <FaLinkedin /> Linkedin
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2"
                href="mailto:mantegnaguido@gmail.com"
              >
                <FaEnvelope />
                Email
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2"
                target="_blank"
                href="https://x.com/GuidoMantegna"
              >
                <FaSquareXTwitter />
                Twitter/X
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2"
                target="_blank"
                href="https://github.com/GuidoMantegna"
              >
                <FaGithub />
                Github
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2" target="_blank" href="#">
                <IoDocumentText />
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="absolute bottom-0 p-4 w-full text-center">
        <p className="text-xs">Designed & developed by Guido Mantegna ❤️</p>
      </footer>
    </section>
  )
}

export default Contact
