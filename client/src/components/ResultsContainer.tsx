import { SearchQuery } from '../types'
import { SourceCard } from './SourceCard'

interface ResultsContainerProps {
  query: SearchQuery | null
  loading: boolean
  error: string | null
}

export function ResultsContainer({ query, loading, error }: ResultsContainerProps) {
  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">Error</h3>
        <p className="text-red-800 dark:text-red-300">{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!query) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Answer</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">{query.synthesis}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sources</h2>
        <div className="grid gap-4">
          {query.sources.map((source) => (
            <SourceCard key={source.id} source={source} />
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Search performed on {new Date(query.timestamp).toLocaleString()}</p>
      </div>
    </div>
  )
}
