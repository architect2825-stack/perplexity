import { useState, useCallback } from 'react'
import { SearchQuery } from '../types'
import { apiClient } from '../services/api'
import { useLocalStorage } from './useLocalStorage'

export function useSearch() {
  const [currentQuery, setCurrentQuery] = useState<SearchQuery | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [history, setHistory] = useLocalStorage<SearchQuery[]>('searchHistory', [])

  const search = useCallback(async (query: string) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const result = await apiClient.search(query)

      if (result.success && result.data) {
        const searchQuery: SearchQuery = {
          id: Date.now().toString(),
          query,
          timestamp: new Date(),
          synthesis: result.data.synthesis,
          sources: result.data.sources,
        }

        setCurrentQuery(searchQuery)
        setHistory([searchQuery, ...history.slice(0, 49)]) // Keep last 50
      } else {
        throw new Error(result.error || 'Search failed')
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      setCurrentQuery(null)
    } finally {
      setLoading(false)
    }
  }, [history, setHistory])

  const clearHistory = useCallback(() => {
    setHistory([])
    setCurrentQuery(null)
  }, [setHistory])

  const removeFromHistory = useCallback((id: string) => {
    setHistory(history.filter(q => q.id !== id))
  }, [history, setHistory])

  return {
    currentQuery,
    setCurrentQuery,
    loading,
    error,
    history,
    search,
    clearHistory,
    removeFromHistory,
  }
}
