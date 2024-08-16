'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { theme } from './theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 70px;
          }
        `}
      />
      {children}
    </ChakraProvider>
  )
}
