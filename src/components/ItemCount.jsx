import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function ItemCount() {

    const stock = 7
    const minimo = 1

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
  //Esta función también habría funcionado Es la funcion onAdd y reiniciar juntas. Ojo repasar Arrow function
   //const onAdd = ()=>{alert (`se agregaron ${valor} productos al carrito`);
   //setValor(minimo);}
  
    const onAdd = () => {console.log (`se agregaron ${valor} productos al carrito`)}
   
    //const reiniciar = () => {setValor (minimo)}

    const [eventoBoton,setEventoBoton] = useState (true)

    function cambiarBoton(){ setEventoBoton (false)}

  return (
    <>
    { eventoBoton ? 
      <div className='contador'>
          <button className='boton' onClick={()=> {sumarProducto()}}> + </button>
          <button className='boton' onClick={() => {restarProducto()}}> - </button>
          <button className='boton' onClick={() => {onAdd();cambiarBoton()}}>Agregar Carrito</button>
          <p> {valor} : </p>
      </div> : <Link to = '/cart' > <button className='boton'>Ver carrito</button> </Link>
    }
    </>
  )
}
