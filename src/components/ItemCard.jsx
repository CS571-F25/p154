import { Heading, Text, VStack, Icon, Image, Box, Flex } from '@chakra-ui/react'
import Card from './Card'
import Rating from './Rating'
import BookmarkButton from './BookmarkButton'
import CategoryBadge from './CategoryBadge'

export default function ItemCard({ 
  id, 
  title, 
  description, 
  icon, 
  image, 
  rating, 
  ratingLabel, 
  imageAlt, 
  itemType 
}) {
  return (
    <Card p={0} overflow="hidden" height="100%" position="relative">
      {image && (
        <Image
          src={image}
          alt={imageAlt || `${title} - A recommended destination in Seattle`}
          w="100%"
          h="200px"
          objectFit="cover"
        />
      )}
      <Box
        position="absolute"
        top={2}
        right={2}
        zIndex={1}
      >
        <BookmarkButton 
          itemId={id || title} 
          itemType={itemType || 'general'}
          itemTitle={title}
        />
      </Box>
      <Box p={6}>
        <VStack align="start" spacing={4}>
          <Flex align="center" gap={2} w="100%">
            <CategoryBadge category={itemType || 'general'} size="sm" />
          </Flex>
          {icon && (
            <Icon
              as={icon}
              boxSize={8}
              color="blue.600"
              _dark={{ color: 'blue.400' }}
              aria-hidden="true"
            />
          )}
          <Heading as="h3" size="md" color="gray.800" _dark={{ color: 'gray.100' }}>
            {title}
          </Heading>
          <Text color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="1.6">
            {description}
          </Text>
          {rating !== undefined && (
            <Box w="100%" pt={2}>
              <Rating 
                initialRating={rating} 
                label={ratingLabel || "Rating"} 
                itemName={title}
                itemId={id || title}
              />
            </Box>
          )}
        </VStack>
      </Box>
    </Card>
  )
}

