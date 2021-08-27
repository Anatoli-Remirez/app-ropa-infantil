import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route, } from  'react-router-dom'
// import Home from './views/Home'
// import About from './views/About'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
   <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
