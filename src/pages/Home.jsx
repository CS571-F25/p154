import { Container, Heading, Text, VStack, SimpleGrid, Box, Link } from "@chakra-ui/react"
import { FaUtensils, FaCamera, FaUsers, FaMountain, FaCoffee, FaTree } from "react-icons/fa"
import { Link as RouterLink } from "react-router"
import Banner from "../components/Banner"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import StatsCard from "../components/StatsCard"

export default function Home() {
  const features = [
    {
      title: "Places to Eat",
      value: "Explore",
      description: "Discover Seattle's vibrant culinary scene, from historic markets to fine dining establishments, coffee shops, and dessert spots. Explore fresh seafood, farm-to-table cuisine, and international flavors that reflect the city's diverse culture.",
      icon: FaUtensils,
      color: "orange",
      path: "/places-to-eat"
    },
    {
      title: "Sightseeing",
      value: "Discover",
      description: "Explore Seattle's most iconic landmarks and hidden gems. From the famous Space Needle to scenic parks with stunning city views, discover the places that make Seattle unique.",
      icon: FaCamera,
      color: "blue",
      path: "/sightseeing"
    },
    {
      title: "Group Activities",
      value: "Experience",
      description: "Find fun and engaging activities perfect for groups visiting Seattle. From interactive museums to scenic attractions, these experiences bring people together while exploring the city's unique culture.",
      icon: FaUsers,
      color: "green",
      path: "/activities"
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
                As an out-of-state student from Seattle, I created this guide to help bridge the gap for those visiting the city. Rather than just providing the top ten tourist locations, this site offers an authentic, unique, and relatable perspective based on firsthand experiences.
              </Text>
              <Text color="gray.700" _dark={{ color: 'gray.300' }} lineHeight="1.8">
                Whether you're from Wisconsin or anywhere else, this guide will help you discover the real Seattle through personal recommendations for great places to eat, amazing sights to see, and fun group activities to enjoy.
              </Text>
            </VStack>
          </Card>

          <Box>
            <SectionHeader 
              title="Seattle by the Numbers"
              subtitle="Quick facts about the Emerald City"
            />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} mb={10}>
              <StatsCard
                icon={FaUsers}
                title="Population"
                value="816K+"
                description="City residents"
                color="blue"
              />
              <StatsCard
                icon={FaMountain}
                title="Elevation"
                value="520 ft"
                description="Above sea level"
                color="green"
              />
              <StatsCard
                icon={FaCoffee}
                title="Coffee Shops"
                value="2,000+"
                description="More per capita than any US city"
                color="orange"
              />
              <StatsCard
                icon={FaTree}
                title="Parks"
                value="485"
                description="Parks and preserved spaces"
                color="green"
              />
            </SimpleGrid>
          </Box>

          <Box>
            <SectionHeader 
              title="Explore Seattle"
              subtitle="Discover what Seattle has to offer"
            />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {features.map((feature, index) => (
                <Link
                  key={index}
                  as={RouterLink}
                  to={feature.path}
                  _hover={{ textDecoration: 'none' }}
                  _focus={{
                    outline: '2px solid',
                    outlineColor: 'blue.500',
                    outlineOffset: '2px',
                    borderRadius: 'md'
                  }}
                >
                  <Box
                    _hover={{
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.2s ease-in-out'
                    }}
                    transition="transform 0.2s ease-in-out"
                    cursor="pointer"
                  >
                    <StatsCard
                      icon={feature.icon}
                      title={feature.title}
                      value={feature.value}
                      description={feature.description}
                      color={feature.color}
                    />
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}