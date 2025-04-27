'use client'

import { useColorModeValue } from "@/components/ui/color-mode"
import Paragraph from "@/components/ui/Paragraph"
import { Tag } from "@/components/ui/tag"
import { careerProjects } from "@/constants"
import type { PersonalProject } from "@/types"
import { Box, Center, ClientOnly, Flex, Heading, Image, LinkBox, SimpleGrid, Skeleton, Stack, Tabs, Text } from "@chakra-ui/react"

interface IProjectCard {
  project: PersonalProject
}
const ProjectCard = ({ project }: IProjectCard) => {
  return (
    <ClientOnly fallback={<Skeleton boxSize={300} />}>
      <Center>
        <LinkBox
          w='full'
          bg={useColorModeValue('gray.50', 'gray.950')}
          boxShadow='2xl'
          rounded='md'
          paddingX={5}
          paddingY={3}
          overflow='hidden'
          transition='transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          onClick={() => {
            project.link && window.open(project.link);
          }}
          _hover={{
            cursor: 'pointer',
            transform: 'translateY(-5px)'
          }}
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
              color={useColorModeValue('gray.700', 'gray.300')}
              textTransform='uppercase'
              fontWeight={800}
              fontSize='lg'
            >
              {project.name}
            </Text>
            <Text color={useColorModeValue('gray.600', 'gray.400')} minH='80px'>
              {project.summary}
            </Text>
          </Stack>
          <Flex gap={2} wrap='wrap'>
            {project.techs.map((tech) => (
              <Tag size='sm' colorPalette="gray" variant="subtle" key={tech}>
                {tech}
              </Tag>
            ))}
          </Flex>
        </LinkBox>
      </Center>
    </ClientOnly>
  )
}

export default function Career() {
  return (
    <Stack as='section' id='career' gap={1}>
      <Heading as='h2' size='3xl'>Career</Heading>
      <Paragraph fontSize='large'>{"List of some public projects I've been involved in or done in the past."}</Paragraph>
      <Tabs.Root variant='subtle' mt={4} defaultValue={Object.keys(careerProjects)[0]}>
        <Tabs.List>
          {Object.keys(careerProjects).map((k) => (
            <Tabs.Trigger mx={2} key={k} value={k}>
              {k}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Box mt={5}>
          {Object.entries(careerProjects).map(([k, v]) => (
            <Tabs.Content
              asChild
              p={0}
              key={k}
              value={k}
              _open={{
                animationName: "fade-in",
                animationDuration: "300ms",
              }}
              _closed={{
                animationName: "fade-out",
                animationDuration: "120ms",
              }}
            >
              <SimpleGrid columns={[1, 1, 2, 2]} gap={5} alignItems='start'>
                {v.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </SimpleGrid>
            </Tabs.Content>
          ))}
        </Box>
      </Tabs.Root>
    </Stack>
  )
}