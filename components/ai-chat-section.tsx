"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Send, Bot, User, Sparkles, RefreshCw, Search, Zap, Link, Globe } from "lucide-react"
import Image from "next/image"

// Predefined chat messages
const initialMessages = [
  {
    content: "Hi! I'm your SEO & Web Performance Assistant. Ask me anything about Syed Muhammad Waqas's SEO expertise, ranking strategies, PageSpeed optimization, or web development skills!",
  },
]

const experienceResponses = [
  {
    content: `Syed Muhammad Waqas has **5+ years of proven SEO & Web Development experience**:

**Freelance SEO Expert & Full-Stack Developer** (2020–Present)
• Ranked 50+ websites in top 10 Google positions
• Achieved 95%–100% Google PageSpeed scores on 100+ projects
• Fixed thousands of Google Search Console errors (crawl, indexing, mobile usability, Core Web Vitals)
• Built & optimized 40+ WordPress and Next.js websites
• Mastered fast indexing techniques – new pages indexed in under 24 hours
• Removed spam/backlink penalties and recovered lost traffic for multiple sites
• Expert in schema markup, header tags, internal linking, and technical audits`
  }
]

const skillsResponses = [
  {
    content: `Waqas specializes in real, results-driven SEO & development:

**Core SEO Skills**
• Advanced Keyword Research & Competitor Analysis
• Google Search Console & Analytics Mastery
• Technical SEO Audits & Error Resolution
• Schema Markup (JSON-LD) Implementation
• Core Web Vitals & PageSpeed Optimization (95%–100%)
• Fast Indexing + Spammy Page Unindexing
• High-Quality Link Building & Outreach

**Web Development**
• WordPress + Elementor (Custom Themes & Plugins)
• Next.js + React Applications
• Vercel & GitHub Deployment
• Clean, Semantic HTML/CSS/JS

**Content & Strategy**
• 100% Unique, Human-Written, AI-Undetectable Content
• On-Page SEO Optimization
• Conversion-Focused Copywriting

Tools: Ahrefs, SEMrush, Screaming Frog, GSC, GA4, PageSpeed Insights, Surfer SEO, Rank Math, Yoast, AI tools (used smartly, never for final content)`
  }
]

const projectResponses = [
  {
    content: `Here are some of Waqas's successful SEO & web projects:

**Local Business SEO Success**
→ Took a Karachi-based client from 0 to 3,000+ monthly organic visitors in 6 months
→ #1–3 rankings for 50+ high-competition local keywords

**E-commerce Site Recovery**
→ Recovered a penalized online store – traffic restored +300% in 4 months
→ Removed manual penalty + cleaned toxic backlinks

**Next.js Portfolio & Tools**
→ https://waqasbukhari.vercel.app (this site – 99/100 PageSpeed mobile)
→ Multiple client sites scoring 95–100 on PageSpeed (WordPress & Next.js)

**Speed Optimization Projects**
→ Converted slow WordPress sites (40–60 scores) → 95–100 in under 7 days
→ Implemented lazy loading, WebP, caching, CDN, code splitting

Every project is backed by data, screenshots, and real ranking improvements.`
  }
]

// Updated responses for the new service cards
const seoExpertiseResponses = [
  {
    role: "assistant",
    content: `Yes! I specialize in complete SEO domination:

• Full Technical + On-Page + Off-Page SEO
• Keyword research with commercial intent
• Site structure & internal linking strategy
• Content gap analysis & optimization
• Monthly ranking & traffic reports
• White-hat link building that actually works
• Guaranteed traffic growth or work until achieved

Currently helping businesses in Pakistan, USA, UK & UAE rank higher and get more customers.

Ready to 10x your organic traffic? Let’s talk strategy!`
  }
]

const technicalSEOResponses = [
  {
    role: "assistant",
    content: `I fix everything Google cares about:

Core Web Vitals Optimization (LCP, CLS, FID/INP)
• 95%–100% PageSpeed scores (mobile & desktop)
• Crawl error & indexing issue resolution
• XML sitemaps, robots.txt, canonical tags
• Schema markup (FAQ, Product, LocalBusiness, Article)
• Mobile usability & HTTPS fixes
• Image optimization, lazy loading, font optimization
• Migration without traffic loss

Most sites see massive improvements within 7–14 days.

Send me your URL and I’ll give you a free mini-audit!`
  }
]

const linkBuildingResponses = [
  {
    role: "assistant",
    content: `My link building is safe, powerful, and sustainable:

• Guest posts on real authority sites (DA40–DR80+)
• Niche edits & curated links
• HARO (Help A Reporter Out) responses
• Resource page link building
• Broken link building
• Skyscraper technique
• Zero PBNs or spam – only Google-safe methods

Average result: +15–30 DR points in 4–6 months
Many clients saw 200%–500% traffic increase from links alone.

Want a custom link building strategy? Just say the word!`
  }
]

const formatMessage = (content: string) => {
  let formatted = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  formatted = formatted.replace(/^• (.+)$/gm, "<li class='ml-5'>$1</li>")
  formatted = formatted.replace(/(<li class='ml-5'>.*<\/li>\s*)+/gs, "<ul class='space-y-1 my-2'>$&</ul>")
  formatted = formatted.replace(/\n\n/g, "<br><br>")
  formatted = formatted.replace(/\n/g, "<br>")
  return formatted
}

export default function AIChatSection() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatMessagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Listen for service card clicks
  useEffect(() => {
    const handleServiceMessage = (event: any) => {
      const { message } = event.detail
      if (!message) return

      const userMessage = { role: "user", content: message }
      setMessages(prev => [...prev, userMessage])
      setIsTyping(true)

      setTimeout(() => {
        let response
        const lower = message.toLowerCase()

        if (lower.includes("seo ") || lower.includes("ranking") || lower.includes("traffic")) {
          response = seoExpertiseResponses[0]
        } else if (lower.includes("technical") || lower.includes("pagespeed") || lower.includes("core web") || lower.includes("speed")) {
          response = technicalSEOResponses[0]
        } else if (lower.includes("link building") || lower.includes("backlinks") || lower.includes("authority")) {
          response = linkBuildingResponses[0]
        } else {
          response = { role: "assistant", content: "I'm ready to help with your SEO! Tell me about your website and goals." }
        }

        setMessages(prev => [...prev, response])
        setIsTyping(false)
      }, 1500)
    }

    window.addEventListener("triggerChatMessage", handleServiceMessage)
    return () => window.removeEventListener("triggerChatMessage", handleServiceMessage)
  }, [])

  const scrollToBottom = () => {
    chatMessagesRef.current?.scrollTo({ top: chatMessagesRef.current.scrollHeight, behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const lower = input.toLowerCase()
      let response

      if (lower.includes("experience") || lower.includes("years")) {
        response = experienceResponses[0]
      } else if (lower.includes("skill") || lower.includes("expertise") || lower.includes("do")) {
        response = skillsResponses[0]
      } else if (lower.includes("project") || lower.includes("case") || lower.includes("result")) {
        response = projectResponses[0]
      } else if (lower.includes("seo")) {
        response = seoExpertiseResponses[0]
      } else if (lower.includes("speed") || lower.includes("pagespeed") || lower.includes("core web vitals")) {
        response = technicalSEOResponses[0]
      } else if (lower.includes("link") || lower.includes("backlink")) {
        response = linkBuildingResponses[0]
      } else {
        response = {
          role: "assistant",
          content: "I can help you with SEO strategy, technical fixes, PageSpeed optimization, link building, content, or full website audits. Just tell me your goal!",
        }
      }

      setMessages(prev => [...prev, response])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage = { role: "user", content: question }
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      let response
      if (question.includes("experience")) response = experienceResponses[0]
      else if (question.includes("skills")) response = skillsResponses[0]
      else if (question.includes("projects")) response = projectResponses[0]

      if (response) setMessages(prev => [...prev, response])
      setIsTyping(false)
    }, 1500)
  }

  const resetChat = () => setMessages(initialMessages)

  // Animation variants (unchanged)
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }

  return (
    <section id="chat" className="py-20 md:py-32 relative bg-gradient-to-b from-card/50 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-12">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
            Chat with My <span className="text-gradient">SEO Assistant</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ask about rankings, PageSpeed, technical SEO, link building, or see real results
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 bg-card/70 backdrop-blur flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">SEO Assistant</h3>
                  <p className="text-sm text-gray-400">Powered by real 5-year expertise</p>
                </div>
              </div>
              <button onClick={resetChat} className="p-2 hover:bg-white/10 rounded-lg transition"><RefreshCw size={18} /></button>
            </div>

            {/* Messages */}
            <div ref={chatMessagesRef} className="h-96 overflow-y-auto p-5 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-lg rounded-2xl px-4 py-3 ${msg.role === "user" ? "bg-primary text-white" : "bg-card/70"}`}>
                    <p className="text-sm rich-text" dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-card/70 rounded-2xl px-4 py-3">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-150" />
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="px-5 py-3 border-t border-white/10 flex gap-3 overflow-x-auto">
              <button onClick={() => handleQuickQuestion("Tell me about Waqas's SEO experience")} className="px-4 py-2 text-sm bg-card/50 rounded-full hover:bg-primary/30 transition whitespace-nowrap">
                Experience
              </button>
              <button onClick={() => handleQuickQuestion("What are Waqas's main skills?")} className="px-4 py-2 text-sm bg-card/50 rounded-full hover:bg-primary/30 transition whitespace-nowrap">
                Skills
              </button>
              <button onClick={() => handleQuickQuestion("Show me real SEO results and projects")} className="px-4 py-2 text-sm bg-card/50 rounded-full hover:bg-primary/30 transition whitespace-nowrap">
                Results & Projects
              </button>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-5 border-t border-white/10 flex gap-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about SEO, PageSpeed, rankings, audits..."
                className="flex-1 bg-card/50 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button type="submit" className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-90 transition">
                <Send size={20} className="text-white" />
              </button>
            </form>
          </motion.div>

          {/* Profile Image */}
          <motion.div className="flex justify-center mt-10">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                <Image src="/images/waqas-bukhari.webp" alt="Syed Muhammad Waqas" width={112} height={112} className="object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
