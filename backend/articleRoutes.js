import express from 'express'
import { fetchArticles } from './articleController.js'

const router = express.Router()
router.route('/').get(fetchArticles)

export default router
