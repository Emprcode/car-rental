import React from 'react'
import { Button, Card } from 'react-bootstrap'
import car from '../../assets/images/car.png'

export const CarCardComponents = () => {
  return (
    <Card style={{ width: '18rem' }} className='border-0 shadow-lg p-3'>
      <Card.Img variant='top' src={car} />
      <Card.Body>
        <Card.Title className='fw-bold'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card
          content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button variant='outline-info ' className='fw-bold'>
            Rent Now
          </Button>
          <p>
            <span className='fw-bold h5'>$100</span>/day
          </p>
        </div>
      </Card.Body>
    </Card>
  )
}
