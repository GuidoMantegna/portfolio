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
import { Send, CheckCircle } from "lucide-react";
import { HARD_SKILLS, SOCIAL_LINKS } from "../lib/constants";

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
        {SOCIAL_LINKS.map((link, index) => {
          if (!isMobile && link.name === "Email") return
          return (
            <motion.li
              className="flex items-center gap-4 custom-backdrop px-2 py-4 rounded-lg mb-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={link.name}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                {link.name === "Email" && <FaEnvelope className="h-5 w-5 text-blue-500" />}
                {link.name === "LinkedIn" && <FaLinkedin className="h-5 w-5 text-blue-500" />}
                {link.name === "GitHub" && <FaGithub className="h-5 w-5 text-blue-500" />}
                {link.name === "X" && <FaSquareXTwitter className="h-5 w-5 text-blue-500" />}
              </div>
              <div>
                <p className="text-sm font-extralight text-foreground text-slate-400">{link.name}</p>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-light">
                  {link.info}
                </a>
              </div>
            </motion.li>
          )
        })}
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
            <Card className="border-neutral-700/25 custom-backdrop py-2">
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState("About")

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  // Track scroll y position on this section
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setSection(latest < 0.5 ? "About" : "Contact")
  });

  return (
    <motion.section
      id="about"
      className="h-[200vh] flex justify-center items-start text-white relative"
      ref={sectionRef}
    >
      <motion.div
        className="w-[90%] lg:w-3/4 sticky top-0 h-screen flex flex-col justify-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
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
          {/* {section === "About" && (
            <div className="flex-1">
              <img alt="GM Pic" src={Avatar} className="max-w-[150px] lg:max-w-[200px] m-auto" />
            </div>
          )} */}
        </div>
        {section === "About" ? (

          <div>
            <div className="mt-6 leading-5 font-extralight text-sm custom-backdrop p-2 lg:p-6 rounded-lg lg:leading-6">
              <p>I'm a <b>software engineer</b> specializing in <b>frontend development</b>, with a strong background in the <b>React.js</b> ecosystem.
                I have solid leadership skills and actively drive projects forward, focusing on <b>architecture</b>, <b>performance</b>, and the adoption of modern tools while ensuring best development practices are followed. I also design and leverage <b>AI Development</b> workflows to improve engineering productivity.
              </p>
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
