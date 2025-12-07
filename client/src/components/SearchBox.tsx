import { useState, FormEvent } from 'react'

interface SearchBoxProps {
  onSearch: (query: string) => void
  loading?: boolean
}

export function SearchBox({ onSearch, loading = false }: SearchBoxProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
          className="w-full px-6 py-3 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
          autoFocus
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white rounded-full font-medium transition-colors disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Searching...
            </span>
          ) : (
            'Search'
          )}
        </button>
      </div>
    </form>
  )
}
