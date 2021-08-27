import '../ItemListContainer/ItemListContainer.css'
import React from 'react'
import ItemList from '../Items/ItemList'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'



export const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);
  const {categoryId}=useParams();
  console.log(categoryId)
  useEffect(() => {

    fetch('productos.json')
  .then(response => response.json())
  .then(json => {
    categoryId ?
    setItems(json.filter((e)=>e.category === categoryId)):
    setItems(json);
    console.log(json);
    
  })}, [categoryId]);
  
 console.log(items)
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
