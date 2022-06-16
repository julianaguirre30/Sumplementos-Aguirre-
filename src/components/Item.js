import React from 'react'
import ItemCount from './ItemCount'
import style from './Item.module.css'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function Item({id, title,pictureUrl,pictureUrl2,pictureUrl3,price}) {
  return (
    <div className='col back'>
      <Card style={{ width: '17rem' , height: "25rem", margin:"2rem" }}>
        <Carousel >
          <Carousel.Item><img className="d-block w-100 img" height={240} src={pictureUrl} /></Carousel.Item>
          <Carousel.Item><img className="d-block w-100 img" height={240} src={pictureUrl2}/></Carousel.Item>
          <Carousel.Item><img className="d-block w-100 img"  height={240} src={pictureUrl3}/></Carousel.Item>
        </Carousel> 
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h5 >{price}</h5>
          <Link to={`/detail/${id}`}><Button className="text-center m-2" variant="dark">Conoce mas</Button></Link>
        </Card.Body>
     
      </Card>  
    </div>
  )
}

export default Item




