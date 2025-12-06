"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation, type PanInfo } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight, Zap, Search, BarChart, Globe, Target, Clock, Shield, TrendingUp, CheckCircle, Gauge } from "lucide-react"
import Image from "next/image"

const seoProjects = [
  {
    id: 1,
    title: "SEO Performance & Benefits",
    type: "benefits",
    benefits: [
      "95%+ Google Page Speed Score",
      "Mobile-First Indexing Ready",
      "Core Web Vitals Optimized",
      "Improved Search Rankings",
      "Higher Conversion Rates",
      "Better User Experience"
    ],
    metrics: [
      { label: "Performance", value: 97, color: "from-green-500 to-emerald-500" },
      { label: "Accessibility", value: 96, color: "from-blue-500 to-cyan-500" },
      { label: "Best Practices", value: 95, color: "from-purple-500 to-pink-500" },
      { label: "SEO Score", value: 98, color: "from-orange-500 to-yellow-500" },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "SEO Expertise & Services",
    type: "expertise",
    expertise: [
      {
        icon: <Search className="w-5 h-5" />,
        title: "Keyword Research",
        description: "Comprehensive keyword analysis and strategy",
        items: ["Competitor Analysis", "Search Volume", "Keyword Mapping", "Intent Optimization"]
      },
      {
        icon: <BarChart className="w-5 h-5" />,
        title: "Technical SEO",
        description: "Website infrastructure optimization",
        items: ["Site Architecture", "Schema Markup", "XML Sitemaps", "Canonical Tags"]
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "On-Page SEO",
        description: "Content and page optimization",
        items: ["Meta Tags", "Content Optimization", "Header Tags", "Internal Linking"]
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Off-Page SEO",
        description: "Backlink and authority building",
        items: ["Link Building", "Local SEO", "Social Signals", "Brand Mentions"]
      },
    ],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Completed SEO Projects",
    type: "projects",
    projects: [
      {
        title: "E-commerce SEO Optimization",
        description: "Increased organic traffic by 300% for major e-commerce brand",
        metrics: "+300% Traffic | +220% Conversions",
        tags: ["E-commerce", "Technical SEO", "Content Strategy"],
        demoLink: "https://example.com/ecommerce-seo",
        status: "Completed",
        color: "from-green-500/20 to-emerald-500/20"
      },
      {
        title: "Local Business SEO Campaign",
        description: "Achieved #1 ranking for 25+ local keywords in 3 months",
        metrics: "25+ #1 Rankings | 95% Visibility",
        tags: ["Local SEO", "Google My Business", "Citations"],
        demoLink: "https://example.com/local-seo",
        status: "Completed",
        color: "from-blue-500/20 to-cyan-500/20"
      },
      {
        title: "SaaS Company SEO Growth",
        description: "Generated 1500+ qualified leads through organic search",
        metrics: "1500+ Leads | 5x ROI",
        tags: ["SaaS", "Lead Generation", "Content Marketing"],
        demoLink: "https://example.com/saas-seo",
        status: "Completed",
        color: "from-orange-500/20 to-yellow-500/20"
      },
    ],
    color: "from-cyan-500/20 to-emerald-500/20",
  },
]

export default function SEOProjectsSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const controls = useAnimation()
  const [activeIndex, setActiveIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)

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
    },
    cardVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
    meterVariants = {
      hidden: { scaleX: 0 },
      visible: (custom: number) => ({
        scaleX: 1,
        transition: {
          duration: 1.2,
          delay: custom * 0.2,
          ease: "easeOut"
        }
      })
    }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % seoProjects.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + seoProjects.length) % seoProjects.length)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      prevSlide()
    } else if (info.offset.x < -threshold) {
      nextSlide()
    }
  }

  const getSlideIcon = (index: number) => {
    const icons = [
      <Gauge key="gauge" className="w-6 h-6 text-white" />,
      <Search key="search" className="w-6 h-6 text-white" />,
      <TrendingUp key="trending" className="w-6 h-6 text-white" />,
    ]
    return icons[index] || <TrendingUp className="w-6 h-6 text-white" />
  }

  const currentSlide = seoProjects[activeIndex]

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
          style={{ opacity: 1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            SEO <span className="text-gradient">Projects & Results</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Showcasing proven SEO strategies, technical optimizations, and measurable results
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="relative" ref={projectsRef}>
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

          <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
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

          {/* Slide Content with Swipe Support */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="grid md:grid-cols-2 gap-8 items-center project-card"
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.95 }}
            >
              <div className="order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                  style={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      {getSlideIcon(activeIndex)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold">{currentSlide.title}</h3>
                  </div>

                  {/* Slide 1: SEO Benefits */}
                  {currentSlide.type === "benefits" && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-500" />
                          SEO Benefits
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {currentSlide.benefits?.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-3 p-3 rounded-lg glass border border-white/10"
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              custom={idx}
                            >
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-sm md:text-base">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Slide 2: SEO Expertise */}
                  {currentSlide.type === "expertise" && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold flex items-center gap-2">
                          <Shield className="w-5 h-5 text-blue-500" />
                          Our SEO Expertise
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                          {currentSlide.expertise?.map((expert, idx) => (
                            <motion.div
                              key={idx}
                              className="p-4 rounded-xl glass border border-white/10"
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              custom={idx}
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                                  {expert.icon}
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-lg mb-1">{expert.title}</h5>
                                  <p className="text-gray-300 text-sm mb-2">{expert.description}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {expert.items.map((item, itemIdx) => (
                                      <span key={itemIdx} className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20">
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Slide 3: Completed Projects */}
                  {currentSlide.type === "projects" && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                          Success Stories
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                          {currentSlide.projects?.map((project, idx) => (
                            <motion.div
                              key={idx}
                              className="p-4 rounded-xl glass border border-white/10"
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              custom={idx}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-semibold text-lg">{project.title}</h5>
                                <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">
                                  {project.status}
                                </span>
                              </div>
                              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-primary">{project.metrics}</span>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIdx) => (
                                  <span key={tagIdx} className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <motion.a
                                href={project.demoLink}
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass bg-primary/10 hover:bg-primary/20 transition-colors w-full"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink size={16} />
                                View Project Demo
                              </motion.a>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className="order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="gradient-border p-1 rounded-2xl overflow-hidden"
                  style={{ opacity: 1 }}
                >
                  <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${currentSlide.color} p-6`}>
                    {/* Slide 1 Right Content: Google Page Speed Meters */}
                    {currentSlide.type === "benefits" && (
                      <div className="space-y-8">
                        <div className="text-center mb-6">
                          <h4 className="text-2xl font-bold mb-2">Google Page Speed Insights</h4>
                          <p className="text-gray-300">Performance metrics with 95+% scores</p>
                        </div>
                        
                        <div className="space-y-6">
                          {currentSlide.metrics?.map((metric, idx) => (
                            <div key={idx} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{metric.label}</span>
                                <motion.span 
                                  className="text-xl font-bold"
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.2 + 0.5 }}
                                >
                                  {metric.value}%
                                </motion.span>
                              </div>
                              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${metric.color} rounded-full origin-left`}
                                  variants={meterVariants}
                                  initial="hidden"
                                  animate="visible"
                                  custom={idx}
                                  style={{ transformOrigin: "left" }}
                                />
                              </div>
                              <div className="flex justify-between text-sm text-gray-400">
                                <span>0</span>
                                <span>50</span>
                                <span>100</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 p-4 glass rounded-lg border border-white/10">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-green-500" />
                            <div>
                              <h5 className="font-semibold">Performance Impact</h5>
                              <p className="text-sm text-gray-300">95+% scores improve user engagement and SEO rankings</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Slide 2 Right Content: Expertise Visualization */}
                    {currentSlide.type === "expertise" && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h4 className="text-2xl font-bold mb-2">SEO Process Flow</h4>
                          <p className="text-gray-300">Our comprehensive SEO strategy</p>
                        </div>
                        
                        <div className="relative h-64">
                          {/* Animated process flow */}
                          <motion.div
                            className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-xl"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                          />
                          
                          {currentSlide.expertise?.map((expert, idx) => {
                            const angle = (idx / (currentSlide.expertise?.length || 1)) * 360
                            const x = Math.cos((angle * Math.PI) / 180) * 100
                            const y = Math.sin((angle * Math.PI) / 180) * 100
                            
                            return (
                              <motion.div
                                key={idx}
                                className="absolute left-1/2 top-1/2 w-16 h-16 -ml-8 -mt-8"
                                initial={{ x: 0, y: 0 }}
                                animate={{ x, y }}
                                transition={{ delay: idx * 0.3, duration: 1, ease: "easeOut" }}
                              >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                  {expert.icon}
                                </div>
                              </motion.div>
                            )
                          })}

                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                              <Target className="w-10 h-10 text-white" />
                            </div>
                            <p className="mt-2 text-sm font-semibold">SEO Strategy</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Slide 3 Right Content: Projects Visualization */}
                    {currentSlide.type === "projects" && (
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h4 className="text-2xl font-bold mb-2">Project Results Overview</h4>
                          <p className="text-gray-300">Real results from completed SEO projects</p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {currentSlide.projects?.map((project, idx) => (
                            <motion.div
                              key={idx}
                              className={`p-4 rounded-xl bg-gradient-to-br ${project.color} border border-white/10`}
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.2 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold">{project.title}</h5>
                                <div className="text-xs px-2 py-1 rounded-full bg-white/10">
                                  {project.status}
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-300">Traffic Growth:</span>
                                  <span className="font-semibold text-green-400">+300%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-300">ROI:</span>
                                  <span className="font-semibold text-blue-400">5x</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-300">Rankings:</span>
                                  <span className="font-semibold text-yellow-400">25+ #1</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 glass rounded-lg border border-white/10 text-center">
                          <h5 className="font-semibold mb-2">Average Results Across All Projects</h5>
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-400">215%</div>
                              <div className="text-xs text-gray-400">Avg. Traffic Increase</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-400">4.2x</div>
                              <div className="text-xs text-gray-400">Avg. ROI</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {seoProjects.map((_, index) => (
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

          {/* Mobile Swipe Hint */}
          <div className="lg:hidden text-center mt-4">
            <p className="text-sm text-gray-400">Swipe left or right to navigate slides</p>
          </div>
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

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="glass p-5 rounded-xl hover:bg-card/30 transition-all"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-2">Performance Focused</h4>
            <p className="text-sm text-gray-400">95+% Google Page Speed scores ensure optimal performance and better rankings</p>
          </motion.div>

          <motion.div
            className="glass p-5 rounded-xl hover:bg-card/30 transition-all"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-2">Comprehensive SEO</h4>
            <p className="text-sm text-gray-400">Full-spectrum SEO services from technical to content optimization</p>
          </motion.div>

          <motion.div
            className="glass p-5 rounded-xl hover:bg-card/30 transition-all"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-2">Proven Results</h4>
            <p className="text-sm text-gray-400">Documented case studies showing significant traffic and revenue growth</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
