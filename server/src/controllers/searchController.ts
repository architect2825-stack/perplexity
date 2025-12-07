import { Request, Response } from 'express'
import { SearchService } from '../services/searchService.js'
import { SearchResponse } from '../types/index.js'

const searchService = new SearchService()

export class SearchController {
  static async search(req: Request, res: Response): Promise<void> {
    try {
      const { query } = req.body

      if (!query || typeof query !== 'string' || query.trim().length === 0) {
        res.status(400).json({
          success: false,
          error: 'Query is required and must be a non-empty string',
        } as SearchResponse)
        return
      }

      if (query.length > 500) {
        res.status(400).json({
          success: false,
          error: 'Query is too long (max 500 characters)',
        } as SearchResponse)
        return
      }

      const { synthesis, sources } = await searchService.search(query.trim())

      res.json({
        success: true,
        data: {
          query,
          synthesis,
          sources,
          timestamp: new Date().toISOString(),
        },
      } as SearchResponse)
    } catch (error) {
      console.error('Search controller error:', error)
      res.status(500).json({
        success: false,
        error: 'An error occurred while processing your search',
      } as SearchResponse)
    }
  }

  static async getHistory(req: Request, res: Response): Promise<void> {
    try {
      // In a real app, this would query a database
      res.json({
        queries: [],
      })
    } catch (error) {
      console.error('Get history error:', error)
      res.status(500).json({
        error: 'Failed to retrieve history',
      })
    }
  }
}
