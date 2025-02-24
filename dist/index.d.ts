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
    content: string | HTMLElement;
    attributes: {
        property: string;
        value: string;
    }[];
}): HTMLAnchorElement;
declare function ListItem({ classNames, content, }: {
    classNames: string[];
    content: HTMLElement | string;
}): HTMLLIElement;
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
declare function HomePage(): HTMLElement;
declare function MainBanner(): HTMLElement;
declare function ImageTag({ src, alt, classNames, }: {
    src: string;
    alt: string;
    classNames: string[];
}): HTMLImageElement;
declare function Footer(): HTMLElement;
declare function FooterContainer(): HTMLDivElement;
declare function FooterSections(): HTMLUListElement;
declare function FooterSectionPageNav(): HTMLLIElement;
declare function FooterSectionMap(): HTMLLIElement;
declare function FooterSectionGroupOne(): HTMLLIElement;
declare function FooterSectionGroupTwo(): HTMLLIElement;
declare function FooterSectionGroupItem({ title, navItems, }: {
    title: string;
    navItems: string[];
}): HTMLDivElement;
declare function Heading({ level, classNames, content, }: {
    level: string;
    classNames: string[];
    content: string;
}): HTMLElement;
declare function FooterLegalLinks(): HTMLUListElement;
declare function setPageState(state: string): void;
declare function SvgMenu(): string;
declare function SvgClose(): string;
declare function SvgChevronRight(): string;
declare function SvgChevronTop(): string;
