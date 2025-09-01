"use client"

import { useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Building, Coins, BarChart } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const listItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
            ></motion.div>
          </motion.div>

          <div className="split-layout">
            <motion.div
              className="glass card-hover p-6 md:p-8 h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                  <Image
                    src="/images/waqas-bukhari.webp"
                    alt="Ibrahim Mustafa"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <motion.h3
                    className="text-xl md:text-2xl font-heading font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Who I Am
                  </motion.h3>
                  <motion.p
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    I'm Waqas Bukhari, a Web Developer and AI Automation Expert. I bridge the gap between a great online presence and a great business by building professional WordPress websites, custom web applications, and intelligent automation systems.
                  </motion.p>
                </div>
              </div>

              <motion.p
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                My expertise helps businesses streamline operations, enhance productivity, and connect with more customers through cutting-edge technology and strategic marketing.
              </motion.p>

              <motion.div
                className="mt-6 pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex flex-wrap gap-3">
                  {["AI", "Machine Learning", "Automation", "Data Science"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1 text-xs rounded-full glass border ${
                        index % 3 === 0
                          ? "border-primary/20 bg-primary/10"
                          : index % 3 === 1
                            ? "border-secondary/20 bg-secondary/10"
                            : "border-accent/20 bg-accent/10"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="neomorphic p-6 md:p-8 h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h3
                className="text-xl md:text-2xl font-heading font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Why Your Business Can't Afford to Wait
              </motion.h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start"
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <strong className="text-primary">The Performance Gap:</strong> A significant divide is forming in the market. Companies that leverage AI automation are consistently outperforming their competitors by 3-5x in operational efficiency.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <Building className="w-4 h-4 text-secondary" />
                  </span>
                  <span>
                    <strong className="text-secondary">The Bottom-Line Impact:</strong> This performance translates directly to your financials. Businesses that implement AI automation see an average of 40% reduction in costs and 50% gains in employee productivity.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <Coins className="w-4 h-4 text-accent" />
                  </span>
                  <span>
                    <strong className="text-accent">The Need for Strategy:</strong> The key to unlocking this value isn't just purchasing software. It's about strategic implementation.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  custom={3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <span className="inline-block mr-3 mt-1">
                    <BarChart className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <strong className="text-primary">Strategic Implementation:</strong> The key is not just adopting AI,
                    but strategically implementing it to transform core business processes
                  </span>
                </motion.li>
              </ul>

              <motion.div
                className="mt-6 gradient-border p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className="text-center text-sm italic">
                  "In today's market, AI automation is rapidly evolving from a competitive advantage to the new price of entry."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
