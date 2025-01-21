'use client'

import Paragraph from "@/components/ui/Paragraph"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useColorModeValue } from "@/components/ui/color-mode"
import { introductionAvatar, resumeLink } from "@/constants"
import { Heading, HStack, Link, Stack } from "@chakra-ui/react"
import { BiPhoneCall } from "react-icons/bi"
import { CgAlbum } from "react-icons/cg"
import NextLink from "next/link"

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
        <Link
          color={useColorModeValue("gray.700", "gray.300")}
          href="https://react.dev/"
          fontWeight="500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web
        </Link>
        {", "}
        <Link
          color={useColorModeValue("gray.700", "gray.300")}
          href="https://reactnative.dev/"
          fontWeight="500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mobile
        </Link>
        {" and "}
        <Link
          color={useColorModeValue("gray.700", "gray.300")}
          href="https://cfx.re/"
          fontWeight="500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Software
        </Link>
        {" Developments."}
      </Paragraph>
      <HStack>
        <Link href={resumeLink} target="_blank" rel="noopener noreferrer" textDecoration='none'>
          <Button
            colorScheme='blue'
            size='sm'
            margin='5px'
          >
            <CgAlbum size={16} /> Resume
          </Button>
        </Link>
        <Link asChild textDecoration='none'>
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