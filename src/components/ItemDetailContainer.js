import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect,useState } from 'react'
import {getProductsById} from './AsyncMock'
import { useParams } from 'react-router-dom'
import { collectionProducts, db } from '../firebase'
import { getDocs, collection, getDoc, doc } from 'firebase/firestore'


function ItemDetailContainer() {

    const [product, setProduct] = useState({})

    const { id } = useParams()

  
  useEffect(() => {

    const ref= doc(collectionProducts,id)
    const consulta = getDoc(ref)
    consulta
    .then((response)=>{
      setProduct({
        id:response.id,
        ...response.data(),})
    })


    }, [])

  return  <ItemDetail {...product} />

}

export default ItemDetailContainer


