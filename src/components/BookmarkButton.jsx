import { IconButton, Box } from '@chakra-ui/react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { useBookmarks } from '../hooks/useBookmarks'
import { Tooltip } from './ui/tooltip'

export default function BookmarkButton({ itemId, itemType, itemTitle, onToggle }) {
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const bookmarked = isBookmarked(itemId, itemType)

  const handleToggle = () => {
    toggleBookmark(itemId, itemType, itemTitle)
    if (onToggle) {
      onToggle(!bookmarked)
    }
  }

  const tooltipText = bookmarked 
    ? `Remove ${itemTitle} from bucket list` 
    : `Add ${itemTitle} to bucket list`

  return (
    <Tooltip content={tooltipText}>
      <Box>
        <IconButton
          aria-label={tooltipText}
          onClick={handleToggle}
          variant="solid"
          size="sm"
          bg={bookmarked ? 'blue.500' : 'blackAlpha.600'}
          _dark={{ bg: bookmarked ? 'blue.600' : 'blackAlpha.700' }}
          border="none"
          _hover={{
            bg: bookmarked ? 'blue.600' : 'blackAlpha.700',
            _dark: { bg: bookmarked ? 'blue.500' : 'blackAlpha.800' },
            transform: 'scale(1.1)'
          }}
          _focus={{
            outline: '2px solid',
            outlineColor: 'blue.500',
            outlineOffset: '2px',
            _dark: { outlineColor: 'blue.400' }
          }}
          transition="all 0.2s"
        >
          {bookmarked ? (
            <FaBookmark color="white" size={20} />
          ) : (
            <FaRegBookmark color="white" size={20} />
          )}
        </IconButton>
      </Box>
    </Tooltip>
  )
}

