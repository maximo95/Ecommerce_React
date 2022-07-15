import { createContext, useEffect, useState } from 'react';

export  const MiContexto = createContext ();

export default function CartContext({children}) {

  const [cart, setCart] =  useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')):[])
  //Metodo some: En el ItemDetail se va a encargar de detectar si el producto a agregar. Con este metodo se retorna un boleano
  const isInCart = (id) =>{
    return cart.findIndex(item => item.id === id)
  }
 
  const agregarAlCarro = (item,cantidad) => {
    let posicion = isInCart(item.id)
    if (posicion == -1){
      setCart([...cart,{...item,cantidad:cantidad}])
    } else {
    let auxCartCopy = [...cart]
    auxCartCopy[posicion].cantidad = auxCartCopy[posicion].cantidad + cantidad
    setCart(auxCartCopy)
    }

  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

   const removeItem = (id) =>{
    setCart (cart.filter(item => item.id !== id))
   }
  
   const clearCart = () => {
    setCart([])
   }
   //Metodo Reduce - Cartwidget - Retorna la cantidad total de unidades que figura el state cart
   const cantidadProductos = () =>{
    return cart.reduce((acumulador,item)=> acumulador += item.cantidad, 0)
   }

   //Metodo Reduce - Cart - Retorna el precio total del produto
   const PrecioTotalProductos = ()=> {
    return cart.reduce ((acumulador,item)=> acumulador += item.cantidad * item.precio, 0)
   }

 
  return (<MiContexto.Provider value={{cart, agregarAlCarro,removeItem,clearCart,cantidadProductos,PrecioTotalProductos}}>
          {children}
          </MiContexto.Provider>
        )
}
