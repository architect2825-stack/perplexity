import { Request, Response, NextFunction } from 'express'

export interface AppError extends Error {
  status?: number
  code?: string
}

export function errorHandler(
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = error.status || 500
  const message = error.message || 'Internal Server Error'

  console.error('Error:', {
    status,
    message,
    path: req.path,
    method: req.method,
    timestamp: new Date().toISOString(),
  })

  res.status(status).json({
    success: false,
    error: {
      message,
      code: error.code || 'UNKNOWN_ERROR',
    },
  })
}

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    success: false,
    error: {
      message: 'Not Found',
      code: 'NOT_FOUND',
    },
  })
}
