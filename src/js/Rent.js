// src/components/Rent.js
import React from "react";
import poza1 from "../poze/property-1.jpg";
import poza2 from "../poze/property-2.jpg";
import poza3 from "../poze/property-3.jpg";
import poza4 from "../poze/CASA-D-10000 .png";
import poza5 from "../poze/author.jpg";

function Rent() {
  return (
    <>
      <section class="property" id="property">
        <div class="containeras">
          <p class="section-subtitle"></p>

          <h2 class="h2 section-title">
            Gasim cea mai buna chirie pentru dumneavoastra!
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
                  <div class="card-badge green">For Rent</div>
                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Cluj-Napoca, Romania</address>
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
                    <strong>$7.900</strong>/Luna
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Casa nou perfecta de vizionat</a>
                  </h3>

                  <p class="card-text">
                    Casa nou renovata in cartierul Buna ziua, Cluj-Napoca.
                    Perfecta pentru o familie numeroasa si primitoare!
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitoare</span>
                    </li>

                    <li class="card-item">
                      <strong>2 </strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Bai</span>
                    </li>

                    <li class="card-item">
                      <strong> 3450</strong>

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

                  <div class="card-badge green">FOR RENT</div>

                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Brasov, Romania</address>
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
                    <strong>$230,49</strong>/Noapte
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Apartament modern</a>
                  </h3>

                  <p class="card-text">
                    Apartament nou in zona Sanpetru, Brasov.Apartamentul este
                    organizat ca airbnb sau hosteling,perfect pentru turisti sau
                    persoane care doresc sa isi petreaca o noapte aici.
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>1</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitor</span>
                    </li>

                    <li class="card-item">
                      <strong>1 </strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Baie</span>
                    </li>

                    <li class="card-item">
                      <strong>30 </strong>

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

                  <div class="card-badge green">For Rent</div>

                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Barcelona, Spain</address>
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
                    <strong>$12.600</strong>/Luna
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Penthouse comfortabil</a>
                  </h3>

                  <p class="card-text">
                    Penthouse genial localizat in zona plajei din Barcelona.
                    Apartament imens bun de locuit si tinut distractii cu
                    prietenii.
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitoare</span>
                    </li>

                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Bai</span>
                    </li>

                    <li class="card-item">
                      <strong>1245</strong>

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

                  <div class="card-badge green">For Rent</div>

                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Bucuresti, Romania</address>
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
                    <strong>$14,350</strong>/Luna
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Villa luxery in Rego Park</a>
                  </h3>

                  <p class="card-text">
                    Villa luxery aflat in noul park rezidential "Rego Park" din
                    Bucuresti. Perfecta pentru persoane dornice de o locuinta
                    imensa si luxery.
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>4</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span> Dormitoare</span>
                    </li>

                    <li class="card-item">
                      <strong>3</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span> Bai</span>
                    </li>

                    <li class="card-item">
                      <strong>3700</strong>

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

export default Rent;
