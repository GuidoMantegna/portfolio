import React, { useState } from "react"
import { motion } from "framer-motion"
interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <header className="flex justify-between w-full absolute left-0 p-10">
        {/* <header className="flex justify-between fixed w-full left-0 p-10"> */}
        <a href="#home" className="text-4xl font-black tracking-[-5px] GM-logo">
          GM.
        </a>
        <nav className="flex gap-5 items-center">
          <a href="#projects" className="text-2xl font-bold">
            PROJECTS
          </a>
          <a href="#about" className="text-2xl font-bold">
            ABOUT
          </a>
          <a href="#contact" className="text-2xl font-bold">
            CONTACT
          </a>
        </nav>
      </header>
      {children}
    </div>
  )
}

export default Layout
