import { createContext, useEffect, useState } from 'react';

export  const MiContexto = createContext ();

export default function CartContext({children}) {

  const detallesProductos =

  [
    { 
      id:1,
      titulo:"cafe brasil",
      description:"Cafe extraido de la amazana brasilera y producido de forma organica" ,
      precio:3500,
      imagen:'/imagenes/cafe_brasil_compra.png',
      categoria: "granos",
    },
    { 
      id:2,
      titulo:"cafe catucai",
      description:"Cafe extraido de catucai y producido de forma organica" ,
      precio:3000,
      imagen:'/imagenes/cafe_catucai.jpg',
      categoria: "granos",
    },
    {
      id:3,
      titulo:"cafe colombiano",
      description:"Cafe extraido de las selvas colombianas y producido de forma organica" ,
      precio:6000,
      imagen:'/imagenes/cafe_col_compra.png',
      categoria: "granos",
    },
    {
      id:4,
      titulo:"cafe costa rica",
      description:"Cafe extraido de las zona rurales de costa rica y producido de forma organica" ,
      precio:8000,
      imagen:'/imagenes/cafe_costarica.png',
      categoria: "granos",
    },
    {
      id:5,
      titulo: "cafetera expresse",
      description: "Cafetera express profecional, diseñada para sacarle el mejor sabor al cafe",
      precio:8000,
      imagen: '/imagenes/cafetera_express.jpg',
      categoria: "cafeteras",
    },
  
    {
      id:6,
      titulo: "cafetera italiana",
      description: "Cafetera italiana profecional, diseñada para preparar cafe italiano",
      precio:8000,
      imagen: '/imagenes/cafetera_italiana.jpg',
      categoria: "cafeteras",
    },
  
    {
      id:7,
      titulo: "cafetera francesa",
      description: "Cafetera francesa profecional, diseñada para preparar cafe frances",
      precio:8000,
      imagen: '/imagenes/prensa_francesa.jpg',
      categoria: "cafeteras",
    }
  
  ];


  const [cart, setCart] = useState ([])

  //Metodo some: En el ItemDetail se va a encargar de detectar si el producto a agregar. Con este metodo se retorna un boleano
  const isInCart = (id) =>{
    return cart.findIndex(item => item.id === id)
  }
 
  const agregarAlCarro = (item,cantidad) => {
    console.log(item,cantidad);
    //console.log(isInCart(item.id));
    let posicion = isInCart(item.id)
    console.log(posicion);
    if (posicion == -1){
      setCart([...cart,{...item,cantidad:cantidad}])
    } else {
    let auxCartCopy = [...cart]
    auxCartCopy[posicion].cantidad = auxCartCopy[posicion].cantidad + cantidad
    setCart(auxCartCopy)
    }

  }
  useEffect(() => {
    console.log(cart);
  }, [cart])

   const removeItem = (id) =>{
    setCart (cart.filter(item => item.id != id))
   }
  
   const clearCart = () => {
    setCart([])
   }
  return (<MiContexto.Provider value={{cart, agregarAlCarro,removeItem,clearCart}}>
          {children}
          </MiContexto.Provider>
        )
}
