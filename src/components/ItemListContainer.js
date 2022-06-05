
import React from "react"
import ItemCount from "./ItemCount"


function ItemListContainer(props){
    return(
        <>
            <h1 className="text-center">{props.greeting}</h1>
            <ItemCount initial={0} stock={5} />
        </>
    )
}




export default ItemListContainer 