import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext} from './CartContext'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
const Cart = () => {

  const { cartList,totalPrice,clear,removeItem} =useContext(CartContext);
  return (
    <div className="container ">
      {cartList.length === 0 ? (
        <div className="row text-center">
          <div className="col-12">
            <h2>Carrito vacio</h2>
            <Link to={"/All"}><Button variant="dark">ir a la tienda</Button></Link>
          </div>
        </div>
      ) : (
       <div>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th></th>
                <th>Descripcion del producto </th>
                <th>Cantidad</th>
                <th>Precio por unidad</th>
                <th>Total por producto</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody >
            {cartList.map((product) => (
                <tr  key={product.id} className="text-center">
                  <td><img  src={product.item.pictureUrl} alt="" width={"50px"}/></td>
                  <td> <b>{product.item.title}</b>({product.item.option1})</td>
                  <td><p>{product.cantidad}</p></td>
                  <td> <p >${product.item.price} </p></td>
                  <td><p>${product.totalPricetotal} </p></td>
           
                  <td><Button variant="outline-secondary"  onClick={()=>removeItem(product.item.id)} >X</Button></td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}><b>Total a pagar:</b></td>
                <td>$</td>
                <td className="text-center"><Button variant="outline-danger" onClick={clear}>Vaciar carrito</Button>{' '}</td>
              </tr>
            </tbody>
          </Table>
          <div className="d-grid gap-2">
          <Button variant="success" size="lg"><Link to={"/checkout"}style={{color:"white"}}>Completar formulario</Link></Button>
          </div>
       </div>

        


      )}
    </div>
  );
};



export default Cart;


