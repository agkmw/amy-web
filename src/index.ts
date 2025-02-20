function App() {
  const app = document.getElementById("app");
  app?.appendChild(Header());
  console.log(app);
}

function Header(): HTMLElement {
  const header = document.createElement("header");
  header.innerHTML = `
      <nav class="nav">
        <h1 class="nav__logo"><a href="./index.html">AMY</a></h1>
        <ul class="nav__list">
          <li class="nav__list--item">Gallery</li>
          <li class="nav__list--item">About</li>
          <li class="nav__list--item">Contact</li>
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
  return header;
}


App();
