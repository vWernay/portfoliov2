"use client"

import { ChakraProvider, createSystem, defaultConfig, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const system = createSystem(defaultConfig, {
  globalCss: {
    "html": {
      scrollBehavior: 'smooth',
      scrollPaddingTop: '70px'
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-space-grotesk)" },
        body: { value: "var(--font-inter)" },
      },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
