'use client'

import { Button, Heading, HStack, Input, InputProps, Stack, Textarea, TextareaProps, useColorModeValue, useToast, VStack } from "@chakra-ui/react"
import emailjs from '@emailjs/browser'
import { FormEvent, useState } from "react"
import Paragraph from "../ui/Paragraph"

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
  const toast = useToast()

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

        toast({
          title: "Email sent.",
          description:
            "You had successfully sent the email. I will reply your email ASAP. Thank you!",
          status: "success",
          duration: 8000,
          isClosable: true,
        })
      })
      .catch((error) => {
        clearInputStates()

        toast({
          title: "Email not sent.",
          description: error.text,
          status: "error",
          duration: 8000,
          isClosable: true,
        })
      })
  }

  return (
    <Stack as='section' id='contact' spacing={4}>
      <Heading as='h2'>Contact me</Heading>
      <Paragraph fontSize='large'>Feel free to contact me!</Paragraph>
      <VStack as='form' onSubmit={handleSubmit} spacing={4} width='full'>
        <HStack width='full' spacing={4}>
          <CustomInput
            id='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            isRequired
          />
          <CustomInput
            id='email'
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            isRequired
          />
        </HStack>
        <CustomInput
          id='subject'
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={(event) => setSubject(event.currentTarget.value)}
          isRequired
        />
        <CustomTextarea
          id='message'
          placeholder='Message'
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          isRequired
        />
        <Button
          type='submit'
          variant='solid'
          colorScheme='blue'
          size='lg'
          isLoading={isLoading}
          loadingText='Submitting message...'
        >
          Send Message
        </Button>
      </VStack>
    </Stack>
  )
}
