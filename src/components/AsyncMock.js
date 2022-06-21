
import productos from "./productos";

export const asyncMock=()=>{   
 return new Promise((resolve)=>{
     setTimeout(()=>{
         resolve(productos);
     },500);
    });
}


export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}


export const productosCategoria=(idCategoria) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.idCategoria === idCategoria))
        }, 500)
    })
}