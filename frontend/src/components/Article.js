import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Card } from 'react-bootstrap'

const Article = ({ article }) => {
  const formatDate = (unixTime) => {
    // Months array
    const months_arr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    // Convert timestamp to milliseconds
    const date = new Date(unixTime * 1000)

    // Year
    const year = date.getFullYear()

    // Month
    const month = months_arr[date.getMonth()]

    // Day
    const day = date.getDate()

    // Hours
    const hours = date.getHours()

    // Minutes
    const minutes = '0' + date.getMinutes()

    // Seconds
    const seconds = '0' + date.getSeconds()

    // Display date time in MM-dd-yyyy h:m:s format
    const convdataTime = month + ' ' + day + ', ' + year
    //   ' ' +
    //   hours +
    //   ':' +
    //   minutes.substr(-2) +
    //   ':' +
    //   seconds.substr(-2)

    return convdataTime
  }

  // Use Cards
  return (
    <>
      <Card style={{ padding: 0, margin: 0 }}>
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
