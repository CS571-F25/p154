import { VStack, Heading, Text, Icon } from '@chakra-ui/react'
import Card from './Card'

export default function EmptyState({ icon, title, description }) {
  return (
    <Card>
      <VStack spacing={4} py={8}>
        {icon && (
          <Icon as={icon} boxSize={12} color="gray.400" _dark={{ color: 'gray.500' }} />
        )}
        <Heading as="h2" size="lg" color="gray.600" _dark={{ color: 'gray.400' }}>
          {title}
        </Heading>
        {description && (
          <Text color="gray.600" _dark={{ color: 'gray.400' }} textAlign="center">
            {description}
          </Text>
        )}
      </VStack>
    </Card>
  )
}

