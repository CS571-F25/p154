import { Heading, VStack, Image, Box, Flex } from '@chakra-ui/react'
import Card from './Card'
import Rating from './Rating'
import CategoryBadge from './CategoryBadge'

export default function RatingCard({ item, rating }) {
  return (
    <Card p={0} overflow="hidden" height="100%">
      {item.image && (
        <Image
          src={item.image}
          alt={`${item.title} - A rated destination in Seattle`}
          w="100%"
          h="200px"
          objectFit="cover"
        />
      )}
      <Box p={6}>
        <VStack align="start" spacing={4}>
          <Flex align="center" gap={2} w="100%">
            <CategoryBadge category={item.type} size="sm" />
          </Flex>
          <Heading as="h3" size="md" color="gray.800" _dark={{ color: 'gray.100' }}>
            {item.title}
          </Heading>
          <Box w="100%" pt={2}>
            <Rating
              itemId={item.id}
              initialRating={rating}
              label={
                item.type === 'places-to-eat' ? 'Dining rating' :
                item.type === 'sightseeing' ? 'Location rating' :
                'Activity rating'
              }
              itemName={item.title}
            />
          </Box>
        </VStack>
      </Box>
    </Card>
  )
}

