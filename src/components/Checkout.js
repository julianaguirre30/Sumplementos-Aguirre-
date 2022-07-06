import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Row,Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import{Link} from "react-router-dom"
import { CartContext } from './CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

function Checkout() {
  const [send,setSend]=useState('')

  const { cartList,totalPrice,clear} =useContext(CartContext);
 

  const handleSumbmit=(e)=>{

    const purchasedProducts= cartList.map((product)=>{
     return{
      id:product.item.id,
      producto:product.item.title,
      precio:product.item.price,
      cantidad:product.cantidad,
     }

    })
    e.preventDefault()
    const nombre =(e.target.elements.Name.value)
    const apellido =(e.target.elements.Surname.value)
    const email=(e.target.elements.Email.value)
    const direccion =(e.target.elements.Address.value)
    const ciudad = (e.target.elements.City.value)
    const provincia =(e.target.elements.State.value)
    const codigo =(e.target.elements.Zip.value)
    
    const usuario ={nombre,apellido,email,direccion,ciudad,provincia,codigo}

    const ProductOrden ={
      buyer:{nombre,apellido,email,direccion,ciudad,provincia,codigo},
      items:{
        purchasedProducts,
        total:totalPrice(),
        date:serverTimestamp(),
      },
      
    }

   const ref = collection(db,'ordenes')
   addDoc(ref , ProductOrden).then((response)=>{

      setSend(response.id)
     clear()

   })
  }

  if(send !==''){
    return(<>
      <p className='text-center m-4'>tu pedido fue enviado con el numero: <b>{send}</b></p>
      <img src="https://i.ibb.co/SV323Lk/camion.gif" alt="camion" />
    </>
    )
  }

  return (
    <>
    <Modal.Dialog>
     <Link to={'/cart'}><Modal.Header closeButton></Modal.Header></Link>

  <Modal.Body>
      <Form  onSubmit={handleSumbmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="Surname">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
      </Row>
  
        <Form.Group className="mb-3"  controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"  />
        </Form.Group>
 

      <Form.Group className="mb-3" controlId="Address">
        <Form.Label>Direccion</Form.Label>
        <Form.Control  />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="City">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="State">
          <Form.Label>Provincia</Form.Label>
          <Form.Select defaultValue="Choose...">
          <option> </option>
            <option>Chaco</option>
            <option>Santa Fe</option>
            <option>Corrientes</option>
            <option>Buenos Aires</option>
            <option>Chubut</option>
            <option>Misiones</option>
            <option>Salta</option>
            <option>Mendoza</option>
            <option>Rio Negro</option>
          </Form.Select>
        
        </Form.Group>

        <Form.Group as={Col} controlId="Zip">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" >Enviar formulario</Button>
    </Form>
  </Modal.Body>

</Modal.Dialog>




    </>
  )
}

export default Checkout