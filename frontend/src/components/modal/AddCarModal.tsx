import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FormComponents } from '../formComponents/FormComponents'
import { FaPlus } from 'react-icons/fa'

export const AddCarModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const inputs = [
    {
      label: 'Car Name',
      name: 'name',
      type: 'text',
      placeholder: 'Toyato Camry',
      required: true,
    },
    {
      label: 'Modal Year',
      name: 'modal_year',
      type: 'number',
      placeholder: '2024',
      required: true,
    },
    {
      label: 'Seat',
      name: 'seat',
      type: 'text',
      placeholder: '5 seater',
      required: true,
    },
    {
      label: 'Door',
      name: 'door',
      type: 'text',
      placeholder: '4 doors',
      required: true,
    },
  ]

  return (
    <>
      <Button variant='outline-info fw-bold' size='lg' onClick={handleShow}>
        <span>
          <FaPlus size={25} />
        </span>{' '}
        Add Car
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Car</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {inputs.map((items, i) => (
              <FormComponents key={i} {...items} />
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-secondary' className='fw-bold' size='lg' onClick={handleClose}>
              Close
            </Button>
            <Button variant='info' className='text-light fw-bold' size='lg' onClick={handleClose}>
              Add car
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
