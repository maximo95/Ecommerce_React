import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [cargandoDetail,setCargandoDetail] = useState (true)
    const [errorDetail, setErrorDetail] = useState (false)
    const [detail,setDetail] = useState ([]);

    useEffect(() => {

        const promesaDetail = new Promise ((resolveDetail,rejectDetail)=>{

            setTimeout (()=>{resolveDetail (
                [{ 
                id:1,
                description:"Cafe extraido de la amazana brasilera y producido de forma organica" ,
                precio:3500,
                imagen:'/imagenes/cafe_brasil_compra.png'
                }]
                
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

    }, [])
    



    return (
    <>


{console.log("detail")}{console.log(detail)}
        <div>{detail && detail.map (detalle => <ItemDetail key ={detalle.id}  detail ={detalle} cargandoDetail ={cargandoDetail} /> ) }</div>

        {console.log(detail)}
        
        <div>{errorDetail && "No se pudo cargar los productos"}</div>

    </>

  )
}
