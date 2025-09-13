import Paragraph from "@/components/ui/Paragraph"
import { careerProjects } from "@/constants"
import { Box, Heading, SimpleGrid, Stack, Tabs } from "@chakra-ui/react"
import ProjectCard from "./project-card"

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