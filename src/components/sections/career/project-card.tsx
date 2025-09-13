"use client"

import {
  Box,
  Center,
  ClientOnly,
  Flex,
  Image,
  LinkBox,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode"
import { Tag } from "@/components/ui/tag"
import type { PersonalProject } from "@/types"

type IProjectCard = {
  project: PersonalProject
}
export default function ProjectCard({ project }: IProjectCard) {
  return (
    <ClientOnly fallback={<Skeleton boxSize={300} />}>
      <Center>
        <LinkBox
          _hover={{
            cursor: "pointer",
            transform: "translateY(-5px)",
          }}
          bg="bg.subtle"
          boxShadow="2xl"
          onClick={() => {
            project.link && window.open(project.link)
          }}
          overflow="hidden"
          paddingX={5}
          paddingY={3}
          rounded="md"
          transition="transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
          w="full"
        >
          <Box bg="gray.100" marginTop={-6} marginX={-6} pos="relative">
            <Image
              alt={project.image.alt}
              h="30vh"
              maxH="30vh"
              objectFit="cover"
              src={project.image.url}
              w="full"
            />
          </Box>
          <Stack mb={3}>
            <Text
              color={useColorModeValue("gray.700", "gray.300")}
              fontSize="lg"
              fontWeight={800}
              mt={3}
              textTransform="uppercase"
            >
              {project.name}
            </Text>
            <Text color={useColorModeValue("gray.600", "gray.400")} minH="80px">
              {project.summary}
            </Text>
          </Stack>
          <Flex gap={2} wrap="wrap">
            {project.techs.map((tech) => (
              <Tag colorPalette="gray" key={tech} size="sm" variant="subtle">
                {tech}
              </Tag>
            ))}
          </Flex>
        </LinkBox>
      </Center>
    </ClientOnly>
  )
}
