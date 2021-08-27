import React from 'react'

import ItemDetails from '../ItemDetailContainer/ItemDetails'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import ItemCount from '../ItemCount/ItemCount'
// import {useState, useEffect} from 'react'
// import axios from 'axios'

const ItemDetailContainer = () => {

  const [items, setItems] = useState([]);
  const {itemId}=useParams();
  useEffect(() => {

    fetch('productos.json')
  .then(response => response.json())
  .then(json => {
    itemId ?
    setItems(json.filter((e)=>e.id === itemId)):
    setItems(json);
    
  })}, [itemId]);

  return(
  
  <div className="item-details-container">

       <h1>{itemId}</h1>

       <ItemDetails items={items}/>
     </div>
  
  )
}

export default ItemDetailContainer