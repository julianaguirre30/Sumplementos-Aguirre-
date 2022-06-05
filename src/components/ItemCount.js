
import React, { useState } from "react";


const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(initial);
    
    const sumarUno = () => setContador(contador + 1);
    const restarUno = () => setContador(contador - 1);
    const onAdd = () => {
        if (stock===contador){
         alert("Haz agregado el maximo permitido")}
        else if(contador===0){
            alert("El carrito esta vacio")

        }
        else{
            alert('haz agregado ' + contador + ' producto/s')
        }

        }

         
 

    return (

        <div className="  text-center ">
            {
                <div>

                    <button className=" btn btn-outline-primary btn-block" disabled={contador <= 0} onClick={restarUno}>
                        -
                    </button>
                    <label className="p-2 contador mt-2">{contador}</label>

                    <button className="btn btn-outline-primary btn-block" disabled={contador >= stock} onClick={sumarUno}>
                        +
                    </button>

                    <div>
                        <button className="btn btn-outline-primary btn-block" onClick={onAdd} >Agregar a carrito</button>
                    </div>


                    


                </div>
} 
           
            
        </div>
    );
};

export default ItemCount;
  
