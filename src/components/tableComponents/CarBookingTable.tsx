import React from 'react'
import { Table } from 'react-bootstrap'

export const CarBookingTable = () => {
  return (
    <div>
      <div>
        <h2 className='fw-bold'>Recent Car Booking</h2>
      </div>
      <div className='p-3'>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Car</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Toyota Rav4</td>
              <td>01/05/2024</td>
              <td>$500</td>
              <td>gkg</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John Doe</td>
              <td>Toyota Rav4</td>
              <td>01/05/2024</td>
              <td>$500</td>
              <td>Rented</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John Doe</td>
              <td>Toyota Rav4</td>
              <td>01/05/2024</td>
              <td>$500</td>
              <td>Rented</td>
            </tr>
            <tr>
              <td>4</td>
              <td>John Doe</td>
              <td>Toyota Rav4</td>
              <td>01/05/2024</td>
              <td>$500</td>
              <td>Rented</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}
