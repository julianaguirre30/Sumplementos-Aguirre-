import ItemDetail from "./ItemDetail";

const AsyncMock=(time,task)=>{   
 return new Promise((resolve)=>{
     setTimeout(()=>{
         resolve(task);
     },time);
    });
}


export const traerDetalle= () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ItemDetail);
        }, 2000);
    });
};


export default AsyncMock; 