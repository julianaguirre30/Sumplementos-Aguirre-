import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { collectionProducts, db } from '../firebase'
import { getDocs, collection, getDoc, doc } from 'firebase/firestore'
import {Animated} from "react-animated-css";

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


