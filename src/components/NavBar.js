import {Navbar,Container,Nav} from "react-bootstrap"
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
          {/* <Navbar bg="dark" variant="dark" sticky="top">
                <Container >
                <Link to='/'> <Navbar.Brand href="#home"><BsApple className={style.nav}/></Navbar.Brand></Link>

                    <Nav className="me-auto">
                      <Link to='Categoria/iPhone'> <Nav.Link href="#features"className={style.nav} >iPhone</Nav.Link></Link>
                      <Link to='Categoria/Mac'><Nav.Link href="#features"className={style.nav}>Mac</Nav.Link></Link>
                      <Link to='Categoria/iPad'><Nav.Link href="#features"className={style.nav}>iPad</Nav.Link></Link>
                      <Link to='Categoria/AirPods'><Nav.Link href="#features"className={style.nav}>AirPods</Nav.Link></Link>
                      <Link to='Categoria/Watch'><Nav.Link href="#features"className={style.nav}>Watch</Nav.Link></Link>
                      <Link to='/All'><Nav.Link href="#features"className={style.nav}>All Products</Nav.Link></Link>
                    </Nav>
                   <CartWidget/>
                </Container>
            </Navbar> */}
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

         <Link to='/'> <Navbar.Brand href="#home"><BsApple className={style.nav}/></Navbar.Brand></Link>
       <Link to='Categoria/iPhone'> <Nav.Link href="#features"className={style.nav} >iPhone</Nav.Link></Link>
        <Link to='Categoria/Mac'><Nav.Link href="#features"className={style.nav}>Mac</Nav.Link></Link>
        <Link to='Categoria/iPad'><Nav.Link href="#features"className={style.nav}>iPad</Nav.Link></Link>
        <Link to='Categoria/AirPods'><Nav.Link href="#features"className={style.nav}>AirPods</Nav.Link></Link>
        <Link to='Categoria/Watch'><Nav.Link href="#features"className={style.nav}>Watch</Nav.Link></Link>
        <Link to='/All'><Nav.Link href="#features"className={style.nav}>All Products</Nav.Link></Link>
    </Nav>
  
  </Navbar.Collapse>
  <Link  className="link" exact to={'/cart' }>
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


