import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import'./ItemListContainer.css';
import {collection,getDocs,getFirestore,query,where} from 'firebase/firestore'


export default function ItemListContainer() {
  
  const {id} = useParams ();

  const [cargandoProducto,setCargandoProducto] = useState (true)
  const [errorProducto, setErrorProducto] = useState (false)
  const [productos,setProductos] = useState ([]);

  useEffect(() => {

    const db = getFirestore()

    const productosColeccion = collection(db,'productos');

    if (id){
      
      const productoFiltrado = query(productosColeccion,where('categoria','==',id))

      getDocs(productoFiltrado)
      .then(promesaResuelta => {
        setProductos(promesaResuelta.docs.map((doc) => ({...doc.data(),id:doc.id})));
      })
      .catch((errorProducto)=>{
        setErrorProducto(errorProducto)
      })
      .finally(()=>{setCargandoProducto(false)})

    }else{ getDocs(productosColeccion)
      .then(promesaResuelta => {
        setProductos(promesaResuelta.docs.map((doc) => ({...doc.data(),id:doc.id})));
      })
      .catch((errorProducto)=>{
        setErrorProducto(errorProducto)
      })
      .finally(()=>{setCargandoProducto(false)})}

  }, [id])
  
  return (
    <>
    <ItemList productos = {productos} errorProducto={errorProducto} cargandoProducto={cargandoProducto} />
    </>
  )
}
