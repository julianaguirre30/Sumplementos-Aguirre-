import {Navbar,Container,Nav} from "react-bootstrap"
import CartWidget from "./CartWidget.js"


const NavBar=(Props)=>{

    if(Props.Header)
        return (
        <>
        
        <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Venta de sumplementos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Tienda</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        
        </>
        )
    else
        return (
            <>
             <Navbar bg="dark" variant="dark">
                 <Container >
                            <Nav >
                            <Nav.Link href="#">Facebook </Nav.Link>
                            <Nav.Link href="#">Twitter</Nav.Link>
                            <Nav.Link href="#">Instagram</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                 <br />
            </>
        )
}
 

export default NavBar 


