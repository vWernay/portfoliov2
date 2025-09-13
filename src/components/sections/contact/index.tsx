import { Heading, Stack } from "@chakra-ui/react"
import Paragraph from "@/components/ui/Paragraph"
import { ContactForm } from "./form"

export default function Contact() {
  return (
    <Stack as="section" gap={4} id="contact">
      <Heading as="h2" size="3xl">
        Contact me
      </Heading>
      <Paragraph fontSize="large">Feel free to contact me!</Paragraph>
      <ContactForm />
    </Stack>
  )
}
