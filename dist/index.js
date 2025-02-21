"use strict";
function App() {
    const app = document.getElementById("app");
    const headerEl = Header();
    headerEl.addEventListener("click", headerElClickHandler);
    const mainEl = Main();
    app?.append(headerEl, mainEl);
}
function Header() {
    const headerEl = document.createElement("header");
    headerEl.innerHTML = `
    <nav class="nav">
      <h1 class="nav__logo"><a href="#" data-state="home">AMY</a></h1>
      <button class="button nav__menu" data-state="menu-open">
            Menu
            ${svgMenu()}
        </button>
      <ul class="nav__list">
        <li class="nav__list-item">
          <button
            class="button nav__list-item--button"
            data-state="gallery"
            type="button"
          >
            Gallery
          </button>
        </li>

        <li class="nav__list-item">
          <button
            class="button nav__list-item--button"
            data-state="about"
            type="button"
          >
            About
          </button>
        </li>
        <li class="nav__list-item">
          <button
            class="button nav__list-item--button"
            data-state="contact"
            type="button"
          >
            Contact
          </button>
        </li>
      </ul>
      <div class="nav__actions">
        <button class="button nav__actions--button" type="button">
          Buy Tickets
        </button>
        <button class="button nav__actions--button" type="button">
                Membership
        </button>
      </div>
    </nav>
   `;
    return headerEl;
}
function headerElClickHandler(e) {
    e.stopPropagation();
    const sourceEl = e.target;
    const state = sourceEl.dataset.state ?? "";
    if (sourceEl.closest(".nav__menu")) {
        menuHandler(state);
        return;
    }
    if (state !== "") {
        setState(state);
        return;
    }
}
function menuHandler(currentState) {
    const menuBtn = document.querySelector(".nav__menu");
    const navList = document.querySelector(".nav__list");
    const nextState = currentState === "menu-open" ? "menu-close" : "menu-open";
    const menuContent = nextState === "menu-close" ? svgClose() : `Menu ${svgMenu()}`;
    console.log("nextState: ", nextState, "\ncurrentState: ", currentState);
    menuBtn.dataset.state = nextState;
    menuBtn.innerHTML = menuContent;
    if (currentState === "menu-open") {
        navList?.classList.add("nav--visible");
    }
    else if (currentState === "menu-close") {
        navList?.classList.remove("nav--visible");
    }
}
function Main() {
    const mainEl = document.createElement("main");
    mainEl.innerHTML = `
    <div class="main__container" data-show="home" data-active>homepage</div>
    <div class="main__container" data-show="gallery">gallery page</div>
    <div class="main__container" data-show="about">about page</div>
    <div class="main__container" data-show="contact">contact page</div>
    `;
    return mainEl;
}
function setState(state) {
    const currentPage = document.querySelector(".main__container[data-active]");
    currentPage.removeAttribute("data-active");
    const nextPage = document.querySelector(`.main__container[data-show="${state}"]`);
    nextPage.setAttribute("data-active", "");
}
function svgMenu() {
    return `<svg
        class="menu"
        width="25"
        height="28"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.5C0 3.67031 0.670312 3 1.5 3H19.5C20.3297 3 21 3.67031 21 4.5C21 5.32969 20.3297 6 19.5 6H1.5C0.670312 6 0 5.32969 0 4.5ZM0 12C0 11.1703 0.670312 10.5 1.5 10.5H19.5C20.3297 10.5 21 11.1703 21 12C21 12.8297 20.3297 13.5 19.5 13.5H1.5C0.670312 13.5 0 12.8297 0 12ZM21 19.5C21 20.3297 20.3297 21 19.5 21H1.5C0.670312 21 0 20.3297 0 19.5C0 18.6703 0.670312 18 1.5 18H19.5C20.3297 18 21 18.6703 21 19.5Z"
          fill="#222"
        />
      </svg>`;
}
function svgClose() {
    return `<svg
        class="close"
        width="25"
        height="29"
        viewBox="0 0 19 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_236)">
          <path
            d="M18.2424 3.79587C18.7897 3.18493 18.7025 2.27751 18.0438 1.76989C17.385 1.26227 16.4065 1.34313 15.8591 1.95407L9.30048 9.25387L2.74181 1.95407C2.19445 1.34313 1.21598 1.26227 0.557204 1.76989C-0.101569 2.27751 -0.188759 3.18493 0.358604 3.79587L7.28056 11.5L0.358604 19.2041C-0.188759 19.815 -0.101569 20.7224 0.557204 21.23C1.21598 21.7377 2.19445 21.6568 2.74181 21.0459L9.30048 13.7461L15.8591 21.0459C16.4065 21.6568 17.385 21.7377 18.0438 21.23C18.7025 20.7224 18.7897 19.815 18.2424 19.2041L11.3204 11.5L18.2424 3.79587Z"
            fill="#222"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_236">
            <rect width="18.6006" height="23" fill="white" />
          </clipPath>
        </defs>
      </svg>`;
}
App();
