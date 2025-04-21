'use client'

import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode"
import { headerNavItems } from "@/constants"
import { Center, Link as ChakraLink, ClientOnly, Flex, HStack, IconButton, Separator, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { FaBars } from "react-icons/fa"

interface NavLinkProps {
  children: React.ReactNode
  href: string
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const hoverBg = useColorModeValue("gray.200", "gray.800")

  return (
    <ChakraLink
      asChild
      paddingX={2}
      paddingY={1}
      rounded='md'
      _hover={{
        textDecoration: "none",
        bg: hoverBg,
      }}
      fontWeight={600}
    >
      <NextLink href={href}>
        {children}
      </NextLink>
    </ChakraLink>
  )
}

export default function Header() {
  return (
    <ClientOnly fallback={<Skeleton h={16} />}>
      <Flex
        as='header'
        position='sticky'
        top={0}
        height={16}
        alignItems='center'
        justifyContent='space-between'
        paddingX={4}
        bg={useColorModeValue('gray.100', 'gray.900')}
        zIndex={9}
      >
        <HStack gap='3rem'>
          <Text
            as='h1'
            fontSize='lg'
            fontWeight={600}
          >
            <NextLink href='#introduction'>victorlwernay.dev</NextLink>
          </Text>
          <Center height='5vh'>
            <Separator orientation='vertical' height="full" borderColor='gray.800' />
          </Center>
          <HStack as='nav' gap={4} display={['none', 'none', 'inherit']}>
            {(headerNavItems.map((navItem) => (
              <NavLink
                key={navItem.route}
                href={navItem.route}
              >
                {navItem.name}
              </NavLink>
            )))}
          </HStack>
        </HStack>
        <Flex alignItems='center'>
          <HStack gap={7}>
            <ColorModeButton />
            <MenuRoot>
              <MenuTrigger asChild display={['inherit', 'inherit', 'none']}>
                <IconButton size="sm">
                  <FaBars />
                </IconButton>
              </MenuTrigger>
              <MenuContent>
                {headerNavItems.map((navItem, index) => (
                  <MenuItem key={index} value={navItem.route}>
                    <NextLink href={navItem.route}>
                      {navItem.name}
                    </NextLink>
                  </MenuItem>
                ))}
              </MenuContent>
            </MenuRoot>
          </HStack>
        </Flex>
      </Flex>
    </ClientOnly>
  )
}