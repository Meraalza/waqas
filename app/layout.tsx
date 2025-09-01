import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "Waqas Bukhari | AI Automation Expert & Web Developer",
  description:
    "Portfolio of Waqas Bukhari, AI Automation Expert specializing in intelligent business solutions, full-stack development, and cutting-edge automation technologies. Transform your business with AI-powered solutions.",
  keywords: [
    "WordPress Developer",
    "Google Business",
    "Web Application Developer",
    "AI Automation",
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
    url: "https://waqasbukhari.vercel.app",
    siteName: "Waqas Bukhari - Web & App Developer",
    title: "Waqas Bukhari | AI Automation Expert & Full-Stack Developer",
    description:
      "Transform your business with AI-powered automation solutions. Expert in full-stack development, machine learning, and intelligent business systems.",
    images: [
      {
        url: "/images/waqas-bukhari.webp",
        width: 1200,
        height: 630,
        alt: "Waqas Bukhari - Web & App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqas Bukhari | AI Automation Expert - Web & App Developer",
    description:
      "Transform your business with AI-powered automation solutions. Expert in full-stack development, machine learning, and intelligent business systems.",
    images: ["/images/waqas-bukhari.webp"],
    creator: "@waqasbukhari",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://waqasbukhari.vercel.app",
  },
  category: "Technology",
    generator: 'Waqas Bukhari'
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
              url: "https://waqasbukhari.vercel.app",
              image: "https://waqasbukhari.vercel.app/images/waqas-bukhari.webp",
              sameAs: [
                "https://linkedin.com/in/waqasbukhari",
                "https://github.com/waqasbukhari",
                "https://twitter.com/waqasbukhari",
              ],
              knowsAbout: [
                "WordPress Developer",
                "Google Business",
                "Web Application Developer",
                "AI Automation",
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "AI Solutions",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Web Developer",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Pakistan",
              },
            }),
          }}
        />
        {/* Website Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Waqas Bukhari - Web & App Developer",
              url: "https://waqasbukhari.vercel.app",
              description: "Portfolio of Waqas Bukhari, AI Automation Expert specializing in intelligent business solutions, full-stack development, and cutting-edge automation technologies.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://waqasbukhari.vercel.app/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              author: {
                "@type": "Person",
                name: "Waqas Bukhari"
              },
              publisher: {
                "@type": "Person",
                name: "Waqas Bukhari"
              }
            }),
          }}
        />
        <meta name="theme-color" content="#fc52ff" />
        <meta name="msapplication-TileColor" content="#fc52ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://waqasbukhari.vercel.app" />
        <link rel="icon" href="/images/favicon.ico" />
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
