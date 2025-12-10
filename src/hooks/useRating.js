import { useState, useEffect } from 'react'

/**
 * Custom hook for managing ratings in localStorage
 * @param {string} itemId - The unique identifier for the item being rated
 * @param {number} initialRating - The initial rating value (default: 0)
 * @returns {object} - { rating, setRating }
 */
export function useRating(itemId, initialRating = 0) {
  const storageKey = itemId ? `rating-${itemId}` : null
  const [rating, setRatingState] = useState(0)

  // Load rating from localStorage on mount
  useEffect(() => {
    if (storageKey) {
      try {
        const savedRating = localStorage.getItem(storageKey)
        if (savedRating !== null) {
          const parsedRating = parseFloat(savedRating)
          if (!isNaN(parsedRating) && parsedRating > 0) {
            setRatingState(parsedRating)
          }
        }
      } catch (error) {
        console.error(`Error loading rating for "${storageKey}":`, error)
      }
    }
  }, [storageKey])

  // Save rating to localStorage when it changes
  const setRating = (newRating) => {
    setRatingState(newRating)
    if (storageKey) {
      try {
        localStorage.setItem(storageKey, newRating.toString())
      } catch (error) {
        console.error(`Error saving rating for "${storageKey}":`, error)
      }
    }
  }

  return { rating, setRating }
}

