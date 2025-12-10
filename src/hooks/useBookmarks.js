import { useState, useEffect } from 'react'
import { getItemById } from '../data/seattleData'
import { FaUsers } from 'react-icons/fa'

const STORAGE_KEY = 'seattleBucketList'

/**
 * Custom hook for managing bookmarks
 * @returns {object} - { bookmarks, isBookmarked, addBookmark, removeBookmark, toggleBookmark, clearAll }
 */
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([])

  // Load bookmarks from localStorage
  useEffect(() => {
    const loadBookmarks = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        const itemsWithDetails = saved.map(bookmark => {
          const item = getItemById(bookmark.id, bookmark.type)
          return item || {
            ...bookmark,
            description: "Item details not available",
            icon: FaUsers,
            image: null,
            rating: 0
          }
        })
        setBookmarks(itemsWithDetails)
      } catch (error) {
        console.error('Error loading bookmarks:', error)
        setBookmarks([])
      }
    }

    loadBookmarks()

    // Listen for storage changes (cross-tab synchronization)
    const handleStorageChange = () => {
      loadBookmarks()
    }

    window.addEventListener('storage', handleStorageChange)
    // Also check periodically for same-tab changes
    const interval = setInterval(loadBookmarks, 500)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const isBookmarked = (itemId, itemType) => {
    return bookmarks.some(
      bookmark => bookmark.id === itemId && bookmark.type === itemType
    )
  }

  const addBookmark = (itemId, itemType, itemTitle) => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      const exists = saved.some(
        bookmark => bookmark.id === itemId && bookmark.type === itemType
      )

      if (!exists) {
        const newBookmark = {
          id: itemId,
          type: itemType,
          title: itemTitle,
          timestamp: new Date().toISOString()
        }
        saved.push(newBookmark)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
        
        // Update state immediately
        const item = getItemById(itemId, itemType)
        if (item) {
          setBookmarks(prev => [...prev, item])
        }
        
        window.dispatchEvent(new Event('storage'))
        return true
      }
      return false
    } catch (error) {
      console.error('Error adding bookmark:', error)
      return false
    }
  }

  const removeBookmark = (itemId, itemType) => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      const filtered = saved.filter(
        bookmark => !(bookmark.id === itemId && bookmark.type === itemType)
      )
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
      
      // Update state immediately
      setBookmarks(prev => prev.filter(
        bookmark => !(bookmark.id === itemId && bookmark.type === itemType)
      ))
      
      window.dispatchEvent(new Event('storage'))
      return true
    } catch (error) {
      console.error('Error removing bookmark:', error)
      return false
    }
  }

  const toggleBookmark = (itemId, itemType, itemTitle) => {
    const exists = isBookmarked(itemId, itemType)
    if (exists) {
      return removeBookmark(itemId, itemType)
    } else {
      return addBookmark(itemId, itemType, itemTitle)
    }
  }

  const clearAll = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      setBookmarks([])
      window.dispatchEvent(new Event('storage'))
      return true
    } catch (error) {
      console.error('Error clearing bookmarks:', error)
      return false
    }
  }

  return {
    bookmarks,
    isBookmarked,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    clearAll
  }
}

