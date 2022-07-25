import React from 'react'
import Item from './Item'
import {Animated} from "react-animated-css";

function ItemList({productos}) {
  return (
    productos.map(p => 
        <Item 
        key={p.id}
        id={p.id}
        {...p}
        
        />
        )
  )
}

export default ItemList
