import React from 'react'
import style from './Item.module.css'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {Animated} from "react-animated-css";

function Item({id, title,pictureUrl,pictureUrl2,pictureUrl3,price}) {
  return (
    <div className='col'>
      <Animated animationIn="zoomIn" animationOut="fadeOut" animationInDuration={1000}  isVisible={true}>
        <Card  className={style.box}>

          <Carousel >
            <Carousel.Item><img className="d-block w-100 img" height={240} src={pictureUrl} /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100 img" height={240} src={pictureUrl2}/></Carousel.Item>
            <Carousel.Item><img className="d-block w-100 img"  height={240} src={pictureUrl3}/></Carousel.Item>
          </Carousel> 
          <Card.Body>
            <Card.Title><b>{title}</b></Card.Title>
            <h5>{price}</h5>
            <Link to={`/detail/${id}`}><Button className={style.conoce} variant="dark">Conoce mas</Button></Link>
          </Card.Body>

        </Card>  

      </Animated>
     
   
    
      
    </div>
  )
}

export default Item




