import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import  CartWidget  from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from 'react-router-dom'

import './NavBar.css';

export default class MenuExampleHeader extends Component {
  
  render() {
   

    return (
      <div className="navBar">
      <Menu id="menu">
        <Menu.Item header id="titulo"><Link to="/">Tienda de ropa infantil</Link></Menu.Item>
        <Menu.Item id="camisetas_osos"><Link to="/category/camisetas_osos">Categoria 1</Link></Menu.Item>
        <Menu.Item id="camisetas_skate"><Link to="/category/camisetas_skate">Categoria 2</Link></Menu.Item>
        <Menu.Item id="camisetas_juegos"><Link to="/category/camisetas_juegos">Categoria 3</Link></Menu.Item>
        
      </Menu>
      <CartWidget />
      </div>
      
    )
  }
}