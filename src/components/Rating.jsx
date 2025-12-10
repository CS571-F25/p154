import { HStack, Text, Icon, Box } from '@chakra-ui/react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useState } from 'react'
import { useRating } from '../hooks/useRating'

export default function Rating({ initialRating = 0, label = 'Rating', itemName = 'item', itemId }) {
  const { rating, setRating } = useRating(itemId, initialRating)
  const [hover, setHover] = useState(0)
  const ratingId = `rating-${itemId || Math.random().toString(36).substr(2, 9)}`

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  // Create 10 clickable positions (0.5 increments)
  const starValues = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  const displayRating = hover || rating

  // Group into 5 visual stars, each with left and right halves
  const visualStars = [1, 2, 3, 4, 5]

  const handleKeyDown = (event, starValue) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleRatingChange(starValue)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      const currentIndex = starValues.indexOf(starValue)
      if (currentIndex < starValues.length - 1) {
        const nextStar = document.getElementById(`${ratingId}-${starValues[currentIndex + 1]}`)
        nextStar?.focus()
      }
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      const currentIndex = starValues.indexOf(starValue)
      if (currentIndex > 0) {
        const prevStar = document.getElementById(`${ratingId}-${starValues[currentIndex - 1]}`)
        prevStar?.focus()
      }
    }
  }

  return (
    <Box role="group" aria-label={`${label} for ${itemName}`}>
      <HStack spacing={1} role="radiogroup" aria-label={label}>
        {visualStars.map((starNum) => {
          const leftHalfValue = starNum - 0.5
          const rightHalfValue = starNum
          const leftFilled = displayRating >= leftHalfValue
          const rightFilled = displayRating >= rightHalfValue
          const showHalfStar = leftFilled && !rightFilled

          return (
            <Box
              key={starNum}
              position="relative"
              display="inline-flex"
              w="20px"
              h="20px"
            >
              {/* Background empty star */}
              <Icon
                as={FaStar}
                boxSize={5}
                color="gray.300"
                _dark={{ color: 'gray.500' }}
                aria-hidden="true"
                position="absolute"
                pointerEvents="none"
              />
              {/* Filled portion */}
              {rightFilled ? (
                <Icon
                  as={FaStar}
                  boxSize={5}
                  color="blue.600"
                  _dark={{ color: 'blue.400' }}
                  aria-hidden="true"
                  position="absolute"
                  pointerEvents="none"
                />
              ) : showHalfStar ? (
                <Icon
                  as={FaStarHalfAlt}
                  boxSize={5}
                  color="blue.600"
                  _dark={{ color: 'blue.400' }}
                  aria-hidden="true"
                  position="absolute"
                  pointerEvents="none"
                />
              ) : null}
              {/* Left half - clickable for half star */}
              <Box
                id={`${ratingId}-${leftHalfValue}`}
                as="button"
                type="button"
                role="radio"
                aria-checked={Math.abs(rating - leftHalfValue) < 0.1}
                aria-label={`Rate ${leftHalfValue} out of 5 stars`}
                aria-describedby={`${ratingId}-description`}
                onClick={() => handleRatingChange(leftHalfValue)}
                onMouseEnter={() => setHover(leftHalfValue)}
                onMouseLeave={() => setHover(0)}
                onKeyDown={(e) => handleKeyDown(e, leftHalfValue)}
                onFocus={() => setHover(leftHalfValue)}
                onBlur={() => setHover(0)}
                cursor="pointer"
                tabIndex={0}
                position="absolute"
                left={0}
                top={0}
                w="50%"
                h="100%"
                zIndex={2}
                _focus={{ 
                  outline: '2px solid',
                  outlineColor: 'blue.500',
                  outlineOffset: '2px'
                }}
                transition="transform 0.2s"
                bg="transparent"
              />
              {/* Right half - clickable for full star */}
              <Box
                id={`${ratingId}-${rightHalfValue}`}
                as="button"
                type="button"
                role="radio"
                aria-checked={Math.abs(rating - rightHalfValue) < 0.1}
                aria-label={`Rate ${rightHalfValue} out of 5 stars`}
                aria-describedby={`${ratingId}-description`}
                onClick={() => handleRatingChange(rightHalfValue)}
                onMouseEnter={() => setHover(rightHalfValue)}
                onMouseLeave={() => setHover(0)}
                onKeyDown={(e) => handleKeyDown(e, rightHalfValue)}
                onFocus={() => setHover(rightHalfValue)}
                onBlur={() => setHover(0)}
                cursor="pointer"
                tabIndex={0}
                position="absolute"
                right={0}
                top={0}
                w="50%"
                h="100%"
                zIndex={2}
                _focus={{ 
                  outline: '2px solid',
                  outlineColor: 'blue.500',
                  outlineOffset: '2px'
                }}
                transition="transform 0.2s"
                bg="transparent"
              />
            </Box>
          )
        })}
      </HStack>
      <Text 
        id={`${ratingId}-description`}
        fontSize="sm" 
        color="gray.600" 
        _dark={{ color: 'gray.400' }} 
        mt={2}
        position={rating === 0 ? 'absolute' : 'static'}
        width={rating === 0 ? '1px' : 'auto'}
        height={rating === 0 ? '1px' : 'auto'}
        overflow={rating === 0 ? 'hidden' : 'visible'}
        clip={rating === 0 ? 'rect(0, 0, 0, 0)' : 'none'}
      >
        {rating > 0 ? `Current rating: ${rating} out of 5 stars` : 'No rating selected'}
      </Text>
      {rating === 0 ? (
        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={1} fontWeight="medium">
          Rate!
        </Text>
      ) : (
        <Text fontSize="sm" color="gray.700" _dark={{ color: 'gray.300' }} mt={1} fontWeight="medium">
          {rating % 1 === 0 ? `${rating}/5` : `${rating}/5`}
        </Text>
      )}
    </Box>
  )
}

