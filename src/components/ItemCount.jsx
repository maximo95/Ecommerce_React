import React from 'react'
import { useContext } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';

export default function ItemCount({detail}) {

  const {agregarAlCarro} = useContext (MiContexto);
    const [valor,setValor]= useState (1)
    
    const sumarProducto = (evento) => {
      if (valor < detail.stock){
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
  
    const onAdd = () => {
      //console.log (`se agregaron ${valor} productos al carrito`)
      setEventoBoton (false)
      agregarAlCarro (detail,valor)
    }
   
    //const reiniciar = () => {setValor (minimo)}

    const [eventoBoton,setEventoBoton] = useState (true)


  return (
    <>
    { eventoBoton ? 
      <div className='contador'>
          <button className='boton' onClick={(evento)=> {sumarProducto(evento)}}> + </button>
          <button className='boton' onClick={() => {restarProducto()}}> - </button>
          <button className='boton' onClick={() => {onAdd()}}>Agregar a Carrito</button>
          <p>cantidad: {valor} </p>
      </div> 
      :
      <> 
       <Link to = '/cart' > <button className='boton'>Terminar Compra</button> </Link>
       <Link to ='/inicio'> <button className='boton'>Seguir Comprando</button> </Link>      
      </>
    }
    </>
  )
}
