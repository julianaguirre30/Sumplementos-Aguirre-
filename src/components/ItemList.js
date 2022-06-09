import React from 'react'
import Item from './Item'


function ItemList({productos}) {
  return (
    productos.map(p => 
        <Item
        id={p.id} 
        title={p.title}
        descripcion={p.descripcion}
        price={p.price}
        pictureUrl = {p.pictureUrl}
        key={p.id}
        stock={p.stock}
        />
        )
  )
}

export default ItemList
