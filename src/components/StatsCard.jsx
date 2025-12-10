import { VStack, Heading, Text, Icon, Box } from '@chakra-ui/react'
import Card from './Card'

export default function StatsCard({ icon, title, value, description, color = "blue" }) {
  return (
    <Card height="100%">
      <VStack spacing={4} align="start">
        {icon && (
          <Icon
            as={icon}
            boxSize={10}
            color={`${color}.600`}
            _dark={{ color: `${color}.400` }}
          />
        )}
        <Box>
          <Text fontSize="3xl" fontWeight="bold" color="gray.800" _dark={{ color: 'gray.100' }}>
            {value}
          </Text>
          <Heading as="h3" size="md" color="gray.700" _dark={{ color: 'gray.300' }} mt={1}>
            {title}
          </Heading>
        </Box>
        {description && (
          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            {description}
          </Text>
        )}
      </VStack>
    </Card>
  )
}

