import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';
import './NavBar.css';

export default function CartWidget() {
  const {cantidadProductos,cart} = useContext (MiContexto);
  const carritoVacio = cart.length === 0

  return (
    <>
    {
      carritoVacio ? 
      <Link to='/cart'><div className="material-icons">shopping_cart</div></Link>
      :
      <>
      <div className="NumeroCarrito">
      <Link to='/cart'><div className="material-icons">shopping_cart</div></Link>
      <div>{cantidadProductos(cart)}</div>
      </div>
      </>
    }
    </>
  )
}
