"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Define image item type
interface GalleryImage {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  color: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const galleryImages: GalleryImage[] = [
    {
      id: "img-1",
      title: "Neon Metropolis",
      description: "Futuristic cityscape glowing under neon lights and digital rain.",
      imageUrl: "/templates/1.PNG",
      category: "Digital Art",
      color: "purple",
    },
    {
      id: "img-2",
      title: "Quantum Forest",
      description: "Surreal woodland where trees emit quantum particles and glow with energy.",
      imageUrl: "/templates/2.PNG",
      category: "Concept Art",
      color: "cyan",
    },
    {
      id: "img-3",
      title: "Cyber Samurai",
      description: "A lone warrior clad in nano-armor, standing atop a datastream cliff.",
      imageUrl: "/templates/3.PNG",
      category: "Character Design",
      color: "red",
    },
    {
      id: "img-4",
      title: "Zero Gravity Garden",
      description: "Floating flora in orbital station, illuminated by distant stars.",
      imageUrl: "/templates/4.PNG",
      category: "Sci-Fi",
      color: "green",
    },
    {
      id: "img-5",
      title: "AI Cathedral",
      description: "A temple of machine learning, built from code and light.",
      imageUrl: "/templates/5.PNG",
      category: "AI Art",
      color: "blue",
    },
    {
      id: "img-6",
      title: "Desert of Data",
      description: "Endless dunes made of binary grains, under a firewall sun.",
      imageUrl: "/templates/6.PNG",
      category: "Abstract",
      color: "orange",
    },
    {
      id: "img-7",
      title: "Neural Nebula",
      description: "Cosmic clouds shaped like neural networks, pulsing with thought.",
      imageUrl: "/templates/7.PNG",
      category: "Space Art",
      color: "pink",
    },
    {
      id: "img-8",
      title: "Retro Future Lab",
      description: "1980s vision of 2050 — CRTs, robots, and synthwave lighting.",
      imageUrl: "/templates/8.PNG",
      category: "Retro Futurism",
      color: "yellow",
    },
    {
      id: "img-9",
      title: "Bio-Mechanical Reef",
      description: "Coral structures fused with circuitry, alive with electric currents.",
      imageUrl: "/templates/9.PNG",
      category: "Bio-Art",
      color: "teal",
    },
    {
      id: "img-10",
      title: "Echoes of Code",
      description: "Ancient ruins overgrown with glowing lines of forgotten programming.",
      imageUrl: "/templates/10.PNG",
      category: "Digital Ruins",
      color: "indigo",
    },
    {
      id: "img-11",
      title: "Synthwave Sunset",
      description: "Horizon bathed in magenta and cyan, palm trees silhouetted against grids.",
      imageUrl: "/templates/11.PNG",
      category: "Synthwave",
      color: "magenta",
    },
    {
      id: "img-12",
      title: "The Thinking Machine",
      description: "A colossal AI core, meditating in a chamber of pure logic.",
      imageUrl: "/templates/12.PNG",
      category: "AI Core",
      color: "gray",
    },
    {
      id: "img-13",
      title: "Data Storm",
      description: "Tornado of floating numbers and symbols tearing through a server plain.",
      imageUrl: "/templates/13.PNG",
      category: "Abstract Tech",
      color: "lime",
    },
    {
      id: "img-14",
      title: "Holographic Zen",
      description: "Monk in robes of light, meditating within a floating UI mandala.",
      imageUrl: "/templates/14.PNG",
      category: "Spiritual Tech",
      color: "violet",
    },
    {
      id: "img-15",
      title: "Edge of Simulation",
      description: "Where the rendered world glitches — revealing the code beneath reality.",
      imageUrl: "/templates/15.PNG",
      category: "Glitch Art",
      color: "amber",
    },
  ]

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden" // Prevent background scroll
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Visual{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Gallery
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore stunning AI-generated and concept art in cinematic landscape format
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Gallery Grid - 3x5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <Card
                onClick={() => openModal(image)}
                className="glass h-full overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Image Container */}
                <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-2xl"> {/* 16:9 Aspect */}
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-${image.color}-500/20 text-${image.color}-300 border border-${image.color}-500/30`}>
                    {image.category}
                  </div>
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-lg font-bold text-white">{image.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
            <div className="p-8"> {/* Removed CardContent */}
              <h3 className="text-2xl font-bold text-white mb-4">Inspired? Create Your Own Gallery</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Use our AI tools to generate, curate, and publish your own visual masterpieces.
              </p>
              <Button
                onClick={() => (window.location.href = "/create")}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
              >
                Start Creating
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300 mt-2">{selectedImage.description}</p>
                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium bg-${selectedImage.color}-500/30 text-${selectedImage.color}-300`}>
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
