import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { fonts } from "./theme/fonts";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Victor Lellis | FullStack Developer",
  description: "A Web and Script full-stack developer.",
  keywords: "React, Vue, NodeJs, Javascript, Typescript, Lua, Cfx.re, FiveM, Portfolio, VictorLWB, Victor Lellis, Victor Wernay, Developer",
  icons: 'https://avatars.githubusercontent.com/u/32583593?v=4',
  openGraph: {
    type: "website",
    url: "https://www.victorlwernay.dev",
    title: "Victor Lellis | FullStack Developer",
    siteName: "Victor Lellis | FullStack Developer",
    description: "A Web and Script full-stack developer.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/32583593?v=4",
        width: 1200,
        height: 630,
        alt: "Profile photo of Victor Lellis, full-stack developer",
      },
    ],
  },
  alternates: {
    canonical: "https://www.victorlwernay.dev"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Victor Lellis",
  url: "https://www.victorlwernay.dev",
  sameAs: [
    "https://github.com/vWernay",
    "https://linkedin.com/in/victor-lellis"
  ],
  jobTitle: "FullStack Developer",
  image: "https://avatars.githubusercontent.com/u/32583593?v=4"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${fonts.inter.variable} ${fonts.space_grotesk.variable}`} lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
