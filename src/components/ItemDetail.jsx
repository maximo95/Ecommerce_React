import React from 'react'

import { Card } from 'react-bootstrap'


function ItemDetail({detail}) {
console.log ("detail de ItemDetail")
  console.log (detail);

    const {description, precio,imagen,cargandoDetail} = detail

  return (
    <>
    <div>
    {(cargandoDetail && "Cargando los detalles") ||
      (<Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
              <Card.Title>{precio}</Card.Title>
              <Card.Text>
              {description}
              </Card.Text>
          </Card.Body>
      </Card>)}
    </div>
    </>
    
  )
}

export default ItemDetail