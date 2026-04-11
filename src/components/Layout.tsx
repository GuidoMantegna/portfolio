import React from "react"
import { motion } from "framer-motion"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative max-w-screen">
      {children}
      <motion.footer
        className="absolute bottom-2 p-4 w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="text-xs font-light text-muted-foreground">Designed & developed by Guido Mantegna © - Buenos Aires, Argentina</p>
      </motion.footer>
    </div>
  )
}

export default Layout
