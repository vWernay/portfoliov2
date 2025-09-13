import { Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { ReactElement } from "react"

interface IStackCard {
  stack: { name: string, icon: ReactElement }
}
export default function StackCard({ stack }: IStackCard) {
  return (
    <Box
      w='full'
      padding={4}
      borderColor="border.emphasized"
      borderRadius={5}
      borderWidth='1px'
      transition='border-color 0.5s, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      cursor='pointer'
      display='flex'
      role='group'
      _hover={{
        borderColor: 'gray.500',
        transform: 'translateY(-5px)',
      }}
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <IconButton
          aria-label={stack.name}
          marginRight={3}
        >
          {stack.icon}
        </IconButton>
        <Flex>
          <Text textStyle='sm' _hover={{ color: 'gray.500' }}>
            {stack.name}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}