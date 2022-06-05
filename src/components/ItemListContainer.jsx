import React, { useState } from 'react'
import'./ItemListContainer.css'
export default function ItemListContainer({Greeting, stock,minimo}) {

  const [valor,setValor]= useState (minimo)

  const sumarProducto = () => {
    if (valor < stock){
      setValor(valor + 1);
    } else {alert("No podes agregar más productos")}
  }

  const restarProducto = () => {
    if (valor > 1){ 
      setValor (valor - 1);
    } else {
      alert ("La cantidad mínima es 1")
    }
  }

  const onAdd = ()=>{alert (`se agregaron ${valor} productos al carrito`)}

  const reiniciar = () => {setValor (minimo)}

  return (
    <>
    <div className='saludo'>{Greeting}</div>
    <button onClick={sumarProducto}>+</button>
    <button onClick={restarProducto}>-</button>
    <button onClick={() => ({onAdd, reiniciar})}>Agregar Carrito</button>
    <p> {valor}</p>
    </>
  )
}
