import React from 'react'
import { useEffect,useState } from 'react'
import {collection,getDocs,getFirestore} from 'firebase/firestore'
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

export default function Categories() {

    const [categorias,setCategorias] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const categoriascoleccion = collection(db,'categorias');
        getDocs(categoriascoleccion)
        .then((categoriaResuelta)=>{
            setCategorias(categoriaResuelta.docs.map((doc)=>doc.data().nombre));
        })
    }, [])
    

  return (
    <>
    {
        categorias.map((categoria)=> 
        <Nav.Link  key={categoria} as={Link} to= {'categoria/' + categoria}>
            {categoria}
        </Nav.Link>)
    }
    </>
  )
}
