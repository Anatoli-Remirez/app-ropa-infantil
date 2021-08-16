import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';




function App() {
  return (
   
    <div className="App">
        
        <NavBar title = "Tienda de ropa infantil" subtitle="La mejor" />
        <div className="botonAgregar">
        <ItemCount stock="5" initial="1" />
        </div>
        <div className="container">
        <ItemListContainer saludo="Hola bienvenido a tu tienda de ropa infantil "/> 
        </div>
    </div>
    
  );
}

export default App;
