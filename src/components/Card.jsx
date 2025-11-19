import { Box } from '@chakra-ui/react'

export default function Card({ children, ...props }) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.200"
      _dark={{ 
        bg: 'gray.800',
        borderColor: 'gray.700' 
      }}
      p={6}
      {...props}
    >
      {children}
    </Box>
  )
}


