import React from 'react'
import { Item } from 'semantic-ui-react'
import '../Items/Items.css'
import ItemCount from '../ItemCount/ItemCount'

const Items = ({data}) => (
  
  <Item.Group>
    <Item>
      <Item.Image id="imagenes" size='medium' src={data.imagen} />

      <Item.Content>
        <Item.Header>{data.nombre}</Item.Header>
        <Item.Meta>
          <span className='price'>{data.precio} €</span>
          <span className='stay'>{data.color}</span>
        </Item.Meta>
        <Item.Description></Item.Description>
      </Item.Content>
      <button className="boton-detalles">Detalles</button>
      
    </Item>
    <div className="botonAgregar">
    <ItemCount stock="5" initial="1" />
        </div>
    
  </Item.Group>
  

)

export default Items