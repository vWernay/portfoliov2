'use client'

import { techStacks } from "@/constants";
import { Box, Flex, Grid, Heading, IconButton, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import Paragraph from "../ui/Paragraph";

interface IStackCard {
  stack: { name: string, icon: ReactElement }
}
const StackCard = ({ stack }: IStackCard) => {
  return (
    <Box
      as={motion.div}
      whileHover={{ y: -5 }}
      w='full'
      padding={4}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      borderRadius={5}
      borderWidth='1px'
      transition='border-color 0.5s'
      cursor='pointer'
      display='flex'
      role='group'
      _hover={{
        borderColor: 'blue.500',
      }}
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <IconButton
          as='a'
          aria-label={stack.name}
          marginRight={3}
          icon={stack.icon}
          _groupHover={{ color: 'blue.500' }}
        />
        <Flex>
          <Text size='sm' _hover={{ color: 'blue.500' }}>
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
      <Heading as='h2'>Tech Stack</Heading>
      <Paragraph fontSize='large' >A list of my favorite tools and technologies that I use regularly and have a good understanding of.</Paragraph>
      <Tabs variant='solid-rounded' mt={4}>
        <TabList>
          {Object.keys(techStacks).map((k) => (
            <Tab mx={2} key={k}>
              {k}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.entries(techStacks).map(([key, v]) => (
            <TabPanel key={key}>
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
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  )
}