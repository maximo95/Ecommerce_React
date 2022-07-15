import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';
import './ItemCount.css';

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
  
    const onAdd = () => {
      setEventoBoton (false)
      agregarAlCarro (detail,valor)
    }

    const [eventoBoton,setEventoBoton] = useState (true)

  return (
    <>
    { eventoBoton ? 
      <div className='contador'>
          <div className='botones' >
            <button className='boton-izquierdo' onClick={() => {restarProducto()}}> - </button>
            <p>{valor}</p>
            <button className='boton-derecho' onClick={(evento)=> {sumarProducto(evento)}}> + </button>
          </div>
          <div className='botonAgregar'>       
            <button className='boton' onClick={() => {onAdd()}}>Agregar a Carrito</button>
          </div>
      </div> 
      :
      <> 
      <div className='grupo-botones'>
        <Link to = '/cart' > <button className='boton'>Terminar Compra</button> </Link>
        <Link to ='/inicio'> <button className='boton centrar-datos-abajo'>Seguir Comprando</button> </Link>
      </div>      
      </>
    }
    </>
  )
}
