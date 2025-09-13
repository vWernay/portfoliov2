import { Inter, Space_Grotesk } from "next/font/google"

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const fonts = {
  space_grotesk,
  inter,
}
