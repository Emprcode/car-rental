import React from 'react'
import { MainLayout } from '../../layout/mainLayout/MainLayout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import car from '../../assets/images/car.png'
import "./Dashboard.css"
import { IoCarSportSharp } from "react-icons/io5";
import { FaShieldHeart } from "react-icons/fa6";
import { TbColorSwatch } from "react-icons/tb";

const Dashboard = () => {
  return (
    <MainLayout>
      <Container>
        <Row className='dash-container d-flex align-items-center flex-wrap gap-3'>
          <Col col={6}>
          <div className='text-center '>
            <img src={car} alt="car" width="110%" />
          </div>
          </Col>
          <Col className='col-md-6 gap-3'>
          <h1 className='fw-bold p-2'>
            Rent a car from <span className='span-color'> $99/day</span>
          </h1>
          <div className=' p-2 mx-3'>
            <div>
            <p> <IoCarSportSharp size={25}/> {" "}
          Offers diverse range of vehicles </p>
            </div>
            <div>

            
            <p> <FaShieldHeart size={25}/> { " "}
           Outstanding service</p>
            </div>
            <div>

            
            <p>  <TbColorSwatch size={25}/>{" "}
           Anywhere and Anytime</p>
            </div>
          </div>
          
          
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Dashboard