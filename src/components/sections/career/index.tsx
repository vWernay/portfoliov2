import { Box, Heading, SimpleGrid, Stack, Tabs } from "@chakra-ui/react"
import Paragraph from "@/components/ui/paragraph"
import { careerProjects } from "@/constants/general"
import ProjectCard from "./project-card"

export default function Career() {
  return (
    <Stack as="section" gap={1} id="career">
      <Heading as="h2" size="3xl">
        Career
      </Heading>
      <Paragraph fontSize="large">
        {
          "List of some public projects I've been involved in or done in the past."
        }
      </Paragraph>
      <Tabs.Root
        defaultValue={Object.keys(careerProjects)[0]}
        mt={4}
        variant="subtle"
      >
        <Tabs.List>
          {Object.keys(careerProjects).map((k) => (
            <Tabs.Trigger key={k} mx={2} value={k}>
              {k}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Box mt={5}>
          {Object.entries(careerProjects).map(([k, v]) => (
            <Tabs.Content
              _closed={{
                animationName: "fade-out",
                animationDuration: "120ms",
              }}
              _open={{
                animationName: "fade-in",
                animationDuration: "300ms",
              }}
              asChild
              key={k}
              p={0}
              value={k}
            >
              <SimpleGrid alignItems="start" columns={[1, 1, 2, 2]} gap={5}>
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
