import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.css"

export const Header = ()=> {
  return (
    <Navbar collapseOnSelect expand="md" className='head'>
      <Container className='p-3'>
        <Navbar.Brand href="#home">
          <span>
            <h1 className='fw-bold'>
          Car Rental

            </h1>
          </span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-5 h5 d-flex justify-content-center align-items-center">
            <Link to="/home" className='nav-link'>Home</Link>
            <Link to="/cars" className='nav-link'>Cars</Link>
            <Link to="/pricing" className='nav-link'>Pricing</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
            
          </Nav>
          <Nav>
            <Link to="/signin">
            <Button variant='info' className=''>Sign In</Button>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
