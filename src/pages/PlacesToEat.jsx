import { Container, SimpleGrid, Box } from "@chakra-ui/react"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import ItemCard from "../components/ItemCard"
import { placesToEat } from "../data/seattleData"

export default function PlacesToEat() {

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} minH="100vh" py={12}>
      <Container maxW="container.lg">
        <Box spacing={10} align="stretch">
          <PageHeader 
            title="Places to Eat in Seattle"
            description="Discover Seattle's vibrant culinary scene, from historic markets to fine dining establishments, coffee shops, and dessert spots. Whether you're craving fresh seafood, farm-to-table cuisine, international flavors, or a perfect cup of coffee, Seattle offers an authentic dining experience that reflects the city's diverse culture and commitment to local ingredients."
          />

          <Box mt={10}>
            <SectionHeader 
              title="Recommended Places to Eat"
              subtitle="Check out these great dining spots"
            />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {placesToEat.map((place) => (
                <ItemCard
                  key={place.id}
                  id={place.id}
                  title={place.title}
                  description={place.description}
                  image={place.image}
                  rating={place.rating}
                  ratingLabel="Dining rating"
                  imageAlt={`${place.title} - A recommended place to eat in Seattle`}
                  itemType={place.type}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

