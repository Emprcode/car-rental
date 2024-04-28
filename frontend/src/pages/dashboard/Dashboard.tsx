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
        <Row className=''>
        <Col className='car mt-5 col-sm-6'>
            <img src={car} alt="car" width="100%"/>

          </Col>
        <Col className='d-flex justify-content-center align-items-center col-md-6'>
          <div>
            <h1 className='fw-bold p-3'>Your destination for renting your <br /> favourite car in <span className='span-color'>Easy</span> steps.</h1>
            <div className='p-2 mt-3'>
              <Col>
              <span>
<IoCarSportSharp size={30}/>
              </span> {" "}
              Offer a diverse range of vehicles beyond Vintage, luxury and eco-friendly.</Col>
              <Col className='mt-2 mb-2'>

<span>
<FaShieldHeart size={30}/>
</span>{" "}

              Create immersive rental experiences with themed vehicles
              </Col>
              <Col>

              <span>

<TbColorSwatch size={30}/>

              </span>{" "}
              Provide customized services allowing customers to personalize rental experience 
              </Col>
            </div>
          <div className='d-flex justify-content-end p-3 badge-pill'>
            <Button className='badge-pill'>Explore</Button>
          </div>
          </div>
          
          </Col>
         
          
        </Row>

        ssd
      </Container>
    </MainLayout>
  )
}

export default Dashboard