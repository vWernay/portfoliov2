import Paragraph from "@/components/ui/Paragraph"
import { techStacks } from "@/constants"
import { Grid, Heading, Stack, Tabs } from "@chakra-ui/react"
import StackCard from "./stack-card"

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