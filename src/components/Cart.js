import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

function Cart() {
  return (
    <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>....</td>
      <td>....</td>
      <td>....</td>
    </tr>
    <tr>
      <td>2</td>
      <td>....</td>
      <td>....</td>
      <td>....</td>
    </tr>
  
  </tbody>
</Table>
    <div className='text-center m-3'>
    <Link to="/checkout"><button className="m-2 btn btn-outline-secondary btn-block " >Rellenar formulario de compra </button></Link>
    </div>
    </>
  )
}

export default Cart