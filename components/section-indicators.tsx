"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sections = [
  { id: "home", label: "Home", type: "anchor" },
  { id: "about", label: "About", type: "anchor" },
  { id: "services", label: "Services", type: "anchor" },
  { id: "projects", label: "Projects", type: "anchor" },
  { id: "ai-chat", label: "AI Chat", type: "anchor" },
  { id: "blog", label: "Blog", type: "page" },
  { id: "contact", label: "Contact", type: "anchor" },
]

export default function SectionIndicators() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // If we're on the blog page, set active section to blog
    if (pathname === "/blog") {
      setActiveSection("blog")
      return
    }

    const handleScroll = () => {
      // Only show indicators after scrolling a bit
      setIsVisible(window.scrollY > 300)

      // Find which section is currently in view
      const currentSection = sections.find((section) => {
        if (section.type === "page") return false
        
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Consider a section "active" when its top is near the viewport top
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <motion.div
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.5 }}
    >
      {sections.map((section) => {
        // For blog, use page navigation instead of anchor link
        if (section.id === "blog") {
          return (
            <Link
              key={section.id}
              href="/blog"
              className="group relative flex items-center"
              aria-label={`Navigate to ${section.label} page`}
            >
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id || pathname === "/blog"
                    ? "bg-primary shadow-[0_0_10px_rgba(var(--primary),0.7)]"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />

              {/* Label tooltip */}
              <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg pointer-events-none whitespace-nowrap border border-white/10 translate-x-2 group-hover:translate-x-0">
                {section.label}
              </div>
            </Link>
          )
        }

        // For all other sections, use anchor links
        return (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center"
            aria-label={`Navigate to ${section.label} section`}
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary shadow-[0_0_10px_rgba(var(--primary),0.7)]"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />

            {/* Label tooltip */}
            <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg pointer-events-none whitespace-nowrap border border-white/10 translate-x-2 group-hover:translate-x-0">
              {section.label}
            </div>
          </Link>
        )
      })}
    </motion.div>
  )
}
