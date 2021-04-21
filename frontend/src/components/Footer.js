import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' // We import Containers from react-bootstrap

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <h6>Made with &#60;3 from Tim</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
