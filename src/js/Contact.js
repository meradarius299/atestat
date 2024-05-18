// src/js/Contact.js
import React from "react";
import { NavLink } from "react-router-dom";
import poza1 from "../poze/location.png";
import poza2 from "../poze/location.png";
import poza3 from "../poze/phone.png";

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const Contact = () => {
  return (
    <>
      <div class="container">
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">
              Pentru mai multe detalii ne puteti contacta la:
            </h3>
            <p class="text"></p>
            <div class="info">
              <div class="information">
                <img src={poza1} class="icon" alt="" />
                <p>Cluj-Napoca, Str.Decebal, Nr.6, 407044</p>
              </div>
              <div class="information">
                <img src={poza2} class="icon" alt="" />
                <p>contact@trivado.ro</p>
              </div>
              <div class="information">
                <img src={poza3} class="icon" alt="" />
                <p>+40 705840021</p>
              </div>
            </div>
            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact</h3>
              <div class="input-container">
                <input
                  type="email"
                  name="email"
                  class="input"
                  for=""
                  spellcheck="false"
                  placeholder="Email"
                />
              </div>
              <div class="input-container">
                <input
                  type="tel"
                  name="phone"
                  class="input"
                  for=""
                  spellcheck="false"
                  placeholder="Telefon"
                />
              </div>
              <div class="input-container textarea">
                <textarea
                  name="message"
                  class="input"
                  for=""
                  spellcheck="false"
                  type="text"
                  placeholder="Spune-ne mesajul tau"
                ></textarea>
              </div>
              <NavLink to="/">
                <input type="submit" value="Trimite" class="btn" href="/" />
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
