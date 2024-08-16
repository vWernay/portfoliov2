import { extendTheme } from "@chakra-ui/react"

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
    fonts: {
        heading: 'var(--font-rubik)',
        body: 'var(--font-rubik)',
    },
}

export const theme = extendTheme({ config })