import React, {useState, useEffect} from 'react'
// import ItemDetails from '../ItemDetailContainer/ItemDetails';
import Items from '../Items/Items'
import '../Items/ItemList.css'
// import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'

export const ItemList = () => {
    
    const [items, setItems] = useState([]);
    
    const {categoryId}=useParams();

    useEffect(() => {

      fetch('productos.json')
              .then(res=>res.json())
              .then(json=>setItems(json))

    }, [])


    return (
      <div className="item-list">
        
        
        <div><h1>{categoryId}</h1></div>
        {items.map((e) => {

         return <div key={e.id} className="items-container">
                    <Items  data={e}/>
                   
                 </div>
      
        })}
        </div>
    )
}

export default ItemList