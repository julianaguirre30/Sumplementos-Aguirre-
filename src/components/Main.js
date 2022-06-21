import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import style from './Item.module.css'
import {Link} from 'react-router-dom'
import {Animated} from "react-animated-css";


function Main() {
  return (
    <>

    <Carousel fade >
      <Carousel.Item>
      <Link to='/detail/10'><img style={{height:550}} className="d-block w-100" src="https://i.blogs.es/0554c6/hero/1366_2000.jpeg" alt="First slide"/></Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/detail/3'><img style={{height:550}} className="d-block w-100" src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/specs__ga1a5ub5id6y_large.jpg" alt="Second slide"/></Link>
      </Carousel.Item>
    </Carousel>
 
      <div className={style.container}>
      <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}>
          <Link to='/detail/6'><div className={style.iPad}><img  className='img-fluid w-100' src="https://images-ext-1.discordapp.net/external/HBrTmyRTb7uo-cl7U7pG18s5-lAFSu8okd0FOEBt-5g/https/res.cloudinary.com/dj755sit4/image/upload/v1655420537/unknddddown_xnyrwg.png" alt=""/></div></Link>
        </Animated>
        
        <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}> 
          <Link to='/detail/14'> <div className={style.Watch}><img  className='img-fluid w-100' src="https://images-ext-2.discordapp.net/external/BRiXHjvrgepuu4TL6dSxZatqq8pAq7PLNdAQnD0RgjI/https/res.cloudinary.com/dj755sit4/image/upload/v1655420175/Watch_serie_7_c1hp7p.jpg" alt=""/></div></Link>
        </Animated>
        <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}> 
          <Link to='/detail/11'><div className={style.Iphone13}><img   className='img-fluid w-100'src="https://images-ext-2.discordapp.net/external/P281zKuTKJqF3WfKjt5cLWIcGcSp6CRTUAv8oOhO0N8/https/res.cloudinary.com/dj755sit4/image/upload/v1655420537/unknown_fn78eo.png" alt=""/> </div></Link>
        </Animated>
        <Animated animationIn="zoomInUp"animationInDuration={1500}  isVisible={true}>
          <Link to='/detail/1'> <div className={style.MacBook}><img className='img-fluid h-100 w-100' src="https://images-ext-2.discordapp.net/external/t6fG4EA6XLfzZMm0rgxpCbN9bzBT4PUh7xCM6qXYNSI/https/res.cloudinary.com/dj755sit4/image/upload/v1655420175/Mac_nrakqi.jpg?width=881&height=552" alt=""/> </div></Link>
        </Animated>
       
      </div>
    

      
     
    </>
  )
}

export default Main