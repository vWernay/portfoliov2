import { Heading, HStack, Link, Stack } from "@chakra-ui/react"
import NextLink from "next/link"
import { BiPhoneCall } from "react-icons/bi"
import { CgAlbum } from "react-icons/cg"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Paragraph from "@/components/ui/Paragraph"
import { ThemedLink } from "@/components/ui/themed-link"
import { introductionAvatar, resumeLink } from "@/constants/general"

const developmentLinks = [
  { name: "Web", href: "https://react.dev/" },
  { name: "Mobile", href: "https://reactnative.dev/" },
  { name: "Software", href: "https://cfx.re/" },
]

export default function Introduction() {
  return (
    <Stack as="section" gap={1} id="introduction">
      <HStack justifyContent="space-between">
        <Heading
          as="h1"
          fontSize={{ base: "1.75rem", md: "2.5rem", lg: "3rem" }}
        >
          {"Hi, I'm Victor Lellis!"}
        </Heading>
        <Avatar
          name={introductionAvatar.name}
          size="2xl"
          src={introductionAvatar.url}
        />
      </HStack>

      <Paragraph fontSize="2xl" lineHeight="1.5">
        Full-stack Developer
      </Paragraph>

      <Paragraph fontSize="2xl" lineHeight="1.5">
        Focused on{" "}
        {developmentLinks.map((link, index) => (
          <span key={link.name}>
            <ThemedLink href={link.href}>{link.name}</ThemedLink>
            {index === developmentLinks.length - 2
              ? " and "
              : // biome-ignore lint/style/noNestedTernary: nested ternary is just ok here
                index < developmentLinks.length - 2
                ? ", "
                : ""}
          </span>
        ))}
        {" Developments."}
      </Paragraph>

      <HStack>
        <Link
          _hover={{ textDecoration: "none" }}
          href={resumeLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button colorScheme="blue" margin="5px" size="sm">
            <CgAlbum size={16} /> Resume
          </Button>
        </Link>
        <Link _hover={{ textDecoration: "none" }} asChild>
          <NextLink href="#contact">
            <Button colorScheme="blue" margin="5px" size="sm">
              <BiPhoneCall size={16} /> Contact Me
            </Button>
          </NextLink>
        </Link>
      </HStack>
    </Stack>
  )
}
