import React, { useEffect, useState } from 'react'
import AsyncMock from './AsyncMock'
import productos from './productos'
import ItemList from './ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import style from './Item.module.css'
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {

        AsyncMock(2000, productos)
        .then(resultado => setItems(resultado))
    }, [items])


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