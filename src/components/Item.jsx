import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Item({elemento}) {

    const {titulo,description, precio,imagen,id} = elemento

  return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>            
                {description} 
            </Card.Text>
            <Card.Text>
                precio: {precio}
            </Card.Text>           
            <Link to={'/item/' + id} >  <Button variant="primary">Ver detalle</Button> </Link>
        </Card.Body>
        </Card>
  )
}
