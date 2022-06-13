import React from 'react'
import ItemCount from './ItemCount'
import style from './Item.module.css'
import Card from 'react-bootstrap/Card'


function Item({id, title,pictureUrl, stock, descripcion,price}) {
  return (
    <div className='col'>
      <Card style={{ width: '17rem' , height: "33rem", margin:"2rem" }}>
        <Card.Img variant="top" src={pictureUrl} alt={id} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <h4 >{price}</h4>
          <ItemCount stock={stock} Detail={true}/>
        </Card.Body>
      </Card>  
    </div>
  )
}

export default Item




