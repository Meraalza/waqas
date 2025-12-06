"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation, type PanInfo } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight, Zap, TrendingUp, Cpu } from "lucide-react"
import Image from "next/image"

// --- Custom Data for SEO Slider (3 Slides Only) ---
const seoSlides = [
  {
    title: "SEO Benefits: Organic Growth & Authority",
    description: "Understand the core value of Search Engine Optimization for long-term business success.",
    type: "benefits",
    color: "from-green-500/20 to-teal-500/20",
    leftContent: [
      { icon: TrendingUp, text: "Increased Organic Traffic" },
      { icon: Zap, text: "Improved Website Authority" },
      { icon: Cpu, text: "Higher Conversion Rates" },
      { icon: ExternalLink, text: "Cost-Effective Long-Term Marketing" },
    ],
    rightContent: "Google PageSpeed Index Animation Placeholder",
  },
  {
    title: "Our SEO Expertise: Technical & Content Mastery",
    description: "A deep dive into the specific services and skills we utilize to drive exceptional SEO results.",
    type: "expertise",
    color: "from-blue-500/20 to-indigo-500/20",
    expertiseDetails: [
      { title: "Technical SEO", details: "Core Web Vitals, Schema Markup, Site Architecture, Mobile-First Indexing." },
      { title: "On-Page SEO", details: "Keyword Strategy, Content Optimization, Internal Linking, Title Tags & Meta Descriptions." },
      { title: "Off-Page SEO", details: "High-Quality Backlink Acquisition, Digital PR, Authority Building." },
      { title: "Content Strategy", details: "Topic Cluster Modeling, Search Intent Mapping, E-A-T Principles." },
    ],
  },
  {
    title: "Completed SEO Projects Showcase",
    description: "See the measurable results achieved for our clients with links to live demos.",
    type: "projects",
    color: "from-purple-500/20 to-pink-500/20",
    // Reuse original projects data but limit to 3 for simplicity and demo
    completedProjects: [
      {
        id: 1,
        name: "Adsense Revenue Calculator SEO",
        impact: "Achieved 100k+ organic monthly users.",
        demo: "https://informi.online/",
        tags: ["Keyword Research", "Technical Audit"],
      },
      {
        id: 2,
        name: "eBikes Affiliate Site SEO",
        impact: "Ranked #1 for 5+ high-volume keywords.",
        demo: "https://ecobikes.vercel.app/",
        tags: ["Affiliate SEO", "Content Strategy"],
      },
      {
        id: 3,
        name: "Video To GIF Tool SEO",
        impact: "Increased domain authority (DA) by 15 points.",
        demo: "https://makegifs.online/",
        tags: ["Link Building", "Performance Optimization"],
      },
    ],
  },
]

// The total number of slides is fixed at 3
const NUM_SLIDES = seoSlides.length

// --- Custom Components for Slides (Placeholder for Complex Animations) ---

/**
 * Placeholder for the Google PageSpeed meter animation.
 * This would typically use SVG/Canvas or more Framer Motion components
 * to animate the meter needle and score.
 */
const PageSpeedMeter = ({ score = 95 }) => (
  <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-xl border border-white/10 shadow-lg">
    <div className="w-32 h-16 relative overflow-hidden">
      {/* Half-circle gauge background */}
      <div className="w-32 h-32 absolute left-0 bottom-0 rounded-full bg-gray-700"></div>
      {/* Animated Meter Needle - Placeholder */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-1 h-16 origin-bottom rounded-full bg-green-400"
        initial={{ rotate: -90 }}
        animate={{ rotate: -90 + (score / 100) * 180 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
      />
      <div className="w-2 h-2 rounded-full bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
    </div>
    <div className="text-4xl font-extrabold mt-4 text-green-400">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {score}+
      </motion.span>
    </div>
    <p className="text-sm text-gray-400 mt-1">Google PageSpeed Score</p>
  </div>
)

/**
 * Placeholder for the SEO Expertise animation.
 * This component will display the details with a staggered animation.
 */
const ExpertiseDetails = ({ details }) => (
  <motion.div
    className="space-y-4"
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.2 } },
      hidden: {},
    }}
  >
    {details.map((item, index) => (
      <motion.div
        key={index}
        className="glass p-4 rounded-xl border border-indigo-400/20"
        variants={{
          hidden: { x: -20, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
      >
        <h4 className="text-lg font-semibold text-indigo-300">{item.title}</h4>
        <p className="text-sm text-gray-400 mt-1">{item.details}</p>
      </motion.div>
    ))}
  </motion.div>
)

/**
 * Component to display the Completed SEO Projects.
 */
const CompletedProjectsList = ({ projects }) => (
  <div className="space-y-4">
    {projects.map((project, index) => (
      <motion.div
        key={project.id}
        className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex justify-between items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.15 }}
      >
        <div>
          <h4 className="text-lg font-semibold">{project.name}</h4>
          <p className="text-sm text-gray-400">{project.impact}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-purple-600/30 text-purple-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-primary hover:text-secondary transition-colors text-sm"
        >
          Demo <ExternalLink size={14} />
        </a>
      </motion.div>
    ))}
  </div>
)


// --- Main Component: SEOSlider ---

export default function SEOSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  // Active index must be between 0 and NUM_SLIDES - 1 (i.e., 0, 1, 2)
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Custom variants for animation
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
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      x: -200,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  }
  
  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % NUM_SLIDES)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + NUM_SLIDES) % NUM_SLIDES)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      prevSlide()
    } else if (info.offset.x < -threshold) {
      nextSlide()
    }
  }
  
  const currentSlide = seoSlides[activeIndex]

  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case "benefits":
        return (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content: SEO Benefits */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-green-300">Core SEO Benefits</h3>
              <ul className="space-y-3">
                {currentSlide.leftContent.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <item.icon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Right Content: Google PageSpeed Meter Animation */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <PageSpeedMeter score={95} />
            </motion.div>
          </div>
        )
      case "expertise":
        return (
          <div className="grid md:grid-cols-1 gap-8">
             {/* SEO Expertise Details with Animation */}
            <ExpertiseDetails details={currentSlide.expertiseDetails} />
          </div>
        )
      case "projects":
        return (
          <div className="grid md:grid-cols-1 gap-8">
            {/* Completed Projects with Demo Links */}
            <CompletedProjectsList projects={currentSlide.completedProjects} />
          </div>
        )
      default:
        return null
    }
  }


  return (
    <section id="seo-slider" className="py-20 md:py-32 relative bg-gray-900">
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
          <motion.h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span className="text-gradient">SEO Projects</span> Showcase
          </motion.h2>
          <motion.p className="text-gray-300 max-w-2xl mx-auto">
            A three-step journey through the value, expertise, and proven results of our SEO strategy.
          </motion.p>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="hidden lg:flex absolute top-1/2 -left-12 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: -5 }}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1, x: 5 }}
              aria-label="Next Slide"
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
              exit="exit" // Use exit variant for AnimatePresence if wrapped, but here we use 'key' for remounting
              variants={cardVariants}
              className="project-card p-8 rounded-2xl glass border border-white/10 shadow-xl min-h-[400px] flex flex-col justify-center"
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.98 }}
            >
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${currentSlide.color}`}>
                <h3 className="text-3xl font-heading font-bold mb-2">{currentSlide.title}</h3>
                <p className="text-gray-300">{currentSlide.description}</p>
              </div>

              {renderSlideContent()}
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
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:bg-card/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
