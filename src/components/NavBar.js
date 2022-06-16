import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import CartWidget from "./CartWidget.js"
import {BsApple} from "react-icons/bs"
import{Link} from "react-router-dom"
import {animate__pulse} from 'animate.css';

const NavBar=(Props)=>{

    if(Props.Header)
        return (
        <>
          <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Link to='/'> <Navbar.Brand href="#home"><BsApple  size="1.2rem"/></Navbar.Brand></Link>

                    <Nav className="me-auto">
                      <Link to='Categoria/iPhone'> <Nav.Link href="#features" className="animate__animated animate__bounceIn">iPhone</Nav.Link></Link>
                      <Link to='Categoria/Mac'><Nav.Link href="#features">Mac</Nav.Link></Link>
                      <Link to='Categoria/iPad'><Nav.Link href="#features">iPad</Nav.Link></Link>
                      <Link to='Categoria/AirPods'><Nav.Link href="#features">AirPods</Nav.Link></Link>
                      <Link to='Categoria/Watch'><Nav.Link href="#features">Watch</Nav.Link></Link>
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


