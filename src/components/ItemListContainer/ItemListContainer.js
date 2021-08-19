import React, {useState, useEffect} from 'react'
import Items from '../Items/Items'
import '../ItemListContainer/ItemListContainer.css'

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setItems(json))
           
  }, [])


  return (
    <div className="ItemListContainer" key={items.category}>
      <h1>Items</h1>
      {items.map((e) => {
       
       return <Items key={items.id} data={e}/>

      })}
    </div>
  )
}

export default ItemListContainer
