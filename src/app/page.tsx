import { Container, Separator } from "@chakra-ui/react"
import Career from "@/components/sections/career"
import Contact from "@/components/sections/contact"
import Introduction from "@/components/sections/introduction"
import TechStack from "@/components/sections/tech-stack"

export const dynamic = "force-static"

export default function Home() {
  return (
    <Container as="main" maxW="breakpoint-lg" mb={["5", "10"]} mt={["5", "10"]}>
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
