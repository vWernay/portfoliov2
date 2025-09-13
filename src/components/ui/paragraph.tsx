import { Text, type TextProps } from "@chakra-ui/react"

export default function Paragraph({ children, ...props }: TextProps) {
  return (
    <Text color="fg.muted" {...props}>
      {children}
    </Text>
  )
}
