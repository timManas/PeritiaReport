import asyncHandler from 'express-async-handler'
import Article from '../models/articleModel.js'

const fetchArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({})
  res.send(articles)
})

export default fetchArticles
