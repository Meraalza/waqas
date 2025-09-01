import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "Waqas Bukhari | AI Automation Expert & Full-Stack Developer",
  description:
    "Portfolio of Waqas Bukhari, AI Automation Expert specializing in intelligent business solutions, full-stack development, and cutting-edge automation technologies. Transform your business with AI-powered solutions.",
  keywords: [
    "AI Automation",
    "Full-Stack Developer",
    "Business Automation",
    "Machine Learning",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "AI Solutions",
    "Waqas Bukhari",
  ],
  authors: [{ name: "Waqas Bukhari" }],
  creator: "Waqas Bukhari",
  publisher: "Waqas Bukhari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waqasbukhari.dev",
    siteName: "Waqas Bukhari - AI Automation Expert",
    title: "Waqas Bukhari | AI Automation Expert & Full-Stack Developer",
    description:
      "Transform your business with AI-powered automation solutions. Expert in full-stack development, machine learning, and intelligent business systems.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Waqas Bukhari - AI Automation Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqas Bukhari | AI Automation Expert & Full-Stack Developer",
    description:
      "Transform your business with AI-powered automation solutions. Expert in full-stack development, machine learning, and intelligent business systems.",
    images: ["/images/twitter-card.jpg"],
    creator: "@waqasbukhari",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://waqasbukhari.dev",
  },
  category: "Technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Waqas Bukhari",
              jobTitle: "AI Automation Expert & Full-Stack Developer",
              description:
                "AI Automation Expert specializing in intelligent business solutions, full-stack development, and cutting-edge automation technologies.",
              url: "https://waqasbukhari.dev",
              image: "https://waqasbukhari.dev/images/ibrahim-avatar.png",
              sameAs: [
                "https://linkedin.com/in/waqasbukhari",
                "https://github.com/waqasbukhari",
                "https://twitter.com/waqasbukhari",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Business Automation",
                "Full-Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "AI Solutions",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance AI Consultant",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />
        <meta name="theme-color" content="#fc52ff" />
        <meta name="msapplication-TileColor" content="#fc52ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://waqasbukhari.dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
