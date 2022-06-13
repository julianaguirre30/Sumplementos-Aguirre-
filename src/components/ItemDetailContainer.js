import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect,useState } from 'react'
import {traerDetalle} from './AsyncMock'

function ItemDetailContainer() {
    const [Detail, setDetail] = useState({})

    useEffect(() => {
        traerDetalle()
        .then(resultado => setDetail(resultado))
    }, {})


  return (
    <ItemDetail/>
  )

}

export default ItemDetailContainer