import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Item(elemento) {

    const {titulo,description, precio,imagen} = elemento

  return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
            
                {description}
                precio: {precio}

            </Card.Text>
            <Button variant="primary">Ver detalle</Button>
        </Card.Body>
        </Card>
  )
}
