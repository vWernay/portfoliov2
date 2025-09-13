import {
  Center,
  Link as ChakraLink,
  Flex,
  HStack,
  IconButton,
  Separator,
  Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { FaBars } from "react-icons/fa"
import { ColorModeButton } from "@/components/ui/color-mode"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { headerNavItems } from "@/constants/general"

type NavLinkProps = {
  children: React.ReactNode
  href: string
}
const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <ChakraLink
      _hover={{
        textDecoration: "none",
        bg: "gray.muted",
      }}
      asChild
      fontWeight={600}
      paddingX={2}
      paddingY={1}
      rounded="md"
    >
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
  )
}

export default function Header() {
  return (
    <Flex
      alignItems="center"
      as="header"
      bg="bg.muted"
      height={16}
      justifyContent="space-between"
      paddingX={4}
      position="sticky"
      top={0}
      zIndex={9}
    >
      <HStack gap="3rem">
        <Text as="h1" fontSize="lg" fontWeight={600}>
          <NextLink href="#introduction">victorlwernay.dev</NextLink>
        </Text>
        <Center height="5vh">
          <Separator
            borderColor="gray.800"
            height="full"
            orientation="vertical"
          />
        </Center>
        <HStack as="nav" display={["none", "none", "inherit"]} gap={4}>
          {headerNavItems.map((navItem) => (
            <NavLink href={navItem.route} key={navItem.route}>
              {navItem.name}
            </NavLink>
          ))}
        </HStack>
      </HStack>
      <Flex alignItems="center">
        <HStack gap={7}>
          <ColorModeButton />
          <MenuRoot>
            <MenuTrigger asChild display={["inherit", "inherit", "none"]}>
              <IconButton size="sm">
                <FaBars />
              </IconButton>
            </MenuTrigger>
            <MenuContent>
              {headerNavItems.map((navItem, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: index is fine here, as it's static
                <MenuItem key={index} value={navItem.route}>
                  <NextLink href={navItem.route}>{navItem.name}</NextLink>
                </MenuItem>
              ))}
            </MenuContent>
          </MenuRoot>
        </HStack>
      </Flex>
    </Flex>
  )
}
