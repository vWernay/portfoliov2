'use client'

import Paragraph from "@/components/ui/Paragraph"
import { Button } from "@/components/ui/button"
import { useColorModeValue } from "@/components/ui/color-mode"
import { Skeleton } from "@/components/ui/skeleton"
import { toaster } from "@/components/ui/toaster"
import { ClientOnly, Heading, HStack, Input, InputProps, Stack, Textarea, TextareaProps, VStack } from "@chakra-ui/react"
import emailjs from '@emailjs/browser'
import { FormEvent, useState } from "react"

const CustomInput = (props: InputProps) => {
  const inputBg = useColorModeValue("gray.100", "gray.900")

  return <Input size='lg' bg={inputBg} {...props} />
}
const CustomTextarea = (props: TextareaProps) => {
  const textareaBg = useColorModeValue("gray.100", "gray.900")

  return <Textarea size='lg' resize='none' bg={textareaBg} {...props} />
}

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const clearInputStates = () => {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setIsLoading(false)
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setIsLoading(true)

    emailjs
      .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then(() => {
        clearInputStates()

        toaster.create({
          title: "Email sent.",
          description:
            "You had successfully sent the email. I will reply your email ASAP. Thank you!",
          type: "success",
          duration: 5000
        })
      })
      .catch((error) => {
        clearInputStates()

        toaster.create({
          title: "Email not sent.",
          description: error.text,
          type: "error",
          duration: 5000
        })
      })
  }

  return (
    <Stack as='section' id='contact' gap={4}>
      <Heading as='h2' size='3xl'>Contact me</Heading>
      <Paragraph fontSize='large'>Feel free to contact me!</Paragraph>
      <ClientOnly fallback={< Skeleton w='full' h={200} />}>
        <VStack as='form' onSubmit={handleSubmit} gap={4} width='full'>
          <HStack width='full' gap={4}>
            <CustomInput
              id='name'
              type='text'
              placeholder='Name'
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
              required
            />
            <CustomInput
              id='email'
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              required
            />
          </HStack>
          <CustomInput
            id='subject'
            type='text'
            placeholder='Subject'
            value={subject}
            onChange={(event) => setSubject(event.currentTarget.value)}
            required
          />
          <CustomTextarea
            id='message'
            placeholder='Message'
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
            required
          />
          <Button
            type='submit'
            variant='solid'
            colorScheme='blue'
            size='lg'
            loading={isLoading}
            loadingText='Submitting message...'
          >
            Send Message
          </Button>
        </VStack>
      </ClientOnly>
    </Stack>
  )
}
