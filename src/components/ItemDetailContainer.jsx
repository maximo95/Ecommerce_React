import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import detallesProductos from '../DetallesProductos';

export default function ItemDetailContainer() {

    const {id} = useParams()
    const [cargandoDetail,setCargandoDetail] = useState (true)
    const [errorDetail, setErrorDetail] = useState (false)
    const [detail,setDetail] = useState ({});

    

    useEffect(() => {

        const promesaDetail = new Promise ((resolveDetail,rejectDetail)=>{

            setTimeout (()=>{resolveDetail (
                
                console.log (detallesProductos),
                detallesProductos.find (articulo =>articulo.id === id)
                
                )

            promesaDetail.then ((articulo)=>{
                setDetail (articulo);
                console.log (articulo)
            })

            promesaDetail.catch((errorDetail)=>{
                setErrorDetail (true);
            })
            promesaDetail.finally (()=>{setCargandoDetail(false)})

            console.log ("terminé la promesa")

        },2000)
        
        }) 

    }, [id])
    



    return (
    <>


        {/*<div>{detail && detail.map (detalle => <ItemDetail key ={detalle.id}  detalle ={detalle} cargandoDetail ={cargandoDetail} /> ) }</div>*/}

        <ItemDetail detail={detail} cargandoDetail ={cargandoDetail}/>
        
        <div>{errorDetail && "No se pudo cargar los productos"}</div>



        <div>{cargandoDetail && "Cargando los detalles del itemDetail.jsx"}</div>



    </>

  )
}
