import Career from "@/components/sections/Career"
import Contact from "@/components/sections/Contact"
import Introduction from "@/components/sections/Introduction"
import TechStack from "@/components/sections/TechStack"
import { Container, Divider } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container as='main' maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
      <Introduction />
      <Divider marginY={10} />
      <TechStack />
      <Divider marginY={10} />
      <Career />
      <Divider marginY={10} />
      <Contact />
    </Container>
  )
}
