import { Flex, Box, Link, Heading, Container } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { ColorModeButton } from './ui/color-mode'

export default function NavBar() {
  return (
    <Box
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      _dark={{ 
        bg: 'gray.800',
        borderColor: 'gray.700' 
      }}
      py={6}
      px={4}
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between" gap={8}>
          <Link 
            as={RouterLink} 
            to="/"
            _hover={{ textDecoration: 'none' }}
            flexShrink={0}
          >
            <Heading size="lg" color="blue.600" _dark={{ color: 'blue.400' }}>
              The Emerald City Guide
            </Heading>
          </Link>
          
          <Flex flex={1} justify="center" align="center" gap={8}>
            <Link 
              as={RouterLink} 
              to="/" 
              color="gray.700"
              _dark={{ color: 'gray.300' }}
              _hover={{ color: 'blue.600', _dark: { color: 'blue.400' } }}
              fontWeight="medium"
              whiteSpace="nowrap"
            >
              Home
            </Link>
            <Link 
              as={RouterLink} 
              to="/restaurants"
              color="gray.700"
              _dark={{ color: 'gray.300' }}
              _hover={{ color: 'blue.600', _dark: { color: 'blue.400' } }}
              fontWeight="medium"
              whiteSpace="nowrap"
            >
              Restaurants
            </Link>
            <Link 
              as={RouterLink} 
              to="/sightseeing"
              color="gray.700"
              _dark={{ color: 'gray.300' }}
              _hover={{ color: 'blue.600', _dark: { color: 'blue.400' } }}
              fontWeight="medium"
              whiteSpace="nowrap"
            >
              Sightseeing
            </Link>
            <Link 
              as={RouterLink} 
              to="/activities"
              color="gray.700"
              _dark={{ color: 'gray.300' }}
              _hover={{ color: 'blue.600', _dark: { color: 'blue.400' } }}
              fontWeight="medium"
              whiteSpace="nowrap"
            >
              Activities
            </Link>
          </Flex>
          
          <Box flexShrink={0}>
            <ColorModeButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
