import mongoose from 'mongoose'
import dotenv from 'dotenv'
import articles from './data/articles.js'
import Article from './models/articleModel.js'

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
  const data = articles
  try {
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

// const createData = () => {}

// initialize DB connection
connectDB()

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData(articles)
}
