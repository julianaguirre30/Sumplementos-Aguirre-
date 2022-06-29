import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import {Carousel,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext} from './CartContext.jsx'




function ItemDetail({title,price,descripcion1,descripcion2,descripcion3,descripcion4,pictureUrl,pictureUrl2,pictureUrl3,stock,id,option1,option2,option3}) {
   

    const {addItem}=useContext(CartContext)

    const [cambiarBoton, setCambiarBoton] = useState(0)

    const[carrito,setCarrito]=useState([])
    
    
    const onAdd = (contador) => {
        setCambiarBoton(contador)
        addItem({
            cantidad: contador,
            item:{title,price,pictureUrl,stock,id,option1,option2,option3},
        });

      
    };
        
  return (
    <>
    <Card className='text-center'>
        <Card.Header>DETALLES</Card.Header> 
        
        <Card.Body>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                      <Carousel >
                            <Carousel.Item interval={1000}><img className="d-block  m-4" height={400} width={400} src={pictureUrl} /></Carousel.Item>
                            <Carousel.Item interval={1000}><img className="d-block  m-4" height={400} width={400} src={pictureUrl2}/></Carousel.Item>
                            <Carousel.Item interval={1000}><img className="d-block  m-4" height={400} width={400} src={pictureUrl3}/></Carousel.Item>
                        </Carousel> 
                      
                    </div>
                    <div className="col-sm">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text >{descripcion1}</Card.Text>
                        <Card.Text >{descripcion2}</Card.Text>
                        <Card.Text >{descripcion3}</Card.Text>
                        <Card.Text >{descripcion4}</Card.Text>

                  
                        <div>
                            <button type="button" className="btn btn-outline-dark p-1 m-1">{option1}</button>
                            <button type="button" className="btn btn-outline-dark p-1 m-1 ">{option2}</button>
                            <button type="button" className="btn btn-outline-dark p-1 m-1">{option3}</button> 
                        </div>
                        <h4 className='p-3'>USD {price}</h4>
                        {cambiarBoton<=0 ?<ItemCount stock={stock} onAdd={onAdd}/>:<><Link to={'/cart'}><button className="m-2 btn btn-outline-secondary btn-block">Terminar Compra</button></Link> <Link to={'/All'}><button  className="m-2 btn btn-outline-secondary btn-block" >Seguir comprando</button></Link></>}
                        
                    </div>
                </div>
            </div>
           
        </Card.Body>
        <Card.Footer className="text-muted">{stock} productos en stock</Card.Footer>
    </Card>

    </>

  )
}




export default ItemDetail