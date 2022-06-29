import { useContext } from 'react';
import { MiContexto } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap'
import './Cart.css'

export default function Cart() {
  const {PrecioTotalProductos,cart,removeItem,clearCart} = useContext (MiContexto);
  console.log(PrecioTotalProductos)
  const carritoVacio = cart.length === 0
  return (
    <>
    <h1 className="Titulo">Mi Carrito</h1>
      {
      carritoVacio ?
      <>
      <div className="CarritoVacio">
        <h2>Tu carrito está vacío</h2>
        <Link to= '/inicio'><Button className='BotonVacio'>volver a los productos</Button></Link>
      </div>  
      </>
      :
      <> 
        {cart.map(producto => (<div className = "ItemCarrito" key={producto.id} >
          <div><img className="ImagenItem" src={producto.imagenUrl} alt ={producto.nombre}/></div>
          <div>{producto.nombre}</div>
          <div>{producto.precio}</div>
          <div>x {producto.cantidad}</div>
          <div>Subtotal: {producto.precio*producto.cantidad}</div>
          <Button className="BotonItem" onClick={()=>removeItem(producto.id)} variant="danger" >X</Button>
        </div>) )}
        <div className="FueraDelMap">
          <p className="Letra">Precio Final : {PrecioTotalProductos()} </p>
          <Button onClick={()=> clearCart()} variant="danger">eliminar todo lo productos del carrito</Button>
        </div> 
        <div className="FueraDelMap">
          <Link to = '/checkout'>  <Button>Terminar Compra</Button> </Link>
        </div> 
      </>
      }
    </>
  )
}
