'use client'

import { useColorModeValue } from "@/components/ui/color-mode";
import { PersonalProject } from "@/types";
import { ClientOnly, Skeleton, Center, LinkBox, Box, Stack, Flex, Image, Text } from "@chakra-ui/react";
import { Tag } from "@/components/ui/tag"

interface IProjectCard {
  project: PersonalProject
}
export default function ProjectCard({ project }: IProjectCard) {
  return (
    <ClientOnly fallback={<Skeleton boxSize={300} />}>
      <Center>
        <LinkBox
          w='full'
          bg="bg.subtle"
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