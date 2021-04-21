import express from 'express'
import { fetchArticles } from '../controllers/articleController.js'

const router = express.Router()
router.route('/').get(fetchArticles)

export default router
