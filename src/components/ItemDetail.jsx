import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'


function ItemDetail({detail,cargandoDetail}) {

    const {descripcion, precio,imagenUrl} = detail

  return (
    <>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagenUrl} />
          <Card.Body>
              <Card.Title>{precio}</Card.Title>
              <Card.Text>
              {descripcion}
              </Card.Text> 
                <ItemCount detail = {detail}/>              
          </Card.Body>
      </Card>
    </>
    
  )
}

export default ItemDetail