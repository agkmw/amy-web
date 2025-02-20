function App(): void {
  const app = document.getElementById("app");
  app?.append(Header(), Main());
}

function Header(): HTMLElement {
  const headerEl = document.createElement("header");
  headerEl.innerHTML = `
    <nav class="nav">
      <h1 class="nav__logo"><a href="#">AMY</a></h1>
      <ul class="nav__list">
        <li class="nav__list--item">
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
          Become a Member
        </button>
      </div>
    </nav>
   `;

  headerEl.addEventListener("click", (e: Event) => {
    e.stopPropagation();
    const sourceEl = e.target as HTMLElement;
    const state = sourceEl.dataset.state ?? "home";
    setState(state);
  });

  return headerEl;
}

function Main(): HTMLElement {
  const mainEl = document.createElement("main");

  mainEl.innerHTML = `
    <div class="main__container" data-show="home" data-active>homepage</div>
    <div class="main__container" data-show="gallery">gallery page</div>
    <div class="main__container" data-show="about">about page</div>
    <div class="main__container" data-show="contact">contact page</div>
    `;

  return mainEl;
}

function setState(state: string): void {
  const currentPage = document.querySelector(
    ".main__container[data-active]",
  ) as HTMLElement;
  currentPage.removeAttribute("data-active");

  const nextPage = document.querySelector(
    `.main__container[data-show="${state}"]`,
  ) as HTMLElement;
  nextPage.setAttribute("data-active", "");
}

App();
