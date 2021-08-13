import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./CartWidget.css"



export const CartWidget = () => {
    
    
    return (
        <div className="icono">
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default CartWidget