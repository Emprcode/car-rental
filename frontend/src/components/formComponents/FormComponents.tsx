import React from 'react'
import { Form } from 'react-bootstrap'
import { FormFieldsProps } from '../../iib/types'

export const FormComponents = ({label, ...items}: FormFieldsProps) => {
  return (
    <Form.Group className="mb-3" >
        <Form.Label>{label}</Form.Label>
        <Form.Control {...items} />
      </Form.Group>
  )
}
