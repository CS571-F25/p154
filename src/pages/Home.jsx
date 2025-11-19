import { Container, Heading, Text, VStack, SimpleGrid, Box } from "@chakra-ui/react"
import { FaUtensils, FaCamera, FaUsers } from "react-icons/fa"
import Banner from "../components/Banner"
import Card from "../components/Card"
import FeatureCard from "../components/FeatureCard"

export default function Home() {
  const features = [
    {
      title: "Restaurants",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaUtensils,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
    },
    {
      title: "Sightseeing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaCamera,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      title: "Group Activities",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaUsers,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
    }
  ]

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} minH="100vh">
      <Banner 
        title="Welcome to Seattle"
      />

      <Container maxW="container.lg" pb={12}>
        <VStack spacing={10} align="stretch">
          <Card>
            <VStack align="start" spacing={4}>
              <Heading as="h2" size="xl" color="gray.800" _dark={{ color: 'gray.100' }}>
                About This Guide
              </Heading>
              <Text color="gray.700" _dark={{ color: 'gray.300' }} lineHeight="1.8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Text color="gray.700" _dark={{ color: 'gray.300' }} lineHeight="1.8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </VStack>
          </Card>

          <Box>
            <VStack align="start" spacing={2} mb={6}>
              <Heading as="h2" size="xl" color="gray.800" _dark={{ color: 'gray.100' }}>
                Explore Seattle
              </Heading>
              <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                Discover what Seattle has to offer
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  image={feature.image}
                />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}