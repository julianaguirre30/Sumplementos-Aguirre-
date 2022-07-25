import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import style from './Item.module.css'
import {Link} from 'react-router-dom'
import {Animated} from "react-animated-css";


function Main() {
  return (
    <>

    <Carousel fade >
      <Carousel.Item interval={8000}> 
      <Link to='/detail/LFqPhNy6cCthOawE1CWx'><img style={{height:550}} className="d-block w-100" src="https://i.ibb.co/BN5XMMx/Sin-t-tulo-Banner-horizontal.gif" alt="First slide" /></Link>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
      <Link to='/detail/SuNsVOUmnsshxejHn6c1'><img style={{height:550}} className="d-block w-100" src="https://res.cloudinary.com/julianaguirre97/image/upload/v1658523820/Sin_t%C3%ADtulo_Banner_horizontal_3_mogxdm.gif" alt="Second slide"/></Link>
      </Carousel.Item>
    </Carousel>
 
    <div className={style.container}>

      <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}>
          <Link to='/detail/SuNsVOUmnsshxejHn6c1'><div className={style.iPad}><img  className='img-fluid  img-index ' src="https://images-ext-1.discordapp.net/external/HBrTmyRTb7uo-cl7U7pG18s5-lAFSu8okd0FOEBt-5g/https/res.cloudinary.com/dj755sit4/image/upload/v1655420537/unknddddown_xnyrwg.png" alt=""/></div></Link>
      </Animated>
      
      <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}> 
          <Link to='/detail/FB158jVB7GicUq4TZukm'> <div className={style.Watch}><img  className='img-fluid img-index' src="https://images-ext-2.discordapp.net/external/BRiXHjvrgepuu4TL6dSxZatqq8pAq7PLNdAQnD0RgjI/https/res.cloudinary.com/dj755sit4/image/upload/v1655420175/Watch_serie_7_c1hp7p.jpg" alt=""/></div></Link>
      </Animated>
      
      <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}> 
          <Link to='/detail/8RN3ujp6qS1fI597cvdk'><div className={style.Iphone13}><img   className='img-fluid  img-index'src="https://images-ext-2.discordapp.net/external/P281zKuTKJqF3WfKjt5cLWIcGcSp6CRTUAv8oOhO0N8/https/res.cloudinary.com/dj755sit4/image/upload/v1655420537/unknown_fn78eo.png" alt=""/> </div></Link>
      </Animated>
      <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}>
          <Link to='/detail/dg9s8WsGnQnOUHonKc1a'> <div className={style.MacBook}><img className='img-fluid  h-100 w-100' src="https://res.cloudinary.com/julianaguirre97/image/upload/v1658525461/Sin_t%C3%ADtulo_Banner_horizontal_iullmt.jpg" alt=""/> </div></Link>
      </Animated>
       
    </div>
    

      
     
    </>
  )
}

export default Main