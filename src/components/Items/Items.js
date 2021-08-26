import React from 'react'
import { Item } from 'semantic-ui-react'
import '../Items/Items.css'
import { Link } from 'react-router-dom'


const Items = ({data}) => (
  <div className="items">
  <Item.Group>
    <Link to={`/item/${data.id}`}><Item>
      <Item.Image id="imagenes" size='medium' src={data.imagen} />

      <Item.Content>
        <Item.Header>{data.id}</Item.Header>
        <Item.Meta>
          <span className='price'>{data.precio} €</span>
          <span className='stay'>{data.color}</span>
        </Item.Meta>
        <Item.Description></Item.Description>
      </Item.Content>
       
    </Item></Link>
  </Item.Group>

  </div>
  

)

export default Items

