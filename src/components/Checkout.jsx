import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { MiContexto } from '../context/CartContext';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Checkout.css';



export default function Checkout() {

    const {cart,PrecioTotalProductos,clearCart} = useContext(MiContexto);

    const[nombre,setNombre] = useState();

    const[correo,setCorreo] = useState();

    const[celular,setCelular] = useState();

    const db = getFirestore();

    const orderColeccion = collection (db,'factura');

    const [idCompras,setIdCompras] = useState('');

    const [compraRealizada,setCompraRealizada] = useState(false);

    function manejarClick() {
        const factura = {
            comprador: {nombre,correo,celular},
            productos : cart,
            precioTotalFinal : PrecioTotalProductos(),
            fecha: new Date()
        }
        console.log(factura);

        addDoc(orderColeccion,factura)
        .then(({id})=>{
            setIdCompras(id);
            setCompraRealizada(true);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    if (cart.length === 0){
        return (
            <>
            <div className='detallesVacio'>
            <h1 className='tituloVacio'>Tu carrito está vacío</h1>
            <p className='texto-vacio'>El formulario no estará disponible</p>
            <p className='texto-vacio'>Debes añadir productos al carrito</p>
            <div className='botonVacio'>
                <Link to= '/'><Button className='color-Vacio'>volver a los productos</Button></Link>
            </div>
            </div>
            </>
        )
    }


  return (
    <>
    {
    compraRealizada ? (

        <>
            <div className='compraRealizada'>
            <h1 className='tituloRealizado'>Tu compra fue realizada con exito</h1>
            <p className='textoRealizado'>El comprobante de tu compra es : {idCompras}</p>
            <p className='textoRealizado'>Nos pondremos en contacto en la brevedad</p>
            <p className='textoRealizado'>En tu correo encontraras los detalles de la compra</p>
            <p className='textoRealizado'>Cualquier dudas que tengas no dudes en contactarnos</p>
            <div className='botonFormulario'>
            <Link to= '/'><Button className='color-boton' onClick={clearCart}>Terminar Compra</Button></Link>
            </div>
            </div>
        </>
    )
    :
    (
    <>
        <h1 className='tituloFormulario' >Complete sus datos para terminar la compra</h1>
        <div className='formulario' >
            <p className='textoFormulario'>Ingrese su nombre</p>
            <input onChange={(e)=> setNombre(e.target.value)} placeholder="ingrese su nombre"></input>
        </div>
        <div className='formulario'>
            <p className='textoFormulario'>Ingrese su celular</p>
            <input onChange={(e)=> setCorreo(e.target.value)} placeholder="ingrese su celular"></input>
        </div>
        <div className='formulario'>
            <p className='textoFormulario'>Ingrese su correo electronico</p>
            <input onChange={(e)=> setCelular(e.target.value)} placeholder="ingrese su correo electronico"></input>
        </div>
        <div className='botonFormulario'>
            <Button className='color-boton' onClick={()=>manejarClick()}>Terminar Compra</Button>
        </div>
    </>
    )
    }
    </>
  )
}
