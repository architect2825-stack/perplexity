import { SearchQuery } from '../types'

interface SearchHistoryProps {
  history: SearchQuery[]
  onSelect: (query: SearchQuery) => void
  onRemove: (id: string) => void
  onClear: () => void
}

export function SearchHistory({ history, onSelect, onRemove, onClear }: SearchHistoryProps) {
  if (history.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Searches</h3>
        <button
          onClick={onClear}
          className="text-sm px-3 py-1 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
        >
          Clear All
        </button>
      </div>
      <div className="space-y-2">
        {history.map((query) => (
          <div
            key={query.id}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-colors group"
          >
            <button
              onClick={() => onSelect(query)}
              className="flex-1 text-left hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <p className="font-medium text-gray-900 dark:text-white truncate">{query.query}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(query.timestamp).toLocaleString()}
              </p>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onRemove(query.id)
              }}
              className="ml-2 px-2 py-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
