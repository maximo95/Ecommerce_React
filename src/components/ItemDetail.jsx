import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'
import './ItemDetail.css'


function ItemDetail({detail}) {

    const {descripcion, precio,imagenUrl} = detail

  return (
    <>
      <div  className='itemDetalle'>
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
      </div>
    </>
    
  )
}

export default ItemDetail