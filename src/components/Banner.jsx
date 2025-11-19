import { Box, Heading, Text, Container, Image } from '@chakra-ui/react'
import Card from './Card'

export default function Banner({ title }) {
  return (
    <Container maxW="container.lg" py={12}>
      <Card overflow="hidden" p={0}>
        <Box position="relative">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop"
            alt="Seattle skyline"
            w="100%"
            h="300px"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.400"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p={8}
          >
            <Heading as="h1" size="2xl" mb={4} color="white">
              {title}
            </Heading>
            <Text fontSize="lg" color="white" lineHeight="1.7" maxW="2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </Box>
      </Card>
    </Container>
  )
}

