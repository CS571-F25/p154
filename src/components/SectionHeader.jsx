import { Heading, Text, VStack } from '@chakra-ui/react'

export default function SectionHeader({ title, subtitle }) {
  return (
    <VStack align="start" spacing={2} mb={6}>
      <Heading as="h2" size="xl" color="gray.800" _dark={{ color: 'gray.100' }}>
        {title}
      </Heading>
      {subtitle && (
        <Text color="gray.600" _dark={{ color: 'gray.400' }}>
          {subtitle}
        </Text>
      )}
    </VStack>
  )
}

