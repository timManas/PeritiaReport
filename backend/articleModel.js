import mongoose from 'mongoose'

const articleSchema = mongoose.Schema({
  // ArticleId, time, title, url
  articleId: { type: String, required: false },
  title: { type: String, required: true },
  time: { type: Number, required: true },
  url: { type: String, required: true },
})

const Article = mongoose.model('Article', articleSchema)
export default Article
