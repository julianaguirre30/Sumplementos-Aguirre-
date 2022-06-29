
  
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ item, stock, initial, onAdd  }) => {
    const [contador, setContador] = useState(0);
   
    
    const sumarUno = () => setContador(contador + 1);

    const agregarCarrito = () => {

        onAdd(contador);
      
    }

    const restarUno = () => setContador(contador - 1);

    return (

        <div className="  text-center ">
            
                <div>

                    <button className="m-2 btn btn-outline-secondary btn-block" disabled={contador <= 0} onClick={restarUno}>
                        -
                    </button>
                    <label className="contador mt-2">{contador}</label>

                    <button className="m-2 btn btn-outline-secondary btn-block" disabled={contador >= stock} onClick={sumarUno}>
                        +
                    </button>
                    <br />
                    
                    {contador ? <button className="m-2 btn btn-dark" onClick={agregarCarrito}>Agregar al carro</button>:<button className="m-2 btn btn-outline-secondary btn-block" onClick={agregarCarrito} disabled={contador=== 0}>Agregar al carro</button>}
  
                </div>
                
                
            
        </div>
    );
};

export default ItemCount;