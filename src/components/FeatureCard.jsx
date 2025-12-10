import { Heading, Text, VStack, Icon, Image, Box } from '@chakra-ui/react'
import Card from './Card'

export default function FeatureCard({ title, description, icon, image }) {
  return (
    <Card height="100%" p={0} overflow="hidden">
      {image && (
        <Image
          src={image}
          alt={`${title} - Featured destination in Seattle`}
          w="100%"
          h="200px"
          objectFit="cover"
        />
      )}
      <Box p={6}>
        <VStack align="start" spacing={4}>
          {icon && (
            <Icon
              as={icon}
              boxSize={8}
              color="blue.600"
              _dark={{ color: 'blue.400' }}
            />
          )}
          <Heading as="h3" size="md" color="gray.800" _dark={{ color: 'gray.100' }}>
            {title}
          </Heading>
          <Text color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="1.6">
            {description}
          </Text>
        </VStack>
      </Box>
    </Card>
  )
}

