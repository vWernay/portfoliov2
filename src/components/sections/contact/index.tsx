import Paragraph from "@/components/ui/Paragraph"
import { Heading, Stack } from "@chakra-ui/react"
import { ContactForm } from "./form"

export default function Contact() {
  return (
    <Stack as='section' id='contact' gap={4}>
      <Heading as='h2' size='3xl'>Contact me</Heading>
      <Paragraph fontSize='large'>Feel free to contact me!</Paragraph>
      <ContactForm />
    </Stack>
  )
}
