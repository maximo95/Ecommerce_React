import { useContext } from 'react';
import { MiContexto } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import './Cart.css';

export default function Cart() {
  const {PrecioTotalProductos,cart,removeItem,clearCart} = useContext (MiContexto);
  const carritoVacio = cart.length === 0
  return (
    <>
    
    <h1 className="Titulo">Mi Carrito</h1>
      {
      carritoVacio ?
      <>
      <div className="CarritoVacio">
        <h2 className='titulo-vacio-carrito'>Tu carrito está vacío</h2>
        <h2 className='mensajeVacio'>Vuelve al inicio para comprar</h2>
        <Link to= '/inicio'><Button className='BotonVacio'>volver a los productos</Button></Link>
      </div>  
      </>
      :
      <> 
        {cart.map(producto => (<div className = "ItemCarrito" key={producto.id} >
          <div><img className="ImagenItem" src={producto.imagenUrl} alt ={producto.nombre}/></div>
          <div><p className='letra-carrito-compra'> {producto.nombre}</p></div>
          <div><p className='letra-carrito-compra'>{producto.precio}</p></div>
          <div><p className='letra-carrito-compra'>x {producto.cantidad}</p></div>
          <div><p className='letra-carrito-compra'>Subtotal: {producto.precio*producto.cantidad}</p></div>
          <Button className="BotonItem" onClick={()=>removeItem(producto.id)} variant="danger" >X</Button>
        </div>) )}
        <div className="FueraDelMap">
          <p className="Letra">Precio Final : {PrecioTotalProductos()} </p>
          <Button onClick={()=> clearCart()} variant="danger">vaciar carrito</Button>
        </div> 
        <div className="FueraDelMap">
          <Link to = '/checkout'>  <Button>Terminar Compra</Button> </Link>
        </div> 
      </>
      }
    </>
  )
}
