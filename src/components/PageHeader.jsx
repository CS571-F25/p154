import { Heading, Text, VStack } from '@chakra-ui/react'
import Card from './Card'

export default function PageHeader({ title, description }) {
  return (
    <Card>
      <VStack align="start" spacing={4}>
        <Heading as="h1" size="2xl" color="gray.800" _dark={{ color: 'gray.100' }}>
          {title}
        </Heading>
        {description && (
          <Text color="gray.700" _dark={{ color: 'gray.300' }} lineHeight="1.8">
            {description}
          </Text>
        )}
      </VStack>
    </Card>
  )
}

