import { Box, Flex, IconButton, Text } from "@chakra-ui/react"
import type { ReactElement } from "react"

type IStackCard = {
  stack: { name: string; icon: ReactElement }
}
export default function StackCard({ stack }: IStackCard) {
  return (
    <Box
      _hover={{
        borderColor: "gray.500",
        transform: "translateY(-5px)",
      }}
      as="fieldset"
      borderColor="border.emphasized"
      borderRadius={5}
      borderWidth="1px"
      cursor="pointer"
      display="flex"
      padding={4}
      transition="border-color 0.5s, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
      w="full"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <IconButton aria-label={stack.name} marginRight={3}>
          {stack.icon}
        </IconButton>
        <Flex>
          <Text _hover={{ color: "gray.500" }} textStyle="sm">
            {stack.name}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
