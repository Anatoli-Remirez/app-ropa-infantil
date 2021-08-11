import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "nav">
            <div className = "container">
                <div className = "logo">
                    <h3>Tienda ropa infantil</h3>
                </div>
                <div className = "menu">
                    <ul>
                        <li>Ropa</li>
                        <li>Gorras</li>
                        <li>Camisetas</li>   
                    </ul>
                </div>
            </div>
        </div>
            
        
    );
};

export default NavBar;