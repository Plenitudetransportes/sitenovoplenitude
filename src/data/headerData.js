import logo from "@/images/resources/logo-1.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
  
};

export const onePageNavItems = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "Services",
    href: "#services",
  },
  {
    id: 3,
    name: "About",
    href: "#about",
  },
  {
    id: 4,
    name: "Cases",
    href: "#cases",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "News",
    href: "#news",
  },
];

export const onePageNavItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Cases",
    href: "#cases",
  },
  {
    id: 4,
    name: "Services",
    href: "#services",
  },
  {
    id: 5,
    name: "Testimonial",
    href: "#testimonial",
  },
  {
    id: 6,
    name: "News",
    href: "#news",
  },
];

export const onePageNavItemsThree = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "Services",
    href: "#services",
  },
  {
    id: 3,
    name: "About",
    href: "#about",
  },
  {
    id: 4,
    name: "Cases",
    href: "#cases",
  },
  {
    id: 5,
    name: "Testimonial",
    href: "#testimonial",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 7,
    name: "News",
    href: "#news",
  },
];

export const servicesSubNavItems = [
  { id: 4, name: "Região Centro-Oeste", href: "/consumer-product" },
  { id: 5, name: "Região Sudeste", href: "/audit-marketing" },
  { id: 8, name: "Região Sul", href: "/financial-advice" },
];

export const navItems = [
  home,
  {
    id: 2,
    name: "Cobertura",
    href: "",
    subNavItems: servicesSubNavItems,
  },
  {
    id: 3,
    name: "Sobre nós",
    href: "/about",
    
  },
  {
    id: 4,
    name: "Blog",
    href: "https://blogplenitudetransportes.blogspot.com/",
    
  },
  {
    id: 5,
    name: "Ebooks",
    href: "https://linktr.ee/transportesplenitude",
    
  },
  {
    id: 7,
    name: "Fretes",
    href: "https://www.fretebras.com.br/fretes/grupo-empresa-24086",
  },
];

const socials = [
  {
    id: 1,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-instagram",
    href: "#",
  },
];

const headerData = {
  logo,
  navItems,
  callText: "Fale com nosso time",
  phone: "(64) 3441-3965",
  phoneHref: "6434413965",
  email: "catalao@plenitudetransportes.com.br",
  socials,
};

export default headerData;
