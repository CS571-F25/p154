import { Container, SimpleGrid, Box } from "@chakra-ui/react"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import ItemCard from "../components/ItemCard"
import { sightseeing } from "../data/seattleData"

export default function Sightseeing() {

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} minH="100vh" py={12}>
      <Container maxW="container.lg">
        <Box spacing={10} align="stretch">
          <PageHeader 
            title="Sightseeing in Seattle"
            description="Explore Seattle's most iconic landmarks and hidden gems. From the famous Space Needle to scenic parks with stunning city views, discover the places that make Seattle unique. Whether you're interested in architecture, natural beauty, or local culture, these sights offer authentic experiences that showcase the Emerald City's charm."
          />

          <Box mt={10}>
            <SectionHeader 
              title="Top Sights to See"
              subtitle="Don't miss these amazing places"
            />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {sightseeing.map((sight) => (
                <ItemCard
                  key={sight.id}
                  id={sight.id}
                  title={sight.title}
                  description={sight.description}
                  image={sight.image}
                  rating={sight.rating}
                  ratingLabel="Location rating"
                  imageAlt={`${sight.title} - A popular sightseeing destination in Seattle`}
                  itemType={sight.type}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

