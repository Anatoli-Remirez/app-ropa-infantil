import React from 'react'
import { Icon, Item } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetails = ({data}) =>  {

  
  const [count, setCount] = useState(0)

  const añadir = (contador) => {

    setCount(contador)
  }
  console.log(count)

  return (

    
  <div className="details-container">
  
  <Item.Group>
    <Item>
      <Item.Image size='small' src={data.image} />

      <Item.Content>
        <Item.Header as='a'>{data.title}</Item.Header>
        <Item.Description>Aquí hay que crear una descripcion de cada producto</Item.Description>
        <Item.Extra>
          <Icon color='green' name='check' /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>

  { count === 0? 
    <div className="item-counter">
    <ItemCount initial ="1" stock="5" onAdd={añadir}  />
    </div>:
    <Link to='/cart>'>
      <button className="terminarCompra">Terminar compra</button>
    </Link>       
  }
  </div>
  ) 
}

export default ItemDetails