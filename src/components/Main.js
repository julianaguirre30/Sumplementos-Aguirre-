import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Container,Row,Col} from 'react-bootstrap'
import {BsApple} from 'react-icons/bs'
import {button} from 'react-bootstrap'
import style from './ItemCount.module.css'


function Main() {
  return (
    <>
      <Carousel fade className="d-flex justify-content-sm-start text-center">
        <Carousel.Item >
          <Container>
            <p className={style.nueva}>New</p>
            <h2><BsApple/> Todo el poder para las Pro.</h2>
            <img className="d-block w-100" src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/specs__ga1a5ub5id6y_large.jpg" alt="First slide"/>
          </Container>  
        </Carousel.Item> 
    
        <Carousel.Item > <img className="d-block w-100" src="https://i.blogs.es/0554c6/hero/1366_2000.jpeg" alt="Second slide"/></Carousel.Item>
     </Carousel>


      <Container>
        <Row className={style.rowImg}>
          <Col sm={6}><img src="https://i.blogs.es/ad4d94/apple-event/450_1000.jpg" alt="" /></Col>
          <Col sm={6}><img src="https://i.blogs.es/ad4d94/apple-event/450_1000.jpg" alt="" /></Col>
        </Row>
        <Row className={style.rowImg}>
          <Col sm={6}><img src="https://i.blogs.es/ad4d94/apple-event/450_1000.jpg" alt="" /></Col>
          <Col sm={6}><img src="https://i.blogs.es/ad4d94/apple-event/450_1000.jpg" alt="" /></Col>

        </Row>
      </Container>




    </>
  )
}

export default Main