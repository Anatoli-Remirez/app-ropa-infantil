import React from 'react'
// import ItemDetails from '../ItemDetailContainer/ItemDetails';
import Items from '../Items/Items'
import '../Items/ItemList.css'
// import { Link } from 'react-router-dom'


const ItemList = ({items}) => {
    
  
    return (
      <div className="item-list">
   
        {items.map((e) => {

         return <div key={e.id} className="items-container">
                    <Items  data={e}/>
                   
                 </div>
      
        })}
        </div>
    )
}

export default ItemList