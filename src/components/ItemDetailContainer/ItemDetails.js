import React from 'react'
import { Icon, Item } from 'semantic-ui-react'




const ItemDetails = ({data}) => (
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
)

export default ItemDetails