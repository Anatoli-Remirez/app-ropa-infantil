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
        <Menu.Item id="categoria1"><Link to="/category/men's clothing">Men's clothing</Link></Menu.Item>
        <Menu.Item id="categoria2"><Link to="/category/jewelery">Jewelery</Link></Menu.Item>
       
        
      </Menu>
      <CartWidget />
      </div>
      
    )
  }
}