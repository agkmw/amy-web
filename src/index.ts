function App(): void {
  const app = document.getElementById("app");
  const headerEl = Header();
  headerEl.addEventListener("click", headerElClickHandler);

  const mainEl = Main();

  app?.append(headerEl, mainEl);
}

function AddClasses(elem: HTMLElement, classNames: string[]): void {
  for (let i = 0; i < classNames.length; i++) {
    elem.classList.add(classNames[i]);
  }
}

function AddAttributes(
  elem: HTMLElement,
  attributes: { property: string; value: string }[],
): void {
  for (const attribute of attributes) {
    elem.setAttribute(attribute.property, attribute.value);
  }
}

function Button({
  classNames = [],
  content = "",
  attributes = [],
}: {
  classNames: string[];
  content: string;
  attributes: { property: string; value: string }[];
}): HTMLButtonElement {
  const buttonEl = document.createElement("button");
  AddClasses(buttonEl, classNames);
  AddAttributes(buttonEl, attributes);
  buttonEl.innerHTML = content;
  return buttonEl;
}

function Link({
  classNames = [],
  content = "",
  attributes = [],
}: {
  classNames: string[];
  content: string;
  attributes: { property: string; value: string }[];
}): HTMLAnchorElement {
  const anchorEl = document.createElement("a");
  AddClasses(anchorEl, classNames);
  AddAttributes(anchorEl, attributes);
  anchorEl.textContent = content;
  return anchorEl;
}

function ListItem({
  classNames = [],
  content = "",
}: {
  classNames: string[];
  content: HTMLElement | string;
}): HTMLElement {
  const listItemEl = document.createElement("li");
  AddClasses(listItemEl, classNames);
  listItemEl.append(content);
  return listItemEl;
}

function List({
  classNames = [],
  listItems = [document.createElement("li")],
}: {
  classNames: string[];
  listItems: HTMLElement[];
}): HTMLUListElement {
  const list = document.createElement("ul");
  AddClasses(list, classNames);
  for (let i = 0; i < listItems.length; i++) {
    list.appendChild(listItems[i]);
  }
  return list;
}

function Nav(): HTMLElement {
  const navEl = document.createElement("nav");
  AddClasses(navEl, ["nav"]);

  const navLogo = NavLogo();
  const navList = NavList();
  navEl.appendChild(navLogo);
  navEl.appendChild(navList);

  const navMenu = Button({
    content: `Menu ${svgMenu()}`,
    classNames: ["button", "nav__menu"],
    attributes: [
      { property: "data-state", value: "menu-open" },
      { property: "type", value: "button" },
    ],
  });
  navEl.appendChild(navMenu);

  const navActions = NavActions();
  navEl.appendChild(navActions);

  return navEl;
}

function NavLogo(): HTMLHeadElement {
  const headingEl = document.createElement("h2");
  AddClasses(headingEl, ["nav__logo"]);
  const anchorEl = Link({
    content: "AMY",
    attributes: [
      { property: "href", value: "#" },
      { property: "data-state", value: "home" },
    ],
    classNames: [],
  });
  headingEl.appendChild(anchorEl);
  return headingEl;
}

function NavList(): HTMLElement {
  const navItems = ["Gallery", "About", "Contact"];
  const navListItems: HTMLElement[] = [];

  for (let i = 0; i < navItems.length; i++) {
    const currentNavItem = navItems[i];
    const button = Button({
      content: `${currentNavItem} ${svgChevronRight()}`,
      classNames: ["button", "nav__list-item--button"],
      attributes: [
        { property: "data-state", value: currentNavItem.toLowerCase() },
        { property: "type", value: "button" },
      ],
    });

    const listItem = ListItem({
      classNames: ["nav__list-item"],
      content: button,
    });
    navListItems.push(listItem);
  }

  const navList = List({
    classNames: ["nav__list"],
    listItems: navListItems,
  });

  return navList;
}

function NavActions(): HTMLDivElement {
  const divEl = document.createElement("div");
  AddClasses(divEl, ["nav__actions"]);

  const actions = ["Buy Tickets", "Membership"];
  const actionButtons: HTMLButtonElement[] = [];

  for (let i = 0; i < actions.length; i++) {
    const actionButton = Button({
      content: actions[i],
      classNames: ["button", "nav__actions--button"],
      attributes: [{ property: "type", value: "button" }],
    });
    actionButtons.push(actionButton);
  }

  for (let i = 0; i < actionButtons.length; i++) {
    divEl.appendChild(actionButtons[i]);
  }

  return divEl;
}

function Header(): HTMLElement {
  const headerEl = document.createElement("header");
  const navEl = Nav();
  headerEl.appendChild(navEl);
  return headerEl;
}

function headerElClickHandler(e: Event): void {
  e.stopPropagation();
  const sourceEl = e.target as HTMLElement;
  const state = sourceEl.dataset.state ?? "";

  if (sourceEl.closest(".nav__menu")) {
    menuHandler(state);
    return;
  }
  if (state !== "") {
    setPageState(state);
    return;
  }
}

function menuHandler(currentState: string): void {
  const menuBtn = document.querySelector(".nav__menu") as HTMLElement;
  const navList = document.querySelector(".nav__list");
  const nextState = currentState === "menu-open" ? "menu-close" : "menu-open";
  const menuContent =
    nextState === "menu-close" ? svgClose() : `Menu ${svgMenu()}`;

  console.log("nextState: ", nextState, "\ncurrentState: ", currentState);
  menuBtn.dataset.state = nextState;
  menuBtn.innerHTML = menuContent;

  if (currentState === "menu-open") {
    navList?.classList.add("nav--visible");
  } else if (currentState === "menu-close") {
    navList?.classList.remove("nav--visible");
  }
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

function setPageState(state: string): void {
  const currentPage = document.querySelector(
    ".main__container[data-active]",
  ) as HTMLElement;
  currentPage.removeAttribute("data-active");

  const nextPage = document.querySelector(
    `.main__container[data-show="${state}"]`,
  ) as HTMLElement;
  nextPage.setAttribute("data-active", "");

  menuHandler("menu-close");
}

function svgMenu(): string {
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

function svgClose(): string {
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

function svgChevronRight(): string {
  return `
    <svg
      class="chevron-right"
      width="20px"
      height="20px"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M96,212a4,4,0,0,1-2.82861-6.82837L170.34326,128,93.17139,50.82837a4.00009,4.00009,0,0,1,5.65722-5.65674l80,80a4,4,0,0,1,0,5.65674l-80,80A3.98805,3.98805,0,0,1,96,212Z"
      />
    </svg>
    `;
}

App();
