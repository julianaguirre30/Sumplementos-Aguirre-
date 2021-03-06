import {Navbar,Container, Nav} from "react-bootstrap"
import {CartWidget,CartWidgetUSe} from "./CartWidget.js"
import {BsApple} from "react-icons/bs"
import{Link} from "react-router-dom"
import style from './Item.module.css'
import { CartContext} from './CartContext'
import { useContext } from "react"
import {Animated} from "react-animated-css";

const NavBar=(Props)=>{
  const {cartList,iconCart}=useContext(CartContext)
    if(Props.Header)
        return (
        <>
 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Link to='/' ><BsApple className={style.brand}/></Link>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
       <Link to='Categoria/iPhone' href="#features" className={style.nav} >iPhone</Link>
        <Link to='Categoria/Mac' href="#features" className={style.nav}>Mac</Link>
        <Link to='Categoria/iPad' href="#features"className={style.nav}>iPad</Link>
        <Link to='Categoria/AirPods' href="#features" className={style.nav}>AirPods</Link>
        <Link to='Categoria/Watch' href="#features"  className={style.nav}>Watch</Link>
        <Link to='/All' className={style.nav}> All Products </Link>
    </Nav>
  
  </Navbar.Collapse>



  <Link  className="link"  to={'/cart' }>
        <div className="text-center ">
        
        {cartList.length === 0 ?
            <> <CartWidget/></>
            :
          <Animated animationIn="jello"  animationInDuration={1000} isVisible={true}>
            <span className=" text-white ">{iconCart()}{" "}</span>
            <CartWidgetUSe/>
          </Animated>
        }

        </div>

      </Link>
  </Container>
</Navbar>       


        
        </>
        )
    else
        return (
            <>
               <p className="text-center mt-4 mb-4">Copyright © 2022 Apple Inc. All rights reserved.</p>
            </>
        )
}
 

export default NavBar 


