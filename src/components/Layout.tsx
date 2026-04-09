import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
import { Button } from "./ui/Button"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = window.innerWidth < 768; // Simple check for mobile devices
  return (
    <div className="relative max-w-screen">
      {/* <header className="flex justify-between w-full absolute left-0 px-10 py-8 z-[1] bg-white">
        <a href="#home" className="text-4xl font-black tracking-[-5px] GM-logo">
          GM.
        </a>
        <nav className="flex gap-5 items-center">
          <a href="#projects" className="text-xl font-bold">
            PROJECTS
          </a>
          <a href="#about" className="text-xl font-bold">
            ABOUT
          </a>
          <a href="#contact" className="text-xl font-bold">
            CONTACT
          </a>
        </nav>
      </header> */}
      {children}
      <motion.footer
        className="absolute bottom-2 p-4 w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {/* {!isMobile && (

          <div className="flex items-center justify-center gap-4 mb-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/GuidoMantegna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://x.com/GuidoMantegna" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://x.com/GuidoMantegna" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaSquareXTwitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        )} */}
        <p className="text-xs font-light text-muted-foreground">Designed & developed by Guido Mantegna © - Buenos Aires, Argentina</p>
      </motion.footer>
    </div>
  )
}

export default Layout
