import { Box, Heading, Text, Container, Image } from '@chakra-ui/react'
import Card from './Card'
import spaceNeedleImage from '../assets/space-needle-hero.jpg'

export default function Banner({ title }) {
  return (
    <Container maxW="container.lg" py={12}>
      <Card overflow="hidden" p={0}>
        <Box position="relative">
          <Image
            src={spaceNeedleImage}
            alt="Seattle Space Needle - An iconic observation tower and landmark in Seattle, Washington"
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
                      Discover the Emerald City through authentic recommendations from a local perspective. Explore great places to eat, iconic sights, and fun group activities that showcase the real Seattle.
                    </Text>
          </Box>
        </Box>
      </Card>
    </Container>
  )
}

