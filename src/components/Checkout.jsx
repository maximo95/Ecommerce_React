import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { MiContexto } from '../context/CartContext';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


export default function Checkout() {

    const {cart,PrecioTotalProductos} = useContext(MiContexto);

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
            <h1>Tu carrito está vacío</h1>
            <Link to= '/'><Button>volver a los productos</Button></Link>
            </>
        )
    }


  return (
    <>
    <h1>Complete sus datos para terminar la compra</h1>
  
    <input onChange={(e)=> setNombre(e.target.value)} placeholder="ingrese su nombre"></input>

    <input onChange={(e)=> setCorreo(e.target.value)} placeholder="ingrese su celular"></input>

    <input onChange={(e)=> setCelular(e.target.value)} placeholder="ingrese su correo electronico"></input>

    <button onClick={()=>manejarClick()}>Terminar Compra</button>

    {
        compraRealizada &&
                            <>
                                <div>
                                    <h1>Tu compra fue realizada con exito</h1>
                                    <p>El comprobante de tu compra es : {idCompras}</p>
                                </div>
                            </>
    }

    </>
  )
}
