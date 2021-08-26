import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import '../views/Home.css'

 const Home = () => {
    return (
        <div>
           <h1>Home</h1> 
           <div className="container">
        <ItemListContainer saludo="Hola bienvenido a tu tienda de ropa infantil "/> 
        </div>
        </div>
    )
}

export default Home