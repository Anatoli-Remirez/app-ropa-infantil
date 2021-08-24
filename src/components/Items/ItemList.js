import React, {useState, useEffect} from 'react'
import ItemDetails from '../ItemDetailContainer/ItemDetails';
import Items from '../Items/Items'
import '../Items/ItemList.css'

export const ItemList = () => {

    const [items, setItems] = useState([]);
  
    useEffect(() => {
  
      fetch('productos.json')
              .then(res=>res.json())
              .then(json=>setItems(json))
             
    }, [])
  
  
    return (
      <div className="item-list">
        
        {items.map((e) => {
         
         return <div className="items-and-itemDetails"><Items key={items.nombre} data={e}/>
                <ItemDetails key={items.precio} data={e}/> </div>
  
        })}
      </div>
    )
  }
  
  export default ItemList
