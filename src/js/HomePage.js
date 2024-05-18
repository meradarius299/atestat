// src/js/HomePage.js
import React from "react";
import poza1 from "../poze/AP-H-D2-1600x1080.png";
import poza2 from "../poze/CASA-D-10000 .png";
import poza3 from "../poze/H1-N.png";

const HomePage = () => {
  return (
    <div className="main">
      <div className="main_fundal">
        <section className="banner">
          <h1>Bun venit la Trivado</h1>
          <p>Găsim cea mai bună proprietate pentru dumneavoastră!</p>
        </section>
        <section class="containere">
          <div class="slider-wrapper">
            <div class="slider">
              <img id="slide-1" src={poza1} alt="" />
              <img id="slide-2" src={poza2} alt="" />
              <img id="slide-3" src={poza3} alt="" />
            </div>
            <div class="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
