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
            <Card.Title className='centrar-nombre'>{nombre}</Card.Title>
            <Card.Text className='centrar-datos'>            
                {descripcion} 
            </Card.Text>
            <Card.Text className='centrar-datos'>
                disponible: {stock}
            </Card.Text>
            <Card.Text className='centrar-datos'>
                precio: {precio}
            </Card.Text>           
            <Link to={'/item/' + id} > <div className='boton-centrar'><Button className='boton-item'>Ver detalle</Button></div></Link>
        </Card.Body>
        </Card>
  )
}
