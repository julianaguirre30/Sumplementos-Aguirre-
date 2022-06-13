import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'bootstrap'
import ItemCount from './ItemCount'

function ItemDetail() {
 
  return (
    <>
    <Card className='text-center'>
        <Card.Header>DETALLES</Card.Header>
        
        <Card.Body>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src="https://olynutrition.com.ar/wp-content/uploads/2020/07/idn-isolate-1.jpg" alt="" style={{ width: '20rem' , height: "20rem" }} />
                    </div>
                    <div class="col-sm">
                        <Card.Title>IDN 100% Isolate</Card.Title>
                        <Card.Text>Objetivos principales:</Card.Text>
                        <Card.Text>* Definición muscular.</Card.Text>
                        <Card.Text>* Desarrollo muscular.</Card.Text>
                        <Card.Text>* Pérdida de peso.</Card.Text>
                        <div>
                            <button type="button" class="btn btn-outline-dark p-1 m-1">Vainilla</button>
                            <button type="button" class="btn btn-outline-dark p-1 m-1 ">Chocolate</button>
                            <button type="button" class="btn btn-outline-dark p-1 m-1">Cookies</button> 
                        </div>
                        <ItemCount stock={7}/>
                    </div>
                </div>
            </div>
           
        </Card.Body>
        <Card.Footer className="text-muted">en stock</Card.Footer>
    </Card>

  



    </>




  )
}




export default ItemDetail