// src/components/Buy.js
import React from "react";
import poza1 from "../poze/property-1.jpg";
import poza2 from "../poze/property-2.jpg";
import poza3 from "../poze/property-3.jpg";
import poza4 from "../poze/property-4.png";
import poza5 from "../poze/author.jpg";

function Rent() {
  return (
    <>
      <section class="property" id="property">
        <div class="containeras">
          <p class="section-subtitle">Properties</p>

          <h2 class="h2 section-title">Featured Listings</h2>

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

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">New Apartment Nice View</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
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

                  <div class="card-badge orange">For Sales</div>

                  <div class="banner-actions">
                    <button class="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Modern Apartments</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
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

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Comfortable Apartment</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
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

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div class="card-content">
                  <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">Luxury villa in Rego Park</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                    Renovated With New Wood
                  </p>

                  <ul class="card-list">
                    <li class="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div class="card-footer">
                  <div class="card-author">
                    <figure class="author-avatar">
                      <img src={poza5} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
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
