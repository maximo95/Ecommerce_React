import React from 'react'
import { useContext } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';
export default function ItemCount({detail}) {

  const {agregarAlCarro,removeItem} = useContext (MiContexto);
    const stock = 7
    const minimo = 1



    const [valor,setValor]= useState (minimo)
    
    const sumarProducto = (evento) => {
      console.log (evento.currentTarget.parentNode.parentNode)
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
          <button className='boton' onClick={() => {onAdd()}}>Agregar Carrito</button>
          <div onClick={()=>removeItem(detail.id)}>borrar este producto del carro</div>
          <p> {valor} : </p>
      </div> : <Link to = '/cart' > <button className='boton'>Terminar Compra</button> </Link>
    }
    </>
  )
}
