
import { createContext,useState  } from "react";

export const CartContext = createContext([])

export const CartContextProvider =({children})=>{

  const [cartList, setCartList] = useState([]);
 
  function addItem(objetItem) {
    let carritoprevio = [...cartList];

        if (carritoprevio.some((idex) => idex.item.id === objetItem.item.id)) {
            carritoprevio.find(
                (idex) => idex.item.id === objetItem.item.id
            ).cantidad += objetItem.cantidad;

            setCartList(carritoprevio);
        } else {
            setCartList([...cartList, objetItem]);
        }
    };

    const totalPrice =()=>{
      let total=0;
      cartList.forEach((cartList)=>{
          total += parseInt(cartList.item.price)*(cartList.cantidad)
      })
      return ( 
        total
      )
    }
    
    const unitPrice = (price,cantidad) =>{
      let localPrice=0;
      localPrice = localPrice + ((price)*(cantidad))
      return ( 
        localPrice
        // console.log(localPrice)

        
      )
    
    }


  
    const iconCart = () =>cartList.reduce((acum, valor) => acum + valor.cantidad, 0);


    const clear = () => {setCartList ([])
}

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => (item.item.id !== id)))
}
  

  return(
    <CartContext.Provider value={{addItem,cartList,iconCart,clear,totalPrice,removeItem,unitPrice}}>
      {children}
    </CartContext.Provider>
  )
}
