import { AnimatePresence, motion } from "framer-motion";

function SectionHeader({ section, sectionSubtitle }: { section: string; sectionSubtitle: string }) {
    return (<div className="flex gap-8 items-center">
        <AnimatePresence mode="popLayout">
            <div className="">
                <motion.h2
                    className="mb-2 block font-mono text-sm text-primary"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}

                >
                    {sectionSubtitle}
                </motion.h2>
                <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ y: -20, transition: { duration: 0.5 } }}
                    className="text-3xl font-bold tracking-tight sm:text-5xl uppercase"
                >
                    {section}
                </motion.div>
            </div>
        </AnimatePresence>
    </div>)
}

export { SectionHeader }