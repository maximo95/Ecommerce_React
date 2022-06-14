import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import detallesProductos from '../DetallesProductos';

export default function ItemDetailContainer() {

    const {id} = useParams()
    const [cargandoDetail,setCargandoDetail] = useState (true)
    const [errorDetail, setErrorDetail] = useState (false)
    const [detail,setDetail] = useState ({});

    console.log(id)
    console.log(typeof id)

    useEffect(() => {

        const promesaDetail = new Promise ((resolveDetail,rejectDetail)=>{

            setTimeout (()=>{resolveDetail (detallesProductos.find (articulo =>articulo.id == id))
            },2000)
        
        }) 

            promesaDetail.then ((articulo)=>{
                setDetail (articulo);
                console.log ('el articulo es:')
                console.log (articulo)
            })

            promesaDetail.catch((errorDetail)=>{
                setErrorDetail (true);
            })
            promesaDetail.finally (()=>{setCargandoDetail(false)})

            console.log ("terminé la promesa")

       

    }, [id])
    



    return (
    <>

        	{console.log (detail)}
        {/*<div>{detail && detail.map (detalle => <ItemDetail key ={detalle.id}  detalle ={detalle} cargandoDetail ={cargandoDetail} /> ) }</div>*/}

        <ItemDetail detail={detail} />
        
        <div>{errorDetail && "No se pudo cargar los productos"}</div>



        <div>{cargandoDetail && "Cargando los detalles del itemDetail.jsx"}</div>



    </>

  )
}
