import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import GMLogo from "../assets/images/GM-logo.svg"

const navItems = [
    // { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home")
    const [isOpen, setIsOpen] = useState(false)
    const { scrollY } = useScroll()
    const navOpacity = useTransform(scrollY, [0, 100], [0, 1])
    const navBlur = useTransform(scrollY, [0, 100], [0, 10])

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.slice(1))
            const scrollPosition = window.scrollY + 200

            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent body scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.slice(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleMobileNavClick = (href: string) => {
        setIsOpen(false)
        setTimeout(() => scrollToSection(href), 300)
    }

    return (
        <>
            {/* Hamburger button — mobile only */}
            <motion.button
                className="fixed top-4 right-4 z-[200] flex sm:hidden items-center justify-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
            >
                <Menu size={26} />
            </motion.button>

            {/* Desktop pill nav */}
            <motion.nav
                className="fixed top-4 z-[100] w-full justify-center hidden sm:flex"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.div
                    className="flex items-center gap-1 rounded-full border border-border/50 bg-background/80 px-2 py-2"
                    style={{
                        opacity: navOpacity,
                        backdropFilter: `blur(${navBlur}px)`,
                    }}
                >
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {activeSection === item.href.slice(1) && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute inset-0 rounded-full bg-secondary"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </button>
                    ))}
                </motion.div>
            </motion.nav>

            {/* Mobile full-screen menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[300] bg-background flex flex-col px-6 pt-4 pb-10 sm:hidden"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 260 }}
                    >
                        {/* Top bar */}
                        <div className="flex items-center justify-between mb-12">
                            <button
                                className={`font-extrabold tracking-tighter text-3xl GM-logo`}
                            // onClick={() => { handleMobileNavClick("#home") }}
                            >
                                GM.
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-foreground p-1"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Nav items */}
                        <nav className="flex flex-col gap-6">
                            {navItems.map((item, i) => {
                                const isActive = activeSection === item.href.slice(1)
                                return (
                                    <motion.button
                                        key={item.name}
                                        initial={{ opacity: 0, x: -32 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07 + 0.05, type: "spring", damping: 24, stiffness: 260 }}
                                        onClick={() => handleMobileNavClick(item.href)}
                                        className="text-left leading-none"
                                    >
                                        <span className={`text-5xl font-bold uppercase tracking-tight text-foreground ${isActive ? "border-b-2 border-foreground pb-1" : ""}`}>
                                            {item.name}
                                        </span>
                                    </motion.button>
                                )
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
