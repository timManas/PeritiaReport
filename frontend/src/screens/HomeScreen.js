import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listArticles } from '../actions/articleActions'
import Article from '../components/Article'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const articleList = useSelector((state) => state.articleList)
  const { articles } = articleList

  useEffect(() => {
    dispatch(listArticles())
  }, [dispatch])

  return (
    <>
      <h1>Top Stories WorldWide</h1>
      <Row>
        {articles.map((article) => (
          <Col key={article.id}>
            <Article article={article} />
          </Col>
        ))}
      </Row>
      <script
        data-ad-client='ca-pub-1371079713669867'
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      ></script>
    </>
  )
}

export default HomeScreen
