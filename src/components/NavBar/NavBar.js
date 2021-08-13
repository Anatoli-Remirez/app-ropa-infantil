import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import  CartWidget  from "../CartWidget/CartWidget"
import "./NavBar.css"

import './NavBar.css';

export default class MenuExampleHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="navBar">
      <Menu id="menu">
        <Menu.Item header id="titulo">Tienda de ropa infantil</Menu.Item>
        <Menu.Item id="ropa"
          name='Ropa'
          active={activeItem === 'ropa'}
          onClick={this.handleItemClick}
        />
        <Menu.Item id="personalizacion"
          name='Personalización'
          active={activeItem === 'personalización'}
          onClick={this.handleItemClick}
        />
        <Menu.Item id="contacto"
          name='Contacto'
          active={activeItem === 'contacto'}
          onClick={this.handleItemClick}
          
        />
      </Menu>
      <CartWidget />
      </div>
      
    )
  }
}