import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
   
    <div className="App">
        
        <NavBar title = "Tienda de ropa infantil" subtitle="La mejor" />
        <ItemListContainer saludo="Hola bienvenido a tu tienda de ropa infantil "/>
        
    </div>
    
  );
}

export default App;
