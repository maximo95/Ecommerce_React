import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import'./ItemListContainer.css'
export default function ItemListContainer({Greeting, stock,minimo}) {

//Practica clase
  const [cargando,setCargando] = useState (true)
  const [error, setError] = useState (false)
  const [resultado, setResultado] = useState ([])

  useEffect(() => {

    const promesa = new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve([{id: "id de la compra", monto : 7000},{id: "otro id", monto : 500}])
        //reject("error en la carga")
      }, 2000);      
    })

      promesa.then ((resultado)=>{
        setResultado (resultado);
        console.log(promesa);
        console.log(resultado);})

      promesa.catch ((error)=>{
      
        setError (true);
        console.log(error);})
    
      promesa.finally(()=>{
        setCargando (false);
      })
 
  }, [])

  //Desafío 
  const [cargandoProducto,setCargandoProducto] = useState (true)
  const [errorProducto, setErrorProducto] = useState (false)
  const [productos,setProductos] = useState ([]);

  useEffect(() => {
    const promesaProductos = new Promise ((resolveProductos,rejectProductos) =>{

      setTimeout (()=>{
        resolveProductos ([
          { 
            id:1,
            titulo:"cafe brasil",
            description:"Cafe extraido de la amazana brasilera y producido de forma organica" ,
            precio:3500,
            imagen:'/imagenes/cafe_brasil_compras.png',
          },
          { 
            id:2,
            titulo:"cafe catucai",
            description:"Cafe extraido de catucai y producido de forma organica" ,
            precio:3000,
            imagen:'/imagenes/cafe_catucai.png',
          },
          {
            id:3,
            titulo:"cafe colombiano",
            description:"Cafe extraido de las selvas colombianas y producido de forma organica" ,
            precio:6000,
            imagen:'/imagenes/cafe_col_compra.png',
          },
          {
            id:4,
            titulo:"cafe costa rica",
            description:"Cafe extraido de las zona rurales de costa rica y producido de forma organica" ,
            precio:8000,
            imagen:'/imagenes/cafe_costarica.png',
          }])
      },2000)
      })

      promesaProductos.then ((resultadoProducto)=>{

        setProductos (resultadoProducto);

        console.log (resultadoProducto);
      })

      promesaProductos.catch ((errorProducto)=>{
        setErrorProducto(true);
        console.log(errorProducto);
      })

      promesaProductos.finally(()=>{
        setCargandoProducto (false);
      })
  
  }, [])
  



  const [valor,setValor]= useState (minimo)

  const sumarProducto = () => {
    if (valor < stock){
      setValor(valor + 1);
    } else {alert("No podes agregar más productos")}
  }

  const restarProducto = () => {
    if (valor > 1){ 
      setValor (valor - 1);
    } else {
      alert ("La cantidad mínima es 1")
    }
  }
//Esta función también habría funcionado Es la funcion onAdd y reiniciar juntas. Ojo repasar Arrow function
 //const onAdd = ()=>{alert (`se agregaron ${valor} productos al carrito`);
 //setValor(minimo);}

  const onAdd = () => {alert (`se agregaron ${valor} productos al carrito`)}
 
  const reiniciar = () => {setValor (minimo)}

  return (
    <>

    <div>{cargando && "CARGANDO DATOS" }</div>
    <div>{error && "NO SE PUDO CARGAR"}</div>
    <div>{resultado && (resultado.map((item) => (
    <>
    <p>ID:{item.id}</p>
    <p>monto:{item.monto}</p>
    </>
    )))}</div>
    <ItemList productos = {productos}/>
    <div className='saludo'>{Greeting}</div>
    <div className='contador'>
    <button className='boton' onClick={()=> {sumarProducto()}}> + </button>
    <button className='boton' onClick={() => {restarProducto()}}> - </button>
    <button className='boton' onClick={() => {onAdd();reiniciar();}}>Agregar Carrito</button>
    <p> {valor}</p>
    </div>
    </>
  )
}
