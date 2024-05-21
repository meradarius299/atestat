// src/components/Buy.js
import React from "react";
import poza1 from "../poze/SINT-7.jpg";
import poza2 from "../poze/IONESCU-DM2.jpg";
import poza3 from "../poze/CL-s1.jpg";
import poza4 from "../poze/CR-CLUJ-1.jpg";
import poza5 from "../poze/author.jpg";

function Buy() {
  return (
    <>
      <section class="property" id="property">
        <div class="containeras">
          <p class="section-subtitle" />

          <h2 class="h2 section-title">
            Gasim cea mai buna locuinta pentru dumneavoastra!
          </h2>

          <ul class="property-list has-scrollbar">
            <li>
              <div class="property-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      src={poza1}
                      alt="New Apartment Nice View"
                      class="w-100"
                    />
                  </a>
                  <div class="card-badge orange">For sale</div>
                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Paris, Franta</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span></span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span></span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$223.900</strong>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Casa nou-nouta in partea de vest a frantei</a>
                  </h3>

                  <p class="card-text">
                    Casa rezidentiala in noul park din sectorul de vest al
                    Frantei.Perfect pentru lux si aroganta, familii numeroase.
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>4</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitoare</span>
                    </li>

                    <li class="card-item">
                      <strong>2 </strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Bai</span>
                    </li>

                    <li class="card-item">
                      <strong> 1150</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span> mp2</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="Popovici David" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">Popovici David</a>
                      </p>

                      <p class="author-title">Agent de vanzari</p>
                    </div>
                  </div>

                  <div class="card-footer-actions">
                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="property-card">
                <figure class="card-banner">
                  <a href="#">
                    <img src={poza2} alt="Modern Apartments" class="w-100" />
                  </a>

                  <div class="card-badge orange">FOR sale</div>

                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Instambul, Turcia</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span></span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span></span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$85.900</strong>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#"> Apartment modern </a>
                  </h3>

                  <p class="card-text">
                    Apartament stil turcesc in centrul Instambulului.Amenajat de
                    disgneri profesionisti.
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitoare</span>
                    </li>

                    <li class="card-item">
                      <strong>2 </strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Bai</span>
                    </li>

                    <li class="card-item">
                      <strong> 550</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span> mp2</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="Popovici David" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">Popovici David</a>
                      </p>

                      <p class="author-title">Agent de vanzari</p>
                    </div>
                  </div>

                  <div class="card-footer-actions">
                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="property-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      src={poza3}
                      alt="Comfortable Apartment"
                      class="w-100"
                    />
                  </a>

                  <div class="card-badge orange">For sale</div>

                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Amsterdam, Olanda</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span></span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span></span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$134.900</strong>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">One-flat house</a>
                  </h3>

                  <p class="card-text">
                    Casa pe un singur etaj, stil abstract si futurist in zona
                    restrasa a Amsterdamului.
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitoare</span>
                    </li>

                    <li class="card-item">
                      <strong>2 </strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Bai</span>
                    </li>

                    <li class="card-item">
                      <strong> 650</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span> mp2</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="Popovici David" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">Popovici David</a>
                      </p>

                      <p class="author-title">Agent de vanzari</p>
                    </div>
                  </div>

                  <div class="card-footer-actions">
                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="property-card">
                <figure class="card-banner">
                  <a href="#">
                    <img
                      src={poza4}
                      alt="Luxury villa in Rego Park"
                      class="w-100"
                    />
                  </a>

                  <div class="card-badge orange">For sale</div>

                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Londra, Regatul Unit</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span></span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span></span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$146.900</strong>
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Casa din Kensington</a>
                  </h3>

                  <p class="card-text">
                    Casa in stil british ,aflata in Kensington, vestul Londrei.
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitoare</span>
                    </li>

                    <li class="card-item">
                      <strong>2 </strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Bai</span>
                    </li>

                    <li class="card-item">
                      <strong> 750</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span> mp2</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="Popovici David" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">Popovici David</a>
                      </p>

                      <p class="author-title">Agent de vanzari</p>
                    </div>
                  </div>

                  <div class="card-footer-actions">
                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Buy;
