import React from 'react'

import { Card } from 'react-bootstrap'


function ItemDetail({cargandoDetail,errorDetail, detail}) {

    const {description, precio,imagen} = detail

  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{precio}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
        </Card.Body>
    </Card>

    <div> {cargandoDetail && "Cargando los detalles"}</div>
    
    <div><div>{errorDetail && "No se pudo cargar los productos"}</div></div>

    </>
    
  )
}

export default ItemDetail