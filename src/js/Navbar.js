// src/js/Navbar.js
import React from 'react';
import poza from '../poze/poza.png';


const  Navbar = () => {
    return (
        <nav class="navbar">
            <div class="logo">
                <i class="fa-solid fa-font-awesome"></i>
                <a href="/" id="title">Trivado.ro</a>
            </div>
            <div class="nume">
                <div class="caca">
                    <div class="menu-links">
                    <a href="/">Home</a>
                    <a href="/properties">Properties</a>
                    <a href="/about">About us</a>
                    <a href="/contact">Contact</a>
                </div>
                <a class="log-in" href="/login">Login</a>
                </div>
            </div>
            <div class="menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
};
  
export default Navbar;