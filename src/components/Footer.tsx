import { footerData } from "@/constants";
import { Box, ClientOnly, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

export default function Footer() {
  return (
    <HStack
      as='footer'
      gap={[1, 2]}
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
        <ClientOnly fallback={<SkeletonText w={300} noOfLines={1} />}>
          <Text
            textAlign='center'
            fontSize='sm'
            color="gray.fg"
          >
            {footerData.author}
          </Text>
        </ClientOnly>
        <Box textAlign='center'>
          {footerData.socialUrls.map((socialMedia, index) => (
            <IconButton
              key={socialMedia.name}
              aria-label={socialMedia.name}
              colorScheme={socialMedia.type}
              variant='ghost'
              size='lg'
              borderRadius="full"
              asChild
            >
              <Link target="_blank" rel="noopener noreferrer" href={socialMedia.url} aria-label={`Check my ${socialMedia.name} profile`}>
                {socialMedia.icon}
              </Link>
            </IconButton>
          ))}
        </Box>
      </Flex>
    </HStack>
  )
}