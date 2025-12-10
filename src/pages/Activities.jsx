import { Container, SimpleGrid, Box } from "@chakra-ui/react"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import ItemCard from "../components/ItemCard"
import { activities } from "../data/seattleData"

export default function Activities() {

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} minH="100vh" py={12}>
      <Container maxW="container.lg">
        <Box spacing={10} align="stretch">
          <PageHeader 
            title="Group Activities in Seattle"
            description="Discover fun and engaging activities perfect for groups visiting Seattle. From interactive museums to scenic attractions, these experiences are designed to bring people together while exploring the city's unique culture and attractions. Whether you're traveling with family, friends, or colleagues, these activities offer memorable shared experiences."
          />

          <Box mt={10}>
            <SectionHeader 
              title="Recommended Activities"
              subtitle="Great activities to do with a group"
            />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {activities.map((activity) => (
                <ItemCard
                  key={activity.id}
                  id={activity.id}
                  title={activity.title}
                  description={activity.description}
                  image={activity.image}
                  rating={activity.rating}
                  ratingLabel="Activity rating"
                  imageAlt={`${activity.title} - A recommended group activity in Seattle`}
                  itemType={activity.type}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

