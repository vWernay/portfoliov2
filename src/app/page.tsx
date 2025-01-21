import Career from "@/components/sections/Career"
import Contact from "@/components/sections/Contact"
import Introduction from "@/components/sections/Introduction"
import TechStack from "@/components/sections/TechStack"
import { Container, Separator } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container as='main' maxW="breakpoint-lg" mt={["5", "10"]} mb={["5", "10"]}>
      <Introduction />
      <Separator marginY={10} />
      <TechStack />
      <Separator marginY={10} />
      <Career />
      <Separator marginY={10} />
      <Contact />
    </Container>
  )
}
