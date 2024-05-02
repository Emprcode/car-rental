import React from 'react'
import { MainLayout } from '../../layout/mainLayout/MainLayout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import car from '../../assets/images/car.png'
import './Dashboard.css'
import { IoCarSportSharp } from 'react-icons/io5'
import { FaShieldHeart } from 'react-icons/fa6'
import { TbColorSwatch } from 'react-icons/tb'
import { CarCardComponents } from '../../components/carCardComponents/CarCardComponents'

const Dashboard = () => {
  return (
    <MainLayout>
      <Container>
        <Row className='dash-container d-flex align-items-center flex-wrap gap-5'>
          <Col col={6}>
            <div className='text-center p-2'>
              <img src={car} alt='car' width='110%' />
            </div>
          </Col>
          <Col className='col-md-6 p-2 mx-3 '>
            <h1 className='mt-3 title'>
              Save Big and Rent a car from <span className='span-color'> $99/day</span>
            </h1>
            <div className='p-3 mx-3 h6'>
              <div>
                <p>
                  {' '}
                  <IoCarSportSharp size={25} /> Offers diverse range of vehicles{' '}
                </p>
              </div>
              <div>
                <p>
                  {' '}
                  <FaShieldHeart size={25} /> Outstanding service
                </p>
              </div>
              <div>
                <p>
                  {' '}
                  <TbColorSwatch size={25} /> Anywhere and Anytime
                </p>
              </div>
            </div>

            <div className='d-flex justify-content-start align-items-center gap-4'>
              <Button variant='info' className='fw-bold p-2 text-light' size='lg'>
                <span className='mx-5 text-center'>Book Now</span>
              </Button>
              <Button variant='outline-dark' className='fw-bold p-2' size='lg'>
                <span className='mx-5'>Explore</span>
              </Button>
            </div>
          </Col>
        </Row>

        <div>
          <h2 className='fw-bold'>Most Popular Cars</h2>
        </div>
        <Row className='p-3'>
          <Col className='d-flex justify-content-center align-items-center gap-5 flex-wrap'>
            <CarCardComponents />
            <CarCardComponents />
            <CarCardComponents />
            <CarCardComponents />
            <CarCardComponents />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Dashboard
