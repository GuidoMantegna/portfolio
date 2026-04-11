// HOC for sections — handles scroll-driven parallax entry for all sections.
// `children` receive the parallax transform.
// `staticChildren` are rendered outside the transform (use for sticky/scroll-driven content like carousels).
import { ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SectionHeader } from "./ui/SectionHeader"

function SectionHOC({
    section,
    sectionSubtitle,
    children,
    staticChildren,
}: {
    section: string
    sectionSubtitle: string
    children: ReactNode
    staticChildren?: ReactNode
}) {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    // Content rises as it enters and gently continues upward — asymmetric for a modern feel.
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -25])
    // Quick fade-in on entry; stays fully visible once in view.
    const opacity = useTransform(scrollYProgress, [0, 0.18], [0, 1])

    return (
        <motion.section ref={sectionRef} id={section} className="flex justify-center items-start text-white relative h-fit py-10 lg:py-16">
            <div className="w-[90%] lg:w-3/4 flex flex-col justify-center">
                <motion.div style={{ y, opacity }}>
                    <SectionHeader section={section} sectionSubtitle={sectionSubtitle} />
                    {children}
                </motion.div>
                {staticChildren}
            </div>
        </motion.section>
    )
}

export { SectionHOC }
