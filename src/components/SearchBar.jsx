import { Input, Icon, Box } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export default function SearchBar({ placeholder = "Search...", onSearch, value: controlledValue, onChange }) {
  const [internalValue, setInternalValue] = useState('')
  const value = controlledValue !== undefined ? controlledValue : internalValue
  const setValue = onChange || setInternalValue

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    if (onSearch) {
      onSearch(newValue)
    }
  }

  return (
    <Box w="100%" position="relative">
      <Icon
        as={FaSearch}
        position="absolute"
        left={3}
        top="50%"
        transform="translateY(-50%)"
        color="gray.500"
        _dark={{ color: 'gray.400' }}
        zIndex={1}
        pointerEvents="none"
        boxSize={4}
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        pl={10}
        bg="white"
        borderColor="gray.300"
        color="gray.800"
        _dark={{ 
          bg: 'gray.800',
          borderColor: 'gray.600',
          color: 'gray.100'
        }}
        _placeholder={{
          color: 'gray.500',
          _dark: { color: 'gray.400' }
        }}
        _focus={{
          borderColor: 'blue.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
          _dark: {
            borderColor: 'blue.400',
            boxShadow: '0 0 0 1px var(--chakra-colors-blue-400)'
          }
        }}
        aria-label={placeholder}
      />
    </Box>
  )
}

