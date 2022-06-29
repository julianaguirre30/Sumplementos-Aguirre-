import React, { useEffect, useState } from 'react'
import {asyncMock, productosCategoria}from './AsyncMock'
import ItemList from './ItemList'
import {Row,Container,Button }from 'react-bootstrap'
import style from './Item.module.css'
import {Link, useParams} from 'react-router-dom'



function ItemListContainer() {
  const [items, setItems] = useState([])

  const { idCategoria } = useParams()


  useEffect(() => {
    if(!idCategoria) {
      asyncMock().then(res => {
        setItems(res)
        })
    } else {
        productosCategoria(idCategoria)
        .then(res => { setItems(res)})
    }
}, [idCategoria])

return (
  <div className={style.land}>

  <Container fluid>
 
    <Row>
      <ItemList productos= {items}/>
    </Row>

  </Container>
  
</div>
)
}

export default ItemListContainer