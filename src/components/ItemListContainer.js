import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {Row,Container}from 'react-bootstrap'
import style from './Item.module.css'
import { useParams} from 'react-router-dom'
import { collectionProducts} from '../firebase'
import { getDocs,query,where } from 'firebase/firestore'



function ItemListContainer() {
  const [items, setItems] = useState([])

  const { idCategoria } = useParams()


  useEffect(() => {



      const ref = idCategoria
      ? query(collectionProducts,where("idCategoria","==",idCategoria))
      : collectionProducts;

      getDocs(ref).then((response)=>{
        const products = response.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data(),
          }

        })
        setItems(products)
      })

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