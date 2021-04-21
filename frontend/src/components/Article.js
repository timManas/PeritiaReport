import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Card } from 'react-bootstrap'

const Article = ({ article }) => {
  return (
    <>
      <Card className='text-white bg-primary' style={{ padding: 0, margin: 0 }}>
        <Card.Body>
          <a href={article.url}>
            <Card.Title as='div' className='text-white'>
              <strong>{article.title}</strong>
            </Card.Title>
          </a>
        </Card.Body>
      </Card>
    </>
  )
}

export default Article
