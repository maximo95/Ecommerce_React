import { useContext, useState,useEffect } from 'react';
import { MiContexto } from '../context/CartContext';

export default function Cart() {
  const {PrecioTotalProductos,cart} = useContext (MiContexto);
  console.log(PrecioTotalProductos)
  const [render,setRender] = useState()

  useEffect(() => {
  setRender (PrecioTotalProductos())
  }, [cart])
  
  return (
    <>
      {
      cart.length > 0 ?
      /*cart.map(producto =><ListGroup key = {cart.index} producto = {producto}></ListGroup>*/
      cart.map((producto, id) => 
        <div key={id}>{render}</div>)

      :
      <h2>"Tu carrito está vacío"</h2>
      }
    </>
  )
}
