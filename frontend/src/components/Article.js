import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Card } from 'react-bootstrap'
import formatDate from '../components/DateFormatter'

const Article = ({ article }) => {
  // Use Cards
  return (
    <>
      <Card
        style={{
          padding: 0,
          margin: 10,
          boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Card.Header>
          <a href={article.url} className='text-white'>
            <h5>{article.title}</h5>
          </a>
        </Card.Header>
        <Card.Body>
          <a href={article.url}>
            <Card.Text>{article.url}</Card.Text>
            <Card.Text>{formatDate(article.time)}</Card.Text>
          </a>
        </Card.Body>
      </Card>
    </>
  )
}

export default Article
