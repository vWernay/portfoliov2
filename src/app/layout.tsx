import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { fonts } from "./theme/fonts";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";

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
    <html className={fonts.rubik.variable} lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />
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
