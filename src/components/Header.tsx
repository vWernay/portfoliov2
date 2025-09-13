import { ColorModeButton } from "@/components/ui/color-mode"
import { headerNavItems } from "@/constants"
import { Center, Link as ChakraLink, Flex, HStack, IconButton, Separator, Text } from "@chakra-ui/react"
import NextLink from "next/link"
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
  return (
    <ChakraLink
      asChild
      paddingX={2}
      paddingY={1}
      rounded='md'
      _hover={{
        textDecoration: "none",
        bg: "gray.muted",
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
    <Flex
      as='header'
      position='sticky'
      top={0}
      height={16}
      alignItems='center'
      justifyContent='space-between'
      paddingX={4}
      bg="bg.muted"
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
  )
}