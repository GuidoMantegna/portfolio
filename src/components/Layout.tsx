import React, { useState } from "react"
import { motion } from "framer-motion"
interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className="container p-10 h-screen m-auto">
      <header className="flex justify-between">
        <button
          className="text-4xl font-black tracking-[-5px] GM-logo"
          onLoad={() => setIsLoaded(true)}
        >
          GM.
        </button>
        <nav className="flex gap-5 items-center">
          <a href="projects" className="text-2xl font-bold">
            PROJECTS
          </a>
          <a href="about" className="text-2xl font-bold">
            ABOUT
          </a>
          <a href="contact" className="text-2xl font-bold">
            CONTACT
          </a>
        </nav>
      </header>
      {children}
    </div>
  )
}

export default Layout
