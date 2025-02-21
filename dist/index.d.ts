declare function App(): void;
declare function AddClasses(elem: HTMLElement, classNames: string[]): void;
declare function AddAttributes(elem: HTMLElement, attributes: {
    property: string;
    value: string;
}[]): void;
declare function Button({ classNames, content, attributes, }: {
    classNames: string[];
    content: string;
    attributes: {
        property: string;
        value: string;
    }[];
}): HTMLButtonElement;
declare function Link({ classNames, content, attributes, }: {
    classNames: string[];
    content: string;
    attributes: {
        property: string;
        value: string;
    }[];
}): HTMLAnchorElement;
declare function ListItem({ classNames, content, }: {
    classNames: string[];
    content: HTMLElement | string;
}): HTMLElement;
declare function List({ classNames, listItems, }: {
    classNames: string[];
    listItems: HTMLElement[];
}): HTMLUListElement;
declare function Nav(): HTMLElement;
declare function NavLogo(): HTMLHeadElement;
declare function NavList(): HTMLElement;
declare function NavActions(): HTMLDivElement;
declare function Header(): HTMLElement;
declare function headerElClickHandler(e: Event): void;
declare function menuHandler(currentState: string): void;
declare function Main(): HTMLElement;
declare function setPageState(state: string): void;
declare function svgMenu(): string;
declare function svgClose(): string;
declare function svgChevronRight(): string;
