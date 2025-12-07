import { useTheme } from './hooks/useTheme'
import { useSearch } from './hooks/useSearch'
import { SearchBox } from './components/SearchBox'
import { ResultsContainer } from './components/ResultsContainer'
import { SearchHistory } from './components/SearchHistory'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  const { isDark, toggleTheme } = useTheme()
  const {
    currentQuery,
    setCurrentQuery,
    loading,
    error,
    history,
    search,
    clearHistory,
    removeFromHistory,
  } = useSearch()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur z-10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Perplexity
              </h1>
            </div>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ask Anything
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get answers powered by AI with verified sources
            </p>
          </div>

          {/* Search Box */}
          <SearchBox onSearch={search} loading={loading} />

          {/* Results */}
          <ResultsContainer query={currentQuery} loading={loading} error={error} />

          {/* History */}
          {!currentQuery && !loading && (
            <SearchHistory
              history={history}
              onSelect={setCurrentQuery}
              onRemove={removeFromHistory}
              onClear={clearHistory}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            Made with ❤️ by{' '}
            <a
              href="https://github.com/architect2825-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Architect Stack
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
