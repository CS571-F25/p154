import { Box, Text } from '@chakra-ui/react'

export default function CategoryBadge({ category, size = "md" }) {
  const categoryColors = {
    'places-to-eat': { bg: 'orange.100', color: 'orange.800', _dark: { bg: 'orange.900', color: 'orange.200' } },
    sightseeing: { bg: 'blue.100', color: 'blue.800', _dark: { bg: 'blue.900', color: 'blue.200' } },
    activities: { bg: 'green.100', color: 'green.800', _dark: { bg: 'green.900', color: 'green.200' } }
  }

  const categoryLabels = {
    'places-to-eat': 'Places to Eat',
    sightseeing: 'Sightseeing',
    activities: 'Activities'
  }

  const sizeStyles = {
    sm: { px: 2, py: 1, fontSize: 'xs' },
    md: { px: 3, py: 1.5, fontSize: 'sm' },
    lg: { px: 4, py: 2, fontSize: 'md' }
  }

  const colors = categoryColors[category] || { bg: 'gray.100', color: 'gray.800', _dark: { bg: 'gray.700', color: 'gray.200' } }
  const sizes = sizeStyles[size] || sizeStyles.md
  const label = categoryLabels[category] || category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <Box
      display="inline-block"
      borderRadius="full"
      fontWeight="medium"
      {...colors}
      {...sizes}
    >
      <Text as="span">
        {label}
      </Text>
    </Box>
  )
}

