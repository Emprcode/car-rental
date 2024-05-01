import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className='bg-dark'>

    
    <Container >
      <Row className='mt-5 p-5 bg-dark text-light '>
        <Col>
        <h1>
          Car Rental.
        </h1>
        <p>
          Visit help Center
        </p>
        </Col>
        <Col className='text-center'>
        <h4>Contact </h4>
        <p>info@carrental.com.au</p>
        <p>0435 556 556</p>
        <p>Sydney</p>
        </Col>
        <Col className='text-center'>
        <h4>Opening Hours</h4>
        <p>Mon-Fri</p>
        </Col>
        
        <Row className='text-center p-3'>
        <p> @All rights reserved || Developed by me </p>
      </Row>
      </Row>

     
    </Container>
    </div>
  )
}
