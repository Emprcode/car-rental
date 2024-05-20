import React from 'react'
import { MainLayout } from '../../layout/mainLayout/MainLayout'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import './Homepage.css'
import { CarBookingTable } from '../../components/tableComponents/CarBookingTable'
import { Link } from 'react-router-dom'
import { AddCarModal } from '../../components/modal/AddCarModal'

const Homepage = () => {
  return (
    <MainLayout>
      <div>
        <Container className='p-2'>
          <div className='d-flex justify-content-between align-items-center p-3'>
            <div className='h2 fw-bold'>Welcome to car rental </div>
            {/* <Link
              to='/add-cars'
              className='fw-bold d-flex justify-content-center align-items-center gap-2 nav-link'
            >
              <span className='shadow-lg p-2'>
                <FaPlus />
              </span> */}
            {/* <AddCarModal /> */}
            {/* </Link> */}
          </div>

          <Row className='p-4 gap-5 text-light'>
            <Col className='card1 p3 rounded'>
              <div className='p-3'>
                <div className='text-center'>
                  <p className='p-2 fw-bold '>Total Car</p>
                </div>

                <h2 className='fw-bold text-center'> 10</h2>
                {/* <p className="p-3">Increased by 40%</p> */}
              </div>
            </Col>
            <Col className='card2 p4 rounded '>
              <div className='p-2'>
                <div className='text-center'>
                  <p className='p-3 fw-bold'>Rented Car</p>
                </div>

                <h2 className='fw-bold text-center'> 7</h2>
                {/* <p className="p-3">Increased by 40%</p> */}
              </div>
            </Col>
            <Col className='card3 p4 rounded'>
              <div className='p-3'>
                <div className='text-center'>
                  <p className='p-2 fw-bold '>Available Car</p>
                </div>

                <h2 className='fw-bold text-center'> 2</h2>
                {/* <p className="p-3">Increased by 40%</p> */}
              </div>
            </Col>
            <Col className='card4 p4 rounded '>
              <div className='p-3'>
                <div className='text-center'>
                  <p className='p-2 fw-bold'>Defects car</p>
                </div>

                <h2 className='fw-bold text-center'> 1</h2>
              </div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <CarBookingTable />
          </Row>
        </Container>
      </div>
    </MainLayout>
  )
}

export default Homepage
