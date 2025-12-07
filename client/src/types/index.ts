export interface SearchQuery {
  id: string
  query: string
  timestamp: Date
  synthesis: string
  sources: Source[]
}

export interface Source {
  id: string
  title: string
  url: string
  snippet: string
  domain: string
  favicon?: string
}

export interface SearchResult {
  success: boolean
  data?: {
    query: string
    synthesis: string
    sources: Source[]
    timestamp: string
  }
  error?: string
}

export interface SearchContextType {
  currentQuery: SearchQuery | null
  history: SearchQuery[]
  loading: boolean
  error: string | null
  search: (query: string) => Promise<void>
  clearHistory: () => void
  removeFromHistory: (id: string) => void
  setCurrentQuery: (query: SearchQuery | null) => void
}

export interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}
