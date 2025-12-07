import { Router } from 'express'
import { SearchController } from '../controllers/searchController.js'

const router = Router()

router.post('/', SearchController.search)
router.get('/history', SearchController.getHistory)

export default router
