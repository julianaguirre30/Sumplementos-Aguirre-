import React from 'react'
import ItemCount from './ItemCount'
import style from './Item.module.css'


function Item({id, title,pictureUrl, stock, descripcion,price}) {
  return (
    <div className="col"  >
        <h3 className={style.title}>{title}</h3>
        <img className={style.img} src={pictureUrl} alt={id} />
        <p>{descripcion}</p>
        <h4 >{price}</h4>
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Item