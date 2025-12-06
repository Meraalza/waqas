"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation, type PanInfo } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const seoSlides = [
  {
    title: "SEO Benefits",
    description: "Unlock the power of search engine optimization for your business with our comprehensive SEO services.",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "SEO Expertise",
    description: "Our team brings years of experience in search engine optimization, content strategy, and technical SEO implementation.",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Completed Projects",
    description: "Explore our portfolio of successful SEO implementations that have driven significant growth for our clients.",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

// Projects data from the knowledge base
const projects = [
  {
    title: "eBikes & Accessories Affiliate Website",
    description:
      "An affiliate marketing website specializing in electric bikes and related accessories with comprehensive product reviews and recommendations.",
    image: "/images/ebikes.PNG",
    links: {
      demo: "https://ecobikes.vercel.app/",
    },
    features: ["Product Catalog", "Reviews", "Affiliate Links", "Buying Guides"],
  },
  {
    title: "Video To GIF Converter",
    description:
      "Convert Videos into high-quality animated GIFs instantly.",
    image: "/images/video-to-gif.PNG",
    links: {
      demo: "https://makegifs.online/",
    },
    features: ["Project Showcase", "Skills Display", "Contact Form", "Responsive Design"],
  },
  {
    title: "Code & Data Tools",
    description:
      "A collection of utility tools for developers including various code and data processing utilities.",
    image: "/images/devbuddy.png",
    links: {
      demo: "https://devbuddy.online/",
    },
    features: ["Code Utilities", "Data Tools", "Formatting", "Conversion Tools"],
  },
]

export default function SeoProjectsSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % seoSlides.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + seoSlides.length) % seoSlides.length)
  }

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      prevSlide()
    } else if (info.offset.x < -threshold) {
      nextSlide()
    }
  }

  return (
    <section id="seo-projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            SEO <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Discover how our SEO expertise has transformed digital presence and driven measurable growth
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex absolute top-1/2 -left-12 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -right-12 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Slider Content with Swipe Support */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="grid md:grid-cols-2 gap-8 items-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.95 }}
            >
              {/* Slide 1: SEO Benefits + PageSpeed Metrics */}
              {activeIndex === 0 && (
                <>
                  <div className="order-2 md:order-1">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">SEO Benefits</h3>
                      </div>

                      <motion.ul className="space-y-4">
                        {[
                          "Higher search rankings and visibility",
                          "Increased organic traffic and qualified leads",
                          "Improved user experience and site performance",
                          "Enhanced brand credibility and authority",
                          "Sustainable long-term digital growth"
                        ].map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <div className="mt-1 w-2 h-2 rounded-full bg-primary"></div>
                            <span>{benefit}</span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      <motion.div 
                        className="glass p-4 rounded-lg mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <h4 className="font-bold mb-2">ROI Focused Approach</h4>
                        <p className="text-gray-300 text-sm">
                          Our SEO strategies are designed to deliver measurable business outcomes, not just traffic numbers. We focus on conversions, lead quality, and sustainable growth that directly impacts your bottom line.
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="order-1 md:order-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="gradient-border p-1 rounded-2xl overflow-hidden"
                    >
                      <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${seoSlides[activeIndex].color} p-4`}>
                        <div className="neomorphic overflow-hidden rounded-lg bg-card p-6 h-full flex flex-col items-center justify-center">
                          <h4 className="text-lg font-bold mb-6 text-center">Google PageSpeed Insights</h4>
                          
                          {/* PageSpeed Metrics */}
                          <div className="w-full space-y-8">
                            {/* Mobile Score */}
                            <div className="text-center">
                              <div className="text-sm font-medium mb-2 flex items-center justify-center gap-2">
                                <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
                                Mobile Performance
                              </div>
                              <div className="relative w-40 h-40 mx-auto">
                                <svg className="w-full h-full transform -rotate-90">
                                  <circle
                                    cx="80"
                                    cy="80"
                                    r="65"
                                    fill="none"
                                    stroke="#374151"
                                    strokeWidth="12"
                                    className="text-gray-700"
                                  />
                                  <motion.circle
                                    cx="80"
                                    cy="80"
                                    r="65"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="12"
                                    strokeDasharray={2 * Math.PI * 65}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 65 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 65 * (1 - 96/100) }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                  />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                  <div className="text-4xl font-bold text-green-400">96</div>
                                  <div className="text-sm text-gray-400 mt-1">/100</div>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400 mt-2">Lightning fast mobile experience</p>
                            </div>
                            
                            {/* Desktop Score */}
                            <div className="text-center">
                              <div className="text-sm font-medium mb-2 flex items-center justify-center gap-2">
                                <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
                                Desktop Performance
                              </div>
                              <div className="relative w-40 h-40 mx-auto">
                                <svg className="w-full h-full transform -rotate-90">
                                  <circle
                                    cx="80"
                                    cy="80"
                                    r="65"
                                    fill="none"
                                    stroke="#374151"
                                    strokeWidth="12"
                                    className="text-gray-700"
                                  />
                                  <motion.circle
                                    cx="80"
                                    cy="80"
                                    r="65"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="12"
                                    strokeDasharray={2 * Math.PI * 65}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 65 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 65 * (1 - 98/100) }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                                  />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                  <div className="text-4xl font-bold text-green-400">98</div>
                                  <div className="text-sm text-gray-400 mt-1">/100</div>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400 mt-2">Optimized desktop experience</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}

              {/* Slide 2: SEO Expertise */}
              {activeIndex === 1 && (
                <>
                  <div className="order-2 md:order-1">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">SEO Expertise</h3>
                      </div>

                      <motion.p className="text-gray-300">
                        Our comprehensive SEO approach combines technical excellence with strategic content planning to deliver sustainable growth and measurable ROI for businesses of all sizes.
                      </motion.p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Technical SEO & Site Architecture",
                          "Keyword Research & Content Strategy",
                          "On-Page & UX Optimization",
                          "Link Building & Authority Development",
                          "Local SEO & Google Business Profile",
                          "E-commerce SEO & Product Schema"
                        ].map((expertise, idx) => (
                          <motion.div
                            key={idx}
                            className="glass p-4 rounded-lg flex items-start gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <div className="mt-1 w-2 h-2 rounded-full bg-primary"></div>
                            <span className="font-medium">{expertise}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="space-y-4 pt-4 border-t border-white/10">
                        <div>
                          <h4 className="text-lg font-medium mb-2">Our Methodology</h4>
                          <p className="text-gray-300">
                            We employ a data-driven approach that begins with comprehensive audits and competitor analysis, followed by strategic implementation and continuous optimization based on performance metrics.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2">Growth Timeline</h4>
                          <div className="space-y-3">
                            {[
                              "Months 1-2: Technical foundation & quick wins",
                              "Months 3-4: Content expansion & authority building",
                              "Months 5-6: Significant traffic growth begins",
                              "Months 7+: Sustainable long-term visibility"
                            ].map((phase, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                <div className="mt-1 w-2 h-2 rounded-full bg-primary"></div>
                                <span>{phase}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="order-1 md:order-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="gradient-border p-1 rounded-2xl overflow-hidden"
                    >
                      <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${seoSlides[activeIndex].color} p-4`}>
                        <div className="neomorphic overflow-hidden rounded-lg bg-card p-6 h-full flex flex-col items-center justify-center">
                          <div className="text-center mb-8">
                            <h4 className="text-xl font-bold mb-2">SEO Impact Metrics</h4>
                            <p className="text-gray-400">Typical results within 6-12 months</p>
                          </div>
                          
                          {/* SEO Metrics */}
                          <div className="w-full space-y-6">
                            <div className="space-y-4">
                              {[
                                { label: "Organic Traffic Growth", value: 185, color: "bg-green-500/20 border-green-500 text-green-400" },
                                { label: "Top 3 Rankings", value: 142, color: "bg-blue-500/20 border-blue-500 text-blue-400" },
                                { label: "Conversion Rate", value: 34, color: "bg-purple-500/20 border-purple-500 text-purple-400" },
                                { label: "Bounce Rate Reduction", value: 28, color: "bg-cyan-500/20 border-cyan-500 text-cyan-400" }
                              ].map((metric, idx) => (
                                <motion.div
                                  key={idx}
                                  className="space-y-2"
                                  initial={{ opacity: 0, x: 50 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + idx * 0.2 }}
                                >
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-300">{metric.label}</span>
                                    <span className={`font-bold ${metric.color.split(' ')[2]}`}>+{metric.value}{metric.label.includes('Rate') ? '%' : ''}</span>
                                  </div>
                                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                      className={`h-full ${metric.color.split(' ')[0]}`}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${Math.min(metric.value, 100)}%` }}
                                      transition={{ duration: 1.5, delay: 0.5 + idx * 0.2 }}
                                    ></motion.div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}

              {/* Slide 3: Completed Projects */}
              {activeIndex === 2 && (
                <>
                  <div className="order-2 md:order-1">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold">Our SEO Success Stories</h3>
                      </div>

                      <motion.p className="text-gray-300">
                        Explore our portfolio of successful SEO implementations that have transformed digital visibility and driven significant business growth across multiple industries.
                      </motion.p>

                      <div className="space-y-6 pt-4 border-t border-white/10 max-h-[500px] overflow-y-auto pr-2">
                        {projects.map((project, idx) => (
                          <motion.div
                            key={idx}
                            className="glass p-5 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.2 }}
                          >
                            <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                            <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                            
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {project.features.slice(0, 4).map((feature, fidx) => (
                                <div key={fidx} className="flex items-center gap-1 text-xs">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            
                            <motion.a
                              href={project.links.demo}
                              className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
                              whileHover={{ x: 5 }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={14} />
                              View Live Demo
                            </motion.a>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="order-1 md:order-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="gradient-border p-1 rounded-2xl overflow-hidden"
                    >
                      <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${seoSlides[activeIndex].color} p-4`}>
                        <div className="neomorphic overflow-hidden rounded-lg bg-card p-6 h-full flex flex-col items-center justify-center">
                          <div className="text-center mb-8">
                            <h4 className="text-xl font-bold mb-2">Project Results</h4>
                            <p className="text-gray-400">Average improvements across our SEO projects</p>
                          </div>
                          
                          {/* Project Results */}
                          <div className="w-full space-y-6">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              {[
                                { label: "Traffic Increase", value: "174%", description: "Average organic traffic growth" },
                                { label: "Top 3 Rankings", value: "48", description: "Keywords ranking in positions 1-3" },
                                { label: "Revenue Impact", value: "2.3x", description: "Return on SEO investment" },
                                { label: "Domain Authority", value: "+18", description: "Average improvement" }
                              ].map((result, idx) => (
                                <motion.div
                                  key={idx}
                                  className="bg-card/50 p-4 rounded-lg border border-white/5"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.5 + idx * 0.1 }}
                                >
                                  <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                                  <div className="text-sm font-medium mb-1">{result.label}</div>
                                  <div className="text-xs text-gray-400">{result.description}</div>
                                </motion.div>
                              ))}
                            </div>
                            
                            <div className="text-center pt-4 border-t border-white/10 mt-4">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                              >
                                View Full Portfolio
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {seoSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-600 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="lg:hidden flex justify-center mt-6 gap-4">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
