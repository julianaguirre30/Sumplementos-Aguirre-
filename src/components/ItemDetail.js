import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'bootstrap'
import ItemCount from './ItemCount'


function ItemDetail({title,price,descripcion1,descripcion2,descripcion3,descripcion4,pictureUrl,pictureUrl2,pictureUrl3,stock,id,option1,option2,option3}) {
    
  return (
    <>
    <Card className='text-center'>
        <Card.Header>DETALLES</Card.Header>
        
        <Card.Body >
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src={pictureUrl} alt={id} style={{ width: '20rem' , height: "20rem" }} />
                    </div>
                    <div class="col-sm">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{descripcion1}</Card.Text>
                        <Card.Text>{descripcion2}</Card.Text>
                        <Card.Text>{descripcion3}</Card.Text>
                        <Card.Text>{descripcion4}</Card.Text>
                        <div>
                            <button type="button" class="btn btn-outline-dark p-1 m-1">{option1}</button>
                            <button type="button" class="btn btn-outline-dark p-1 m-1 ">{option2}</button>
                            <button type="button" class="btn btn-outline-dark p-1 m-1">{option3}</button> 
                        </div>
                        <Card.Text>{price}</Card.Text>
                        <ItemCount stock={stock}/>
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