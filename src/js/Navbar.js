// src/js/Navbar.js
import React from "react";
import poza from "../poze/poza.png";

function test() {
  const element = document.getElementById("test");

  if (element.style.opacity == 0) {
    element.style.opacity = 1;
    element.style.bottom = "-90px";
  } else {
    element.style.opacity = 0;
    element.style.bottom = "0px";
  }
}

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="logo">
        <i class="fa-solid fa-font-awesome"></i>
        <a href="/" id="title">
          Trivado.ro
        </a>
      </div>
      <div class="nume">
        <div class="caca">
          <div class="menu-links">
            <a href="/">Acasa</a>
            <a onClick={() => test()} id="prop">
              Proprietati
            </a>
            {/* <div class="dropdown">
              <a href="" class="navbar-dropdown-item">
                Proprietati
              </a>
              <div class="dropdown-content">
                <a href="/rent" class="fa-solid">
                  Inchiriaza
                </a>
                <a href="/buy" class="fa-solid">
                  Cumpara
                </a>
              </div>
            </div> */}
            <a href="/about">Despre</a>
            <a href="/contact">Contact</a>
          </div>
          <a class="log-in" href="/login">
            Login
          </a>
          <div id="test">
            <a href="/rent" class="rent">
              Inchiriaza
            </a>
            <a href="/buy" class="buy">
              Cumpara
            </a>
          </div>
        </div>
      </div>
      <div class="menu-btn">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
