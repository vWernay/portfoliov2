'use client'

import { footerData } from "@/constants";
import { Box, Flex, HStack, IconButton, Link, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack
      as='footer'
      spacing={[1, 2]}
      padding={4}
      justifyContent='space-between'
      alignItems='center'
      w={['100%', '90%', '90%']}
      maxW='container.lg'
      mx='auto'
    >
      <Flex
        flexDirection={['column', 'column', 'row']}
        flexFlow={['column-reverse', 'column-reverse']}
        justifyContent={['center', 'space-between']}
        alignItems='center'
        w='full'
      >
        <Text
          textAlign='center'
          fontSize='sm'
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          {footerData.author}
        </Text>
        <Box textAlign='center'>
          {footerData.socialUrls.map((socialMedia, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              aria-label={socialMedia.name}
              href={socialMedia.url}
              colorScheme={socialMedia.type}
              icon={socialMedia.icon}
              variant='ghost'
              size='lg'
              isRound
            />
          ))}
        </Box>
      </Flex>
    </HStack>
  )
}