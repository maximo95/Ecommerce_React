import { MiContexto } from '../context/CartContext';
import {useContext} from 'react';

export default function CartWidget() {
  const {cantidadProductos,cart} = useContext (MiContexto);

  return (
    <>
    <div className="material-icons">shopping_cart</div>
    <div>{cantidadProductos(cart)}</div>
    </>
  )
}
