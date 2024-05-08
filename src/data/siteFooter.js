import logo from "@/images/resources/logo-1.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText: "Descubra a excelência: logística impecável, confiança total.",
  socials: [
  
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "https://www.facebook.com/plenitude.transportes",
    },
    
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/plenitude.transportes/",
    },
  ],
  links: [
    {
      id: 1,
      text: "Sobre nós",
      href: "/about",
    },
    {
      id: 2,
      text: "Apresentação",
      href: "https://drive.google.com/file/d/1PUSdMJleOZ4N4Lcrhbh5C6vg9Hafhmu0/view",
    },
    {
      id: 3,
      text: "Instagram",
      href: "https://www.instagram.com/plenitude.transportes/",
    },
    {
      id: 4,
      text: "Linkedin",
      href: "https://www.linkedin.com/in/plenitude-transportes-010994263/?originalSubdomain=br",
    },
    {
      id: 5,
      text: "WhatsApp",
      href: "https://api.whatsapp.com/send?l=pt&phone=5564999238959",
    },
    {
      id: 6,
      text: "Facebook",
      href: "https://www.facebook.com/plenitude.transportes",
    },
    {
      id: 7,
      text: "Centro-Oeste",
      href: "/consumer-product",
    },
    {
      id: 8,
      text: "Sudeste",
      href: "/audit-marketing",
    },
    {
      id: 9,
      text: "Sul",
      href: "/financial-advice",

    },
  ],
  newsletterText: "Cadastre-se e receba por email novidades e informações!",
  address: "Matriz: BR-050, S/N - KM286 - Posto Infinity - Catalão/GO",
  phone: "(64) 3441-3965",
  phoneHref: "6434413965",
  email: "catalao@plenitudetransportes.com.br",
  author: "Intelly Soluções ®",
  year: new Date().getFullYear(),
};

export default footerData;
