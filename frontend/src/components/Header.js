import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../actions/userActions'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Peritia Report</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {/* <Nav.Link href='#Policy'>Policy</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
