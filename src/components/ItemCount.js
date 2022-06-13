
import React, { useState } from "react";
import style from './ItemCount.module.css'


const ItemCount = ({stock},Detail) => {
    const [contador, setContador] = useState(0);

    const sumarUno = () => setContador(contador + 1);
    const restarUno = () => setContador(contador - 1);
    const total = contador * 5230;
    const onAdd = () => {
        if (stock===contador){
         alert("Haz agregado el maximo permitido")}
        else if(contador===0){
            alert("El carrito esta vacio")
        }
        else{
            alert('haz agregado ' + contador +' producto/s al carrito')
        }

        }
 


            return (

                <div>
                    {
                        <div className={style.count}>
        
                            <button className="m-2 btn btn-outline-secondary btn-block" disabled={contador <= 0} onClick={restarUno}>
                                -
                            </button>
                            <label className="contador mt-2">{contador}</label>
        
                            <button className="m-2 btn btn-outline-secondary btn-block" disabled={contador >= stock} onClick={sumarUno}>
                                +
                            </button>
        
                            <div>
                                <button className="m-2 btn btn-outline-secondary btn-block" onClick={onAdd} >Agregar</button>
                            </div>
        
        
                            
        
        
                        </div>
                    }      
                    
                </div>
            );
        
};

export default ItemCount;
  
