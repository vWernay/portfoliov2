'use client'

import Paragraph from "@/components/ui/Paragraph"
import { useColorModeValue } from "@/components/ui/color-mode"
import { techStacks } from "@/constants"
import { Box, Flex, Grid, Heading, IconButton, Stack, Tabs, Text } from "@chakra-ui/react"
import { ReactElement } from "react"

interface IStackCard {
  stack: { name: string, icon: ReactElement }
}
const StackCard = ({ stack }: IStackCard) => {
  return (
    <Box
      w='full'
      padding={4}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
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

export default function TechStack() {
  return (
    <Stack as='section' id='tech_stack' gap={1}>
      <Heading as='h2' size='3xl'>Tech Stack</Heading>
      <Paragraph fontSize='large' >A list of my favorite tools and technologies that I use regularly and have a good understanding of.</Paragraph>
      <Tabs.Root mt={4} variant="subtle" defaultValue={Object.keys(techStacks)[0]}>
        <Tabs.List>
          {Object.keys(techStacks).map((k) => (
            <Tabs.Trigger mx={2} key={k} value={k}>
              {k}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.entries(techStacks).map(([key, v]) => (
          <Tabs.Content asChild key={key} value={key}>
            <Grid
              templateColumns={[
                '1fr',
                'repeat(2,1fr)',
                'repeat(3, 1fr)',
                'repeat(4, 1fr)',
              ]}
              gap={[2, 5, 5, 5]}
            >
              {v.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Stack>
  )
}