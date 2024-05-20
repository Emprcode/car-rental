import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand='md' className='head'>
      <Container className='p-3'>
        <Navbar.Brand href='/'>
          <span>
            <h1 className='logo fw-bold'>Car Rental.</h1>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto h5 d-flex justify-content-around align-items-center gap-2'>
            <Link to='/home' className='nav-link'>
              Home
            </Link>
            <Link to='/car-list' className='nav-link'>
              Cars
            </Link>
            <Link to='/' className='nav-link'>
              Rent
            </Link>
            <Link to='/' className='nav-link'>
              Contact
            </Link>
          </Nav>
          <Nav>
            <Link to='/login'>
              <Button variant='info' className='fw-bold text-light' size='lg'>
                Login
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
