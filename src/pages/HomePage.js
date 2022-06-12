import React from "react";

const HomePage = () => {
  return (
    <>
      <div class="outer-container">
        <div class="navigation-container">
          <nav class="navigation-bar">
            <a href="/index.html" class="navigation-brand">
              Kupaaya
            </a>
            <div class="textbox-icon-container">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" class="textbox" />
            </div>
            <ul class="navigation-action">
              <li class="navigation-login">
                <a class="btn btn-primary" href="/">
                  Login
                </a>
              </li>
              <li class="navigation-wishlist">
                <div class="container-badge">
                  <a class="btn-icon" href="/">
                    <i class="fa-solid fa-heart"></i>
                  </a>
                  <div class="badge-notification">22</div>
                </div>
              </li>
              <li class="navigation-cart">
                <div class="container-badge">
                  <a class="btn-icon" href="/">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </a>
                  <div class="badge-notification">11</div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="display-1">
          <div class="display-1-img-container">
            <img
              src={require("../assets/cute-baby.jpg")}
              alt="product"
              class="display-1-img img-responsive"
            />
            <div class="display-1-img-text">Baby's</div>
          </div>
          <div class="display-1-img-container">
            <img
              src={require("../assets/cute-baby.jpg")}
              alt="product"
              class="display-1-img img-responsive"
            />
            <div class="display-1-img-text">Baby's</div>
          </div>
          <div class="display-1-img-container">
            <img
              src={require("../assets/cute-baby.jpg")}
              alt="product"
              class="display-1-img img-responsive"
            />
            <div class="display-1-img-text">Baby's</div>
          </div>
          <div class="display-1-img-container">
            <img
              src={require("../assets/cute-baby.jpg")}
              alt="product"
              class="display-1-img img-responsive"
            />
            <div class="display-1-img-text">Baby's</div>
          </div>
          <div class="display-1-img-container">
            <img
              src={require("../assets/cute-baby.jpg")}
              alt="product"
              class="display-1-img img-responsive"
            />
            <div class="display-1-img-text">Baby's</div>
          </div>
        </div>
        <div class="display-2">
          <div class="display-2-img-container">
            <img
              src={require("../assets/sand-baby.jpg")}
              alt="product"
              class="display-2-img img-responsive"
            />
            <div class="display-2-cta">
              <p>
                Cute <span class="text-highlight">dud</span> for your Cute
                <span class="text-highlight">kid</span>
              </p>
              <button class="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
        <div class="display-3">
          <div class="display-3-sub-container">
            <img
              src={require("../assets/baby-mom.jpg")}
              alt="product"
              class="display-3-img img-responsive"
            />
            <div class="badge-arrivals">NEW ARRIVALS</div>
            <p class="display-3-text">Newborn Collection</p>
            <img
              src={require("../assets/newborn.jpg")}
              alt="product"
              class="display-3-img-inner img-responsive"
            />
          </div>
          <div class="display-3-sub-container">
            <img
              src={require("../assets/baby-queen.jpg")}
              alt="product"
              class="display-3-img img-responsive"
            />
            <div class="badge-arrivals">NEW ARRIVALS</div>
            <p class="display-3-text">Summer Collection</p>
            <img
              src={require("../assets/summer-baby.jpg")}
              alt="product"
              class="display-3-img-inner img-responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
