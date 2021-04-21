import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listArticles } from '../actions/articleActions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const articleList = useSelector((state) => state.articleList)
  const { articles } = articleList
  console.log('ArticleList: ' + JSON.stringify(articles))

  useEffect(() => {
    dispatch(listArticles())
  }, [dispatch])

  return (
    <>
      <h1>HomeScreen</h1>
    </>
  )
}

export default HomeScreen
