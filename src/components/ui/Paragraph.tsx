import { Text, TextProps } from "@chakra-ui/react"
import { useColorModeValue } from "./color-mode"

export default function Paragraph({ children, ...props }: TextProps) {
  const textColor = useColorModeValue("gray.600", "gray.400")

  return (
    <Text color={textColor} {...props}>
      {children}
    </Text>
  )
}
