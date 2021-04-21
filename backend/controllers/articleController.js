import asyncHandler from 'express-async-handler'
import Article from '../models/articleModel.js'

const fetchArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({})
  console.log('Articles: ' + JSON.stringify(articles))
  res.send(articles)
})

export default fetchArticles
