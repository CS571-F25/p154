import { Link, Box } from '@chakra-ui/react'

export default function SkipLink() {
  return (
    <Box
      as={Link}
      href="#main-content"
      position="absolute"
      top={-100}
      left={0}
      bg="blue.600"
      color="white"
      px={4}
      py={2}
      zIndex={1000}
      _focus={{
        top: 0,
        outline: '2px solid',
        outlineColor: 'blue.500',
        outlineOffset: '2px'
      }}
      _dark={{
        bg: 'blue.500',
        _focus: {
          outlineColor: 'blue.300'
        }
      }}
    >
      Skip to main content
    </Box>
  )
}

