import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css';

export default function Item({elemento}) {

    const {nombre,descripcion, precio,imagenUrl,id,stock} = elemento

  return (
        <Card style={{ width: '18rem' }} className = "item-Detalle">
        <Card.Img variant="top" src={imagenUrl} className="imagenItem" />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>            
                {descripcion} 
            </Card.Text>
            <Card.Text>
                disponible: {stock}
            </Card.Text>
            <Card.Text>
                precio: {precio}
            </Card.Text>           
            <Link to={'/item/' + id} >  <Button variant="primary">Ver detalle</Button> </Link>
        </Card.Body>
        </Card>
  )
}
