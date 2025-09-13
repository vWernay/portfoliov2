import {
  Box,
  ClientOnly,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react"
import { footerData } from "@/constants/general"
import { SkeletonText } from "./ui/skeleton"

export default function Footer() {
  return (
    <HStack
      alignItems="center"
      as="footer"
      gap={[1, 2]}
      justifyContent="space-between"
      maxW="container.lg"
      mx="auto"
      padding={4}
      w={["100%", "90%", "90%"]}
    >
      <Flex
        alignItems="center"
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        w="full"
      >
        <ClientOnly fallback={<SkeletonText noOfLines={1} w={300} />}>
          <Text color="gray.fg" fontSize="sm" textAlign="center">
            {footerData.author}
          </Text>
        </ClientOnly>
        <Box textAlign="center">
          {footerData.socialUrls.map((socialMedia) => (
            <IconButton
              aria-label={socialMedia.name}
              asChild
              borderRadius="full"
              colorScheme={socialMedia.type}
              key={socialMedia.name}
              size="lg"
              variant="ghost"
            >
              <Link
                aria-label={`Check my ${socialMedia.name} profile`}
                href={socialMedia.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {socialMedia.icon}
              </Link>
            </IconButton>
          ))}
        </Box>
      </Flex>
    </HStack>
  )
}
