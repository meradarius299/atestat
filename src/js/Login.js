// src/js/Login.js
import React from "react";
import { NavLink } from "react-router-dom";

const togglePassword = () => {
  const temp = document.getElementsByClassName("toggle");
  temp[0].classList.toggle("showing");
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
};  

const Login = () => {
  return (
    <div class="login-card">
      <h1 id="log">Login</h1>
      <h3 id="text">Enter your credentials</h3>
      <form class="login-form">
        <input
          spellcheck="false"
          class="control"
          type="text"
          placeholder="Username"
        />
        <div class="password">
          <input
            spellcheck="false"
            class="control"
            id="password"
            type="password"
            placeholder="Password"
          />
          <button
            class="toggle"
            type="button"
            onClick={() => togglePassword()}
          ></button>
        </div>
        {/* <button class="control">
          <a id="nuj" type="button">LOGIN</a>
        </button> */}
        <NavLink to="/">
          <button class="control" type="button">Login</button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
