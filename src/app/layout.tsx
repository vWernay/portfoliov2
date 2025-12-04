import type { Metadata } from "next"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Provider } from "@/components/ui/provider"
import { Toaster } from "@/components/ui/toaster"
import { fonts } from "./theme/fonts"

const meta = {
  title: "Victor Wernay | Software Engineer",
  description:
    "Full-Stack Engineer specializing in scalable Web Applications (Next.js/TanStack), Real-Time Systems, and AI Agent integration. Founder of ZentriX Systems.",
  url: "https://www.victorlwernay.dev",
  image: "https://avatars.githubusercontent.com/u/32583593?v=4",
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s | Victor Wernay",
  },
  description: meta.description,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AI Agents",
    "LLM Engineering",
    "Victor Wernay",
    "Victor Lellis",
    "ZentriX Systems",
    "Web Development",
    "Remote Engineer",
  ],
  authors: [{ name: "Victor Wernay", url: meta.url }],
  creator: "Victor Wernay",
  icons: meta.image,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: meta.url,
    title: meta.title,
    description: meta.description,
    siteName: "Victor Wernay Portfolio",
    images: [
      {
        url: meta.image,
        width: 1200,
        height: 630,
        alt: "Victor Wernay - Software Engineer",
      },
    ],
    firstName: "Victor",
    lastName: "Wernay",
    username: "vWernay",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [meta.image],
  },
  alternates: {
    canonical: meta.url,
  },
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
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Victor Wernay",
  givenName: "Victor",
  familyName: "Wernay",
  additionalName: "Victor Lellis",
  url: meta.url,
  image: meta.image,
  sameAs: [
    "https://github.com/vWernay",
    "https://linkedin.com/in/victor-lellis",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "ZentriX Systems",
  },
  knowsAbout: [
    "Software Engineering",
    "React",
    "Next.js",
    "Artificial Intelligence",
    "Computer Science",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UDF University Center",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${fonts.inter.variable} ${fonts.space_grotesk.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script tag
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body>
        <Provider>
          <Header />

          <Toaster />
          {children}

          <Footer />
        </Provider>
      </body>
    </html>
  )
}
