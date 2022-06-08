import React from 'react'
import Item from './Item'
import './ItemList.css'

export default function ItemList({productos}) {
  return (
    <div className='cartaProducto'>

        {productos.map(elemento =><Item key={elemento.id} elemento ={elemento}/>)}

    </div>
  )
}
