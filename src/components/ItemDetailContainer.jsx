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
            },2000)

            promesaDetail.then ((resultadoDetail)=>{
                setDetail (resultadoDetail);
            })

            promesaDetail.catch((errorDetail)=>{
                setErrorDetail (true);
            })
            promesaDetail.finally (()=>{setCargandoDetail(false)})

        }) 

    }, [])
    



    return (

    <ItemDetail cargandoDetail = {cargandoDetail} errorDetail = {errorDetail} detail = {detail} />

  )
}
