export interface SearchQuery {
  query: string
}

export interface SearchSource {
  id: string
  title: string
  url: string
  snippet: string
  domain: string
  favicon?: string
}

export interface SearchResponse {
  success: boolean
  data?: {
    query: string
    synthesis: string
    sources: SearchSource[]
    timestamp: string
  }
  error?: string
}

export interface APIError {
  message: string
  code?: string
  status?: number
}
