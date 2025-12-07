import axios, { AxiosInstance } from 'axios'
import { SearchResult } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

class APIClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async search(query: string): Promise<SearchResult> {
    try {
      const response = await this.client.post<SearchResult>('/search', {
        query,
      })
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.error || 'Search failed')
      }
      throw error
    }
  }

  async getHistory(): Promise<{ queries: Array<{ id: string; query: string; timestamp: string }> }> {
    try {
      const response = await this.client.get('/search/history')
      return response.data
    } catch (error) {
      console.error('Failed to fetch history:', error)
      return { queries: [] }
    }
  }
}

export const apiClient = new APIClient()
