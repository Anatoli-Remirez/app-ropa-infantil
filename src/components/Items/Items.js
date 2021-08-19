import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const Items = ({data}) => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={data.image} />

      <Item.Content>
        <Item.Header>{data.title}</Item.Header>
        <Item.Meta>
          <span className='price'>{data.price}</span>
          <span className='stay'>{data.category}</span>
        </Item.Meta>
        <Item.Description>{data.description}</Item.Description>
      </Item.Content>
    </Item>

  </Item.Group>
)

export default Items