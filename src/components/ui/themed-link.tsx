import { Link, type LinkProps } from "@chakra-ui/react"

type ThemedLinkProps = LinkProps & {
  children: React.ReactNode
}

export function ThemedLink({ children, ...props }: ThemedLinkProps) {
  return (
    <Link
      color="gray.fg"
      fontWeight="500"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  )
}
