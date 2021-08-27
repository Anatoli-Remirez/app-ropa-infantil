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
        <Menu.Item id="categoria1"><Link to="/category/categoria1">Categoria 1</Link></Menu.Item>
        <Menu.Item id="categoria2"><Link to="/category/categoria2">Categoria 2</Link></Menu.Item>
        <Menu.Item id="categoria3"><Link to="/category/categoria3">Categoria 3</Link></Menu.Item>
        
      </Menu>
      <CartWidget />
      </div>
      
    )
  }
}