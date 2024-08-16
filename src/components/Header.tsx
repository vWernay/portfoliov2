'use client'

import { headerNavItems, languages } from "@/constants"
import { Image } from "@chakra-ui/next-js"
import { Center, Link as ChakraLink, Divider, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import { FaBars, FaMoon, FaSun } from "react-icons/fa"

interface NavLinkProps {
  children: React.ReactNode
  href: string
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const hoverBg = useColorModeValue("gray.200", "gray.800")

  return (
    <ChakraLink
      as={NextLink}
      href={href}
      passHref
      paddingX={2}
      paddingY={1}
      rounded='md'
      _hover={{
        textDecoration: "none",
        bg: hoverBg,
      }}
      fontWeight={600}
    >
      {children}
    </ChakraLink>
  )
}

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
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
          <NextLink href='#introduction'>victorlwernay.tech</NextLink>
        </Text>
        <Center height='5vh'>
          <Divider orientation='vertical' borderColor='gray.500' />
        </Center>
        <HStack as='nav' spacing={4} display={['none', 'none', 'inherit']}>
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
        <HStack spacing={7}>
          <IconButton
            aria-label="Switch color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            variant='ghost'
            onClick={toggleColorMode}
            _hover={{
              bg: useColorModeValue("gray.200", "gray.800")
            }}
          />
          <Image
            alt={languages[0].name}
            src={languages[0].icon}
            boxSize='1.5rem'
            display='none' // todo: add support for multi language
          />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Open menu"
              icon={<FaBars />}
              display={['inherit', 'inherit', 'none']}
            />
            <MenuList>
              {(headerNavItems.map((navItem) => (
                <MenuItem key={navItem.route} as={NextLink} href={navItem.route} fontWeight={600}>
                  {navItem.name}
                </MenuItem>
              )))}
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  )
}