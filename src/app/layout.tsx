import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { fonts } from "./theme/fonts";
import { Providers } from "./theme/providers";

export const metadata: Metadata = {
  title: "Victor Lellis | FullStack Developer",
  description: "A Web and Script full-stack developer.",
  keywords: "React, Vue, NodeJs, Javascript, Typescript, Lua, Cfx.re, FiveM, Portfolio, VictorLWB, Victor Lellis, Victor Wernay",
  icons: 'https://avatars.githubusercontent.com/u/32583593?v=4',
  openGraph: {
    type: "website",
    url: "https://victorlwernay.tech",
    title: "Victor Lellis | FullStack Developer",
    siteName: "Victor Lellis | FullStack Developer",
    description: "A Web and Script full-stack developer.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/32583593?v=4",
        width: 1200,
        height: 630,
        alt: "Victor Lellis | FullStack Developer",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={fonts.rubik.variable}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
