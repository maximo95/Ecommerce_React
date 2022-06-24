import React from 'react'
import Item from './Item'
import './ItemList.css'

export default function ItemList({productos,cargandoProducto,errorProducto}) {
  return (
      <>
        <div> {cargandoProducto && "Cargando los productos"}</div>

        <div>{errorProducto && "No se pudo cargar los productos"}</div>

        <div className='cartaProducto'>

          {productos.map(elemento =><Item key={elemento.id} elemento ={elemento}/>)}

        </div>
    </>
  )
}
