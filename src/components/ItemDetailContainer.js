import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect,useState } from 'react'
import {getProductsById} from './AsyncMock'
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {

    const [product, setProduct] = useState()

    const { id } = useParams()


  useEffect(() => {
    getProductsById(parseInt(id))
    .then(response => {
        setProduct(response)
    })
    }, [])

  return (
         <>
            <ItemDetail {...product} />
        </>
  )
}

export default ItemDetailContainer