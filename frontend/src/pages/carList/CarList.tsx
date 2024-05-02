import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CarCardComponents } from '../../components/carCardComponents/CarCardComponents'
import { MainLayout } from '../../layout/mainLayout/MainLayout'
import { AddCarModal } from '../../components/modal/AddCarModal'

const CarList = () => {
  return (
    <MainLayout>
      <Container className='p-2'>
        <div className=' d-flex justify-content-between p-3'>
          <h2 className='fw-bold'>All Cars</h2>
          <span className=''>
            <AddCarModal />
          </span>
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

export default CarList
