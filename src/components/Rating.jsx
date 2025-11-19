import { HStack, Text, Icon, Box } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

export default function Rating({ initialRating = 0 }) {
  const [rating, setRating] = useState(initialRating)
  const [hover, setHover] = useState(0)

  return (
    <HStack spacing={1}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hover || rating)
        return (
          <Box
            key={star}
            as="button"
            aria-label={`Rate ${star} stars`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            cursor="pointer"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.2s"
          >
            <Icon
              as={FaStar}
              boxSize={5}
              color={isFilled ? 'blue.600' : 'gray.300'}
              _dark={{ color: isFilled ? 'blue.400' : 'gray.500' }}
            />
          </Box>
        )
      })}
      {rating > 0 && (
        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} ml={2}>
          {rating}/5
        </Text>
      )}
    </HStack>
  )
}

