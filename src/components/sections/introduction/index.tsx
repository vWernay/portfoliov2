import Paragraph from "@/components/ui/Paragraph"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemedLink } from "@/components/ui/themed-link"
import { introductionAvatar, resumeLink } from "@/constants"
import { Heading, HStack, Link, Stack } from "@chakra-ui/react"
import NextLink from "next/link"
import { BiPhoneCall } from "react-icons/bi"
import { CgAlbum } from "react-icons/cg"

const developmentLinks = [
  { name: "Web", href: "https://react.dev/" },
  { name: "Mobile", href: "https://reactnative.dev/" },
  { name: "Software", href: "https://cfx.re/" },
]

export default function Introduction() {
  return (
    <Stack as='section' id='introduction' gap={1}>
      <HStack justifyContent='space-between'>
        <Heading as='h1' fontSize={{ base: "1.75rem", md: "2.5rem", lg: "3rem" }}>{"Hi, I'm Victor Lellis!"}</Heading>
        <Avatar size='2xl' name={introductionAvatar.name} src={introductionAvatar.url} />
      </HStack>

      <Paragraph fontSize='2xl' lineHeight='1.5'>
        Full-stack Developer
      </Paragraph>

      <Paragraph fontSize='2xl' lineHeight='1.5'>
        Focused on{" "}
        {developmentLinks.map((link, index) => (
          <span key={link.name}>
            <ThemedLink href={link.href}>{link.name}</ThemedLink>
            {index === developmentLinks.length - 2 ? " and " : index < developmentLinks.length - 2 ? ", " : ""}
          </span>
        ))}
        {" Developments."}
      </Paragraph>

      <HStack>
        <Link href={resumeLink} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
          <Button
            colorScheme='blue'
            size='sm'
            margin='5px'
          >
            <CgAlbum size={16} /> Resume
          </Button>
        </Link>
        <Link asChild _hover={{ textDecoration: 'none' }}>
          <NextLink href='#contact'>
            <Button
              colorScheme='blue'
              size='sm'
              margin='5px'
            >
              <BiPhoneCall size={16} /> Contact Me
            </Button>
          </NextLink>
        </Link>
      </HStack>
    </Stack>
  )
}