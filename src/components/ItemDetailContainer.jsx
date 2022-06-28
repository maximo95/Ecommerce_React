import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc,getDoc,getFirestore} from 'firebase/firestore'

export default function ItemDetailContainer() {

    const {id} = useParams()
    const [cargandoDetail,setCargandoDetail] = useState (true)
    const [errorDetail, setErrorDetail] = useState (false)
    const [detail,setDetail] = useState ({});


    useEffect(() => {

        const db = getFirestore();

        const productoRerencia = doc(db,'productos',id);

        getDoc(productoRerencia)
        
        .then((promesaResuelta)=>{
            setDetail({...promesaResuelta.data(),id:promesaResuelta.id})
        })
        .catch((errorDetail)=>{
            setErrorDetail(errorDetail)
        })
        .finally(()=>{setCargandoDetail(false)});

    }, [id])
    



    return (
    <>

        <ItemDetail detail={detail} />
        
        <div>{errorDetail && "No se pudo cargar los productos"}</div>


        <div>{cargandoDetail && "Cargando los detalles del itemDetail.jsx"}</div>


    </>

  )
}
