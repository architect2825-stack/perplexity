import { Source } from '../types'

interface SourceCardProps {
  source: Source
}

export function SourceCard({ source }: SourceCardProps) {
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace('www.', '')
    } catch {
      return source.domain || 'source'
    }
  }

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md dark:hover:shadow-primary-500/20 transition-all hover:-translate-y-1 bg-white dark:bg-gray-800"
    >
      <div className="flex items-start gap-3">
        {source.favicon && (
          <img
            src={source.favicon}
            alt={getDomain(source.url)}
            className="w-5 h-5 rounded flex-shrink-0 mt-1"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{getDomain(source.url)}</p>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-primary-500 dark:hover:text-primary-400">
            {source.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{source.snippet}</p>
        </div>
      </div>
    </a>
  )
}
