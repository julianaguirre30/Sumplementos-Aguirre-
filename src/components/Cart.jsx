import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext} from './CartContext'
import Button from 'react-bootstrap/Button'
import style from './Cart.modules.css'
import {Animated} from "react-animated-css";


const Cart = () => {

  const { cartList,totalPrice,clear,removeItem,unitPrice,iconCart} =useContext(CartContext);
  return (
    <div className="bodyy">
      {cartList.length === 0 ? (
        <div className="row text-center CartContainer">
          <div className="col-12">
            <h2 className="h2">Carrito vacio</h2>
            <div>  <img src="https://i.ibb.co/FbGJ7pc/empty-cart-3.png" alt="carrito" className="m-4" /></div>
            <Link to={"/All"}><Button variant="dark" className="m-4">ir a la tienda</Button></Link>
          </div>
        </div>
      ) : (
  
     <div className="cartshoop">
        <div className="CartContainer">
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <u onClick={clear} className="remove">Eliminar todo</u>
          </div>
          {cartList.map((product) => (
            <Animated  animationInDuration={1600}  isVisible={true} key={product.item.title}>
              <div className="Cart-Items"  >
                <div className="image-box" >
                  <img src={product.item.pictureUrl} alt="aca va" className="image-boxxx" />
                </div>
                <div className="about">
                  <h3 className="title">{product.item.title}</h3>
                  <p className="subtitle">{product.item.option1}</p>
                  <p className="subtitle">Cantidad:{product.cantidad}</p>
                  <p className="subtitle">Precio por unidad: $ {product.item.price}</p>
                </div>
                <div className="counter"></div>
                <div className="prices">
                  <div className="amount">USD {(unitPrice(product.item.price, product.cantidad))}</div>
                  <div className="remove"onClick={()=>removeItem(product.item.id)} ><u>Eliminar</u></div>
                </div>
              </div>
         
            </Animated>
          ))}
            
          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal">Total</div>
                <div className="items">{iconCart()}{" "}item/s</div>
              </div>
              <div className="total-amount">USD {totalPrice()}</div>
                </div>
                <Link to={"/checkout"} ><button className="button">Completar formulario </button></Link>
              </div>
          </div>
        </div>
     

      )}
    </div>
  );
};



export default Cart;
