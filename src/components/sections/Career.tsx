'use client'

import { careerProjects } from "@/constants"
import { PersonalProject } from "@/types"
import { Box, Center, Flex, Heading, Image, LinkBox, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Paragraph from "../ui/Paragraph"

interface IProjectCard {
  project: PersonalProject
}
const ProjectCard = ({ project }: IProjectCard) => {
  return (
    <Center as={motion.div} whileHover={{ y: -5 }}>
      <LinkBox
        w='full'
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow='2xl'
        rounded='md'
        paddingX={5}
        paddingY={3}
        overflow='hidden'
        onClick={() => {
          project.link && window.open(project.link);
        }}
        _hover={{ cursor: 'pointer' }}
      >
        <Box bg='gray.100' marginTop={-6} marginX={-6} pos='relative'>
          <Image
            src={project.image.url}
            alt={project.image.alt}
            objectFit='cover'
            maxH='30vh'
            h='30vh'
            w='full'
          />
        </Box>
        <Stack mb={3}>
          <Text
            mt={3}
            color='blue.500'
            textTransform='uppercase'
            fontWeight={800}
            fontSize='lg'
          >
            {project.name}
          </Text>
          <Text color='gray.500' minH='80px'>
            {project.summary}
          </Text>
        </Stack>
        <Flex gap={2} wrap='wrap'>
          {project.techs.map((tech) => (
            <Tag size='sm' key={tech}>
              {tech}
            </Tag>
          ))}
        </Flex>
      </LinkBox>
    </Center>
  )
}

export default function Career() {
  return (
    <Stack as='section' id='career' gap={1}>
      <Heading as='h2'>Career</Heading>
      <Paragraph fontSize='large'>{"List of some public projects I've been involved in or done in the past."}</Paragraph>
      <Tabs variant='solid-rounded' mt={4}>
        <TabList>
          {Object.keys(careerProjects).map((k) => (
            <Tab mx={2} key={k}>
              {k}
            </Tab>
          ))}
        </TabList>
        <TabPanels marginTop={5}>
          {Object.entries(careerProjects).map(([k, v]) => (
            <TabPanel p={0} key={k}>
              <SimpleGrid columns={[1, 1, 2, 2]} gap={5}>
                {v.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  )
}