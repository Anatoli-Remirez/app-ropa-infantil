import '../ItemListContainer/ItemListContainer.css'
import React from 'react'
import ItemList from '../Items/ItemList'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'



export const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);
  const {categoryId}=useParams();
 
  useEffect(() => {

    fetch('https://fakestoreapi.com/products?limit=5')
  .then(response => response.json())
  .then(json => {
    categoryId ?
    setItems(json.filter((e)=>e.category === categoryId)):
    setItems(json);
   
    
  })}, [categoryId]);
  
 
  return(
    <div>
    <div><h1>{categoryId}</h1></div>
  <div className="item-list-container">
    
    <ItemList items={items}/>
  </div>
  </div>
  )
}

export default ItemListContainer
