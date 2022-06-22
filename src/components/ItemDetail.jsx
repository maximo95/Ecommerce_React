import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'




function ItemDetail({detail,cargandoDetail}) {

    const {description, precio,imagen,id} = detail


    console.log (cargandoDetail)

  return (
    <>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
              <Card.Title>{precio}</Card.Title>
              <Card.Text>
              {description}
              </Card.Text>
             
                <ItemCount detail = {detail}/>
              
          </Card.Body>
      </Card>
    </>
    
  )
}

export default ItemDetail