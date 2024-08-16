'use client'

import { introductionAvatar, resumeLink } from "@/constants"
import { Avatar, Button, ButtonGroup, Heading, HStack, Link, Stack, useColorModeValue } from "@chakra-ui/react"
import { BiPhoneCall } from "react-icons/bi"
import { CgAlbum } from "react-icons/cg"
import Paragraph from "../ui/Paragraph"

export default function Introduction() {
  return (
    <Stack as='section' id='introduction' gap={1}>
      <HStack justifyContent='space-between'>
        <Heading as='h1' fontSize={{ base: "1.75rem", md: "2.5rem", lg: "3rem" }}>{"Hi, I'm Victor Lellis!"}</Heading>
        <Avatar size='lg' name={introductionAvatar.name} src={introductionAvatar.url} />
      </HStack>
      <Paragraph fontSize='2xl' lineHeight='1.5'>
        Full-stack Developer
      </Paragraph>
      <Paragraph fontSize='2xl' lineHeight='1.5'>
        Focused on{" "}
        <Link
          color={useColorModeValue("blue.500", "blue.400")}
          href="https://react.dev/"
          fontWeight="500"
          isExternal
        >
          Web
        </Link>
        {", "}
        <Link
          color={useColorModeValue("blue.500", "blue.400")}
          href="https://reactnative.dev/"
          fontWeight="500"
          isExternal
        >
          Mobile
        </Link>
        {" and "}
        <Link
          color={useColorModeValue("blue.500", "blue.400")}
          href="https://cfx.re/"
          fontWeight="500"
          isExternal
        >
          Software
        </Link>
        {" Developments."}
      </Paragraph>
      <ButtonGroup>
        <Link href={resumeLink} isExternal textDecoration='none'>
          <Button
            colorScheme='blue'
            size='sm'
            margin='5px'
            leftIcon={<CgAlbum size={16} />}
          >
            Resume
          </Button>
        </Link>
        <Link href='#contact' textDecoration='none'>
          <Button
            colorScheme='blue'
            size='sm'
            margin='5px'
            leftIcon={<BiPhoneCall size={16} />}
          >
            Contact Me
          </Button>
        </Link>
      </ButtonGroup>
    </Stack>
  )
}