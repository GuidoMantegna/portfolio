import React, { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Avatar from "../assets/images/avatar.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoDocumentText } from "react-icons/io5"
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/TextArea";
import { Send, CheckCircle, MapPin, Mail } from "lucide-react";
// import { Github, Linkedin, Twitter } from "lucide-react";

const HARD_SKILLS = [
  // {skill: "HTML", badge: },
  // {skill: "CSS"},
  { skill: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" },
  { skill: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" },
  { skill: "React.js", badge: "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" },
  { skill: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" },
  { skill: "Tailwind", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" },
  { skill: "Node", badge: "https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" },
  { skill: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" },
  { skill: "Express", badge: "https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" },
  { skill: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" },
  { skill: "Jest", badge: "https://img.shields.io/badge/Jest-99424F?style=flat&logo=jest&logoColor=white" },
  { skill: "SASS", badge: "https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white" },
  { skill: "Figma", badge: "https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" },
  { skill: "Chakra UI", badge: "https://img.shields.io/badge/Chakra_UI-319795?style=flat&logo=chakra-ui&logoColor=white" },
  { skill: "Jira", badge: "https://img.shields.io/badge/Jira-0052CC?style=flat&logo=jira&logoColor=white" },
  { skill: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C33?style=flat&logo=postman&logoColor=white" },
  // { skill: "SCRUM", badge: "https://img.shields.io/badge/SCRUM-000000?style=flat&logo=scrum&logoColor=white" },
  // { skill: "NPM", badge: "https://img.shields.io/badge/NPM-C10000?style=flat&logo=npm&logoColor=white" },
];

function ContactMobile() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  const isMobile = window.innerWidth < 768; // Example breakpoint for mobile devices

  return (
    <div className="flex justify-center gap-6 mt-6">
      <ul className="mt-6 flex flex-col w-full max-w-md">
        {isMobile && (

          <li className="flex items-center gap-4 bg-neutral-700/25 bg-opacity-50 backdrop-blur-md px-2 py-4 rounded-lg mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
              <FaEnvelope className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-extralight text-foreground text-slate-400">Email</p>
              <a href="mailto:mantegnaguido@gmail.com" className="text-sm text-foreground font-light">
                mantegnaguido@gmail.com
              </a>
            </div>
          </li>
        )}
        <li className="flex items-center gap-4 bg-neutral-700/25 bg-opacity-50 backdrop-blur-md px-2 py-4 rounded-lg mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
            <FaLinkedin className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-extralight text-foreground text-slate-400">LinkedIn</p>
            <a href="https://linkedin.com/in/mantegnaguido" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-light">
              /in/mantegnaguido
            </a>
          </div>
        </li>
        <li className="flex items-center gap-4 bg-neutral-700/25 bg-opacity-50 backdrop-blur-md px-2 py-4 rounded-lg mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
            <FaGithub className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-extralight text-foreground text-slate-400">GitHub</p>
            <a href="https://github.com/mantegnaguido" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-light">
              /mantegnaguido
            </a>
          </div>
        </li>
        <li className="flex items-center gap-4 bg-neutral-700/25 bg-opacity-50 backdrop-blur-md px-2 py-4 rounded-lg mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
            <FaSquareXTwitter className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-extralight text-foreground text-slate-400">Twitter</p>
            <a href="https://twitter.com/mantegnaguido" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-light">
              /mantegnaguido
            </a>
          </div>
        </li>
      </ul>
      {!isMobile && (
        <>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-neutral-700/25 bg-neutral-900/25 backdrop-blur-md py-2">
              <CardContent className="p-2">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="mb-4 h-16 w-16 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. {"I'll"} get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="lg:space-y-2">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="lg:space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="border-neutral-700/25 bg-neutral-900/25"
                        />
                      </div>
                      <div className="lg:space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="border-neutral-700/25 bg-neutral-900/50"
                        />
                      </div>
                    </div>
                    <div className="lg:space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        required
                        className="border-neutral-700/25 bg-neutral-900/50"
                      />
                    </div>
                    <div className="lg:space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={3}
                        required
                        className="resize-none border-neutral-700/25 bg-neutral-900/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="h-4 w-4 rounded-full border-2 border-background border-t-transparent"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </>
      )
      }
    </div>
  )
}

const About: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [section, setSection] = useState("About")
  const isMobile = window.innerWidth < 768; // Example breakpoint for mobile devices

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, []);

  const { scrollYProgress, scrollY } = useScroll({
    target: sectionRef,
    // offset: ["start start", "end end"],
  });

  // Track scroll y position on this section
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setSection(latest < 0.5 ? "About" : "Contact")
  });

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <motion.section
      id="about"
      className="h-[150vh] flex items-center justify-center text-white relative"
      ref={sectionRef}
    >
      <motion.div
        className="w-[90%] lg:w-3/4 sticky top-10"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ amount: "all", once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex gap-8 items-center">
          <AnimatePresence mode="popLayout">
            <div className="">
              {section === "About" && (
                <motion.h2
                  key="about"
                  className="font-extralight text-2xl mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}

                >
                  {section} me
                </motion.h2>
              )}
              <motion.div
                className=""
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ y: -20, transition: { duration: 0.5 } }}
                key={section}
              >
                <span className="text-lg">Hi! I'm</span> <br />
                <h3
                  className="font-black text-6xl GM-logo -dark"
                >
                  GM
                </h3>
              </motion.div>
              {section === "Contact" && (
                <motion.h2
                  key="contact"
                  className="font-extralight text-xl mt-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  Get in touch!
                </motion.h2>
              )}
            </div>
          </AnimatePresence>
          {section === "About" && (
            <div className="flex-1">
              <img alt="GM Pic" src={Avatar} className="max-w-[150px] lg:max-w-[200px] m-auto" />
            </div>
          )}
        </div>
        {section === "About" ? (

          <div>
            <div className="mt-6 leading-5 font-extralight text-sm bg-black/10 backdrop-blur-md p-2 rounded-lg">
              <p>I'm a software engineer specializing in frontend development, with a strong background in the React.js ecosystem.
                I have solid leadership skills and actively drive projects forward, focusing on architecture, performance, and the adoption of modern tools while ensuring best development practices are followed. I also design and leverage AI Development workflows to improve engineering productivity.
              </p>
              {/* <p className="">
                <span className="font-medium">Senior Frontend Developer</span> with
                a thorough understanding of
                <span className="font-medium"> React</span> and its core principles,
                experienced in its most popular workflows, design patterns and
                libraries. Proficiency in developing
                <span className="font-medium"> end-to-end</span> applications using
                the <span className="font-medium">MERN</span> stack.
              </p>
              <p className="mt-4">
                Driven by a passion for{" "}
                <span className="font-medium">
                  building intuitive and high-quality applications
                </span>
                , I prioritize{" "}
                <span className="font-medium">
                  clean code practices and attention to UX/UI details
                </span>
                . Strong organizational skills, efficiently managing tasks and
                collaborating effectively with cross-functional teams thanks to
                cultivated interpersonal and communication abilities.
              </p> */}
              <div className="flex flex-wrap justify-center mt-2">
                {HARD_SKILLS.map((skill) => (
                  <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary">
                    {skill.badge ? <img src={skill.badge} alt={`${skill.skill} badge`} className="h-4 inline" /> : null}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Contact Form */}
            <ContactMobile />
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default About;
