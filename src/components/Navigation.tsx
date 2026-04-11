import { motion, useScroll, useTransform } from "motion/react"
import { useState, useEffect } from "react"

const navItems = [
    // { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home")
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

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.slice(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.nav
            className="fixed top-4 z-[100] w-full flex justify-center"
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
    )
}
