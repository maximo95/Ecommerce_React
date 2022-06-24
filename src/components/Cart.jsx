import { MiContexto } from '../context/CartContext';
import {useContext, useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Cart() {
  const {PrecioTotalProductos,cart} = useContext (MiContexto);

  return (
    <>
      {
      cart.length > 0 ?
      /*cart.map(producto =><ListGroup key = {cart.index} producto = {producto}></ListGroup>*/
      cart.map((producto, id) => 
        <div key={id}>{PrecioTotalProductos(cart)}</div>)

      :
      <h2>"Tu carrito está vacío"</h2>
      }
    </>
  )
}
