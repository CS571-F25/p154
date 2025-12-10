import { Container, SimpleGrid, Box } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { FaStar } from "react-icons/fa"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import RatingCard from "../components/RatingCard"
import EmptyState from "../components/EmptyState"
import { getItemByIdAnyType } from "../data/seattleData"

export default function Ratings() {
  const [ratedItems, setRatedItems] = useState([])

  useEffect(() => {
    const loadRatings = () => {
      const ratings = []
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith('rating-')) {
          const itemId = key.replace('rating-', '')
          const ratingValue = parseFloat(localStorage.getItem(key))
          
          if (!isNaN(ratingValue) && ratingValue > 0) {
            const item = getItemByIdAnyType(itemId)
            if (item) {
              ratings.push({ item, rating: ratingValue })
            }
          }
        }
      }
      
      setRatedItems(ratings)
    }

    loadRatings()
    
    const handleStorageChange = () => {
      loadRatings()
    }
    
    window.addEventListener('storage', handleStorageChange)
    const interval = setInterval(loadRatings, 500)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const sortedRatings = [...ratedItems].sort((a, b) => b.rating - a.rating)

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} minH="100vh" py={12}>
      <Container maxW="container.lg">
        <Box spacing={10} align="stretch">
          <PageHeader 
            title="My Ratings"
            description="View all the places and activities you've rated. Your ratings help you remember your favorite Seattle experiences."
          />

          {ratedItems.length === 0 ? (
            <EmptyState
              icon={FaStar}
              title="No ratings yet"
              description="Start exploring Seattle and rate the places you visit!"
            />
          ) : (
            <Box mt={10}>
              <SectionHeader 
                title={`Your Rated Items (${ratedItems.length})`}
                subtitle="All places and activities you've rated"
              />
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} mt={6}>
                {sortedRatings.map(({ item, rating }) => (
                  <RatingCard
                    key={`${item.type}-${item.id}`}
                    item={item}
                    rating={rating}
                  />
                ))}
              </SimpleGrid>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

