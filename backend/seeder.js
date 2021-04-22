import mongoose from 'mongoose'
import dotenv from 'dotenv'
import articles from './data/articles.js'
import Article from './models/articleModel.js'
import axios from 'axios'

// initialize .env so we can use it
dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1) // exit(1) - means you return with error
  }
}

const importData = async (articles) => {
  try {
    const data = articles
    // Clear all existing data
    await Article.deleteMany() // We use await since this returns a promise
    const createdArticle = await Article.insertMany(data) // insertMany returns a list
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // Clear all existing data
    await Article.deleteMany() // We use await since this returns a promise
    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const createData = async () => {
  try {
    const topArticles = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    )

    // const newArticles = await axios.get(
    //   'https://hacker-news.firebaseio.com/v0/newstories.json'
    // )

    // const bestArticles = await axios.get(
    //   'https://hacker-news.firebaseio.com/v0/beststories.json'
    // )

    // console.log('Top: ' + JSON.stringify(topArticles.data))
    // console.log('New: ' + JSON.stringify(newArticles.data))
    // console.log('Best: ' + JSON.stringify(bestArticles.data))

    const articles = createList(topArticles.data)
    return articles
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const createList = async (topArticles) => {
  let list = []

  let i
  for (i = 0; i < topArticles.length; i++) {
    const articleId = topArticles[i]
    // console.log('articleId: ' + articleId)
    const { data } = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${articleId.toString()}.json?print=pretty`
    )

    const { id, title, url, time } = data

    // Filter out stories only
    if (data.type !== 'story') {
      continue
    }

    if (
      data.title.includes(
        'coin',
        'crypto',
        'bitcoin',
        'ethereum',
        'doge',
        'blockchain'
      )
    ) {
      const newData = {
        id,
        title,
        url,
        time,
      }
      list.push(newData)
      console.log('Article: ' + JSON.stringify(data))
    }
  }

  console.log('Finished Fetching')
  console.log('ListArticles: ' + JSON.stringify(list))

  return list
}

// initialize DB connection
connectDB()
if (process.argv[2] === '-d') {
  destroyData()
} else if (process.argv[2] === '-f') {
  const newArticles = await createData()
} else {
  const newArticles = await createData()
  importData(newArticles)
}
