import { Grid, Heading, Stack, Tabs } from "@chakra-ui/react"
import Paragraph from "@/components/ui/Paragraph"
import { techStacks } from "@/constants/general"
import StackCard from "./stack-card"

const TECH_STACK_GRID_GAP_SMALL = 2
const TECH_STACK_GRID_GAP_LARGE = 5
const TECH_STACK_GRID_GAP = [
  TECH_STACK_GRID_GAP_SMALL,
  TECH_STACK_GRID_GAP_LARGE,
  TECH_STACK_GRID_GAP_LARGE,
  TECH_STACK_GRID_GAP_LARGE,
] as const

export default function TechStack() {
  return (
    <Stack as="section" gap={1} id="tech_stack">
      <Heading as="h2" size="3xl">
        Tech Stack
      </Heading>
      <Paragraph fontSize="large">
        A list of my favorite tools and technologies that I use regularly and
        have a good understanding of.
      </Paragraph>
      <Tabs.Root
        defaultValue={Object.keys(techStacks)[0]}
        mt={4}
        variant="subtle"
      >
        <Tabs.List>
          {Object.keys(techStacks).map((k) => (
            <Tabs.Trigger key={k} mx={2} value={k}>
              {k}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.entries(techStacks).map(([key, v]) => (
          <Tabs.Content asChild key={key} value={key}>
            <Grid
              gap={TECH_STACK_GRID_GAP}
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
            >
              {v.map((stack) => (
                <StackCard key={stack?.name} stack={stack} />
              ))}
            </Grid>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Stack>
  )
}
