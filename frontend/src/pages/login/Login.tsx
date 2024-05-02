import React from 'react'
import { MainLayout } from '../../layout/mainLayout/MainLayout'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { FormComponents } from '../../components/formComponents/FormComponents'

const Login = () => {
  const inputs = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'user@email.com',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      Placeholder: '*****',
      required: true,
    },
  ]
  return (
    <MainLayout>
      <Container>
        <Row className='d-flex justify-content-center align-items-center mt-5 p-2'>
          <div className='col-sm-6 shadow-lg p-3'>
            <h1 className='text-center p-3'>Login</h1>
            <Form>
              {inputs.map((items, i) => (
                <FormComponents key={i} {...items} />
              ))}
              <div className='text-end'>
                <Button variant='info' type='submit'>
                  Login
                </Button>{' '}
              </div>
            </Form>
          </div>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default Login
