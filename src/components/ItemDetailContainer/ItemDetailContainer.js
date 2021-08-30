import React from 'react'
import ItemDetails from '../ItemDetailContainer/ItemDetails'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import ItemCount from '../ItemCount/ItemCount'
// import {useState, useEffect} from 'react'
// import axios from 'axios'

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState([]);
  const {itemId}=useParams();
  useEffect(() => {

    fetch('https://fakestoreapi.com/products?limit=5')
  .then(response => response.json())
  .then(json => {
    
    setDetalle(json.filter((e)=>e.id === parseInt(itemId)));
   
    
  })}, [itemId]);
  console.log(detalle);

  return(
  
  <div className="item-details-container">
   
   
   {detalle.map((e) => {

return <div key={e.id} className="items-container">
           <ItemDetails  data={e}/>
          
        </div>

})}

     </div>

)
 
}

export default ItemDetailContainer