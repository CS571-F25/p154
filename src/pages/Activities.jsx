import { Container, Heading, Text, VStack, SimpleGrid, Box, Icon, Image } from "@chakra-ui/react"
import { FaUsers, FaGamepad, FaMusic } from "react-icons/fa"
import Card from "../components/Card"
import Rating from "../components/Rating"

export default function Activities() {
  const activities = [
    {
      title: "Group Activity 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaUsers,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      rating: 4
    },
    {
      title: "Group Activity 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaGamepad,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      rating: 5
    },
    {
      title: "Group Activity 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaMusic,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      rating: 3
    }
  ]

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} minH="100vh" py={12}>
      <Container maxW="container.lg">
        <VStack spacing={10} align="stretch">
          <Card>
            <VStack align="start" spacing={4}>
              <Heading as="h1" size="2xl" color="gray.800" _dark={{ color: 'gray.100' }}>
                Group Activities in Seattle
              </Heading>
              <Text color="gray.700" _dark={{ color: 'gray.300' }} lineHeight="1.8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>
            </VStack>
          </Card>

          <Box>
            <VStack align="start" spacing={2} mb={6}>
              <Heading as="h2" size="xl" color="gray.800" _dark={{ color: 'gray.100' }}>
                Recommended Activities
              </Heading>
              <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                Great activities to do with a group
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {activities.map((activity, index) => (
                <Card key={index} p={0} overflow="hidden">
                  {activity.image && (
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      w="100%"
                      h="200px"
                      objectFit="cover"
                    />
                  )}
                  <Box p={6}>
                    <VStack align="start" spacing={4}>
                      {activity.icon && (
                        <Icon
                          as={activity.icon}
                          boxSize={8}
                          color="blue.600"
                          _dark={{ color: 'blue.400' }}
                        />
                      )}
                      <Heading as="h3" size="md" color="gray.800" _dark={{ color: 'gray.100' }}>
                        {activity.title}
                      </Heading>
                      <Text color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="1.6">
                        {activity.description}
                      </Text>
                      <Box w="100%" pt={2}>
                        <Text fontSize="sm" mb={2} color="gray.700" _dark={{ color: 'gray.300' }} fontWeight="medium">
                          Rate this activity:
                        </Text>
                        <Rating initialRating={activity.rating} />
                      </Box>
                    </VStack>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

