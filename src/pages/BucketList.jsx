import { Container, SimpleGrid, Box, Button, Flex, HStack } from "@chakra-ui/react"
import { useState } from "react"
import { FaBookmark } from "react-icons/fa"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import ItemCard from "../components/ItemCard"
import EmptyState from "../components/EmptyState"
import SearchBar from "../components/SearchBar"
import { useBookmarks } from "../hooks/useBookmarks"

export default function BucketList() {
  const { bookmarks, clearAll } = useBookmarks()
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your entire bucket list?')) {
      clearAll()
    }
  }

  const categoryCounts = {
    all: bookmarks.length,
    'places-to-eat': bookmarks.filter(b => b.type === 'places-to-eat').length,
    sightseeing: bookmarks.filter(b => b.type === 'sightseeing').length,
    activities: bookmarks.filter(b => b.type === 'activities').length
  }

  const filteredBookmarks = bookmarks.filter(bookmark => {
    if (categoryFilter !== 'all' && bookmark.type !== categoryFilter) {
      return false
    }
    
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return bookmark.title.toLowerCase().includes(query) || 
           bookmark.description.toLowerCase().includes(query) ||
           bookmark.type.toLowerCase().includes(query)
  })

  const groupedBookmarks = {
    'places-to-eat': filteredBookmarks.filter(b => b.type === 'places-to-eat'),
    sightseeing: filteredBookmarks.filter(b => b.type === 'sightseeing'),
    activities: filteredBookmarks.filter(b => b.type === 'activities')
  }

  const totalFiltered = filteredBookmarks.length

  return (
    <Box bg="white" _dark={{ bg: 'gray.800' }} minH="100vh" py={12}>
      <Container maxW="container.lg">
        <Box spacing={10} align="stretch">
          <PageHeader 
            title="Bucket List"
            description="Your saved places and activities to explore in Seattle. Bookmark items from any page to add them here for easy reference."
          />

          {bookmarks.length === 0 ? (
            <EmptyState
              icon={FaBookmark}
              title="Your bucket list is empty"
              description="Start exploring Seattle and bookmark items you'd like to visit or try!"
            />
          ) : (
            <>
              <Box mt={10}>
                <Flex justify="space-between" align="center" mb={6} flexWrap="wrap" gap={4}>
                  <Box flex={1} minW="200px">
                    <SectionHeader 
                      title={`Saved Items (${bookmarks.length})`}
                      subtitle="All your bookmarked places and activities"
                    />
                  </Box>
                  <Button
                    onClick={handleClearAll}
                    colorScheme="red"
                    variant="outline"
                    size="sm"
                  >
                    Clear All
                  </Button>
                </Flex>

                <Box mb={6}>
                  <SearchBar
                    placeholder="Search your bucket list..."
                    value={searchQuery}
                    onChange={setSearchQuery}
                  />
                </Box>

                <Box mb={6}>
                  <HStack spacing={3} flexWrap="wrap">
                    <Button
                      size="sm"
                      variant={categoryFilter === 'all' ? 'solid' : 'outline'}
                      colorScheme={categoryFilter === 'all' ? 'blue' : 'gray'}
                      onClick={() => setCategoryFilter('all')}
                    >
                      All ({categoryCounts.all})
                    </Button>
                    <Button
                      size="sm"
                      variant={categoryFilter === 'places-to-eat' ? 'solid' : 'outline'}
                      colorScheme={categoryFilter === 'places-to-eat' ? 'orange' : 'gray'}
                      onClick={() => setCategoryFilter('places-to-eat')}
                    >
                      Places to Eat ({categoryCounts['places-to-eat']})
                    </Button>
                    <Button
                      size="sm"
                      variant={categoryFilter === 'sightseeing' ? 'solid' : 'outline'}
                      colorScheme={categoryFilter === 'sightseeing' ? 'blue' : 'gray'}
                      onClick={() => setCategoryFilter('sightseeing')}
                    >
                      Sightseeing ({categoryCounts.sightseeing})
                    </Button>
                    <Button
                      size="sm"
                      variant={categoryFilter === 'activities' ? 'solid' : 'outline'}
                      colorScheme={categoryFilter === 'activities' ? 'green' : 'gray'}
                      onClick={() => setCategoryFilter('activities')}
                    >
                      Activities ({categoryCounts.activities})
                    </Button>
                  </HStack>
                </Box>

                {totalFiltered === 0 ? (
                  <EmptyState
                    icon={FaBookmark}
                    title="No results found"
                    description={searchQuery 
                      ? `No items match "${searchQuery}". Try a different search term.`
                      : `No items found in this category.`}
                  />
                ) : (
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                    {filteredBookmarks.map((item) => (
                      <ItemCard
                        key={`${item.type}-${item.id}`}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        rating={item.rating}
                        ratingLabel={
                          item.type === 'places-to-eat' ? 'Dining rating' :
                          item.type === 'sightseeing' ? 'Location rating' :
                          'Activity rating'
                        }
                        imageAlt={`${item.title} - A recommended destination in Seattle`}
                        itemType={item.type}
                      />
                    ))}
                  </SimpleGrid>
                )}
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  )
}

