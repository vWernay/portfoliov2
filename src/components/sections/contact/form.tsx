"use client"

import {
  ClientOnly,
  HStack,
  Input,
  type InputProps,
  Textarea,
  type TextareaProps,
  VStack,
} from "@chakra-ui/react"
import emailjs from "@emailjs/browser"
import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { useColorModeValue } from "@/components/ui/color-mode"
import { Skeleton } from "@/components/ui/skeleton"
import { toaster } from "@/components/ui/toaster"

const CustomInput = (props: InputProps) => {
  const inputBg = useColorModeValue("gray.100", "gray.900")
  return <Input bg={inputBg} size="lg" {...props} />
}
const CustomTextarea = (props: TextareaProps) => {
  const textareaBg = useColorModeValue("gray.100", "gray.900")
  return <Textarea bg={textareaBg} resize="none" size="lg" {...props} />
}

export function ContactForm() {
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
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        clearInputStates()
        toaster.create({
          title: "Email sent.",
          description:
            "You had successfully sent the email. I will reply your email ASAP. Thank you!",
          type: "success",
          duration: 5000,
        })
      })
      .catch((error) => {
        clearInputStates()
        toaster.create({
          title: "Email not sent.",
          description: error.text,
          type: "error",
          duration: 5000,
        })
      })
  }

  return (
    <ClientOnly fallback={<Skeleton h={200} w="full" />}>
      <VStack as="form" gap={4} onSubmit={handleSubmit} width="full">
        <HStack gap={4} width="full">
          <CustomInput
            id="name"
            onChange={(event) => setName(event.currentTarget.value)}
            placeholder="Name"
            required
            type="text"
            value={name}
          />
          <CustomInput
            id="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            placeholder="E-mail"
            required
            type="email"
            value={email}
          />
        </HStack>
        <CustomInput
          id="subject"
          onChange={(event) => setSubject(event.currentTarget.value)}
          placeholder="Subject"
          required
          type="text"
          value={subject}
        />
        <CustomTextarea
          id="message"
          onChange={(event) => setMessage(event.currentTarget.value)}
          placeholder="Message"
          required
          value={message}
        />
        <Button
          colorScheme="blue"
          loading={isLoading}
          loadingText="Submitting message..."
          size="lg"
          type="submit"
          variant="solid"
        >
          Send Message
        </Button>
      </VStack>
    </ClientOnly>
  )
}
