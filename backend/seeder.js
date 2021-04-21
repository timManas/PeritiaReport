import mongoose from 'mongoose'
import dotenv from 'dotenv'
import articles from './data/articles.js'
import Article from './models/articleModel.js'

dotenv.config() // initialize .env so we can use it

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
connectDB() // initialize DB connection

const importData = async () => {
  try {
    // Clear all existing data
    await Article.deleteMany() // We use await since this returns a promise
    const createdArticle = await Article.insertMany(articles) // insertMany returns a list
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

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
