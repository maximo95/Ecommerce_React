import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer({productos}) {

    const {id} = useParams()
    const [cargandoDetail,setCargandoDetail] = useState (true)
    const [errorDetail, setErrorDetail] = useState (false)
    const [detail,setDetail] = useState ({});

    console.log(productos)

    useEffect(() => {

        const promesaDetail = new Promise ((resolveDetail,rejectDetail)=>{

            setTimeout (()=>{resolveDetail (
                

                productos.find (articulo =>articulo.id == id)
                
                )

            promesaDetail.then ((detail)=>{
                setDetail (detail);
                console.log (detail)
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

        <ItemDetail detail = {detail} cargandoDetail ={cargandoDetail}/>
        
        <div>{errorDetail && "No se pudo cargar los productos"}</div>



        <div>{cargandoDetail && "Cargando los detalles del itemDetail.jsx"}</div>



    </>

  )
}
