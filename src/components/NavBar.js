import {Navbar,Container,Nav} from "react-bootstrap"
import CartWidget from "./CartWidget.js"
import {BsApple} from "react-icons/bs"
import{Link} from "react-router-dom"
import style from './Item.module.css'


const NavBar=(Props)=>{

    if(Props.Header)
        return (
        <>
          <Navbar bg="dark" variant="dark" sticky="top">
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


