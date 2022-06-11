import React from 'react'

import { Card } from 'react-bootstrap'


function ItemDetail({detail,cargandoDetail}) {

    const {description, precio,imagen} = detail

    console.log (cargandoDetail)

  return (
    <>
    <div>
  
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
              <Card.Title>{precio}</Card.Title>
              <Card.Text>
              {description}
              </Card.Text>
          </Card.Body>
      </Card>
    </div>
    </>
    
  )
}

export default ItemDetail