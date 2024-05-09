import image1 from "@/images/services/service-details-img-1.jpg";
import image3 from "@/images/services/service-details-img-2.jpg";
import image6 from "@/images/services/service-details-img-3.jpg";
import image4 from "@/images/services/service-details-img-4.jpg";
import image2 from "@/images/services/service-details-img-5.jpg";
import image5 from "@/images/services/service-details-img-6.jpg";
import { faqs } from "./fAQsPage";
import { servicesSubNavItems } from "./headerData";

export const servicesOne = {
  tagline: "Our Services",
  title: "Services We Offer",
  services: [
    {
      id: 1,
      title: "Consumer \n Product",
      image: "services-1-1.jpg",
      icon: "icon-creative",
      href: "/consumer-product",
      text: "Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.",
    },
    {
      id: 2,
      title: "Banking \n Advising",
      image: "services-1-2.jpg",
      icon: "icon-business",
      href: "/banking-advising",
      text: "Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.",
    },
    {
      id: 3,
      title: "Marketing \n Rules",
      image: "services-1-3.jpg",
      icon: "icon-global",
      href: "/marketing-rules",
      text: "Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.",
    },
    {
      id: 4,
      title: "Business \n Growth",
      image: "services-1-4.jpg",
      icon: "icon-mobile-analytics",
      href: "/business-growth",
      text: "Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.",
    },
    {
      id: 5,
      title: "Audit \n Marketing",
      image: "services-1-5.jpg",
      icon: "icon-analysis",
      href: "audit-marketing",
      text: "Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.",
    },
    {
      id: 6,
      title: "Financial \n Advice",
      image: "services-1-6.jpg",
      icon: "icon-creative-1",
      href: "/financial-advice",
      text: "Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.",
    },
  ],
};

export const servicesTwo = {
  title: "Our Services",
  tagline: "Services We Offer",
  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
  services: [
    {
      id: 1,
      icon: "icon-creative",
      title: "Consumer \n Product",
      href: "/consumer-product",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 2,
      icon: "icon-analysis",
      title: "Audit \n Marketing",
      href: "/audit-marketing",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 3,
      icon: "icon-business",
      title: "Banking \n Advising",
      href: "/banking-advising",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 4,
      icon: "icon-global",
      title: "Marketing \n Rules",
      href: "/marketing-rules",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 5,
      icon: "icon-verification",
      title: "business growth",
      href: "/consumer-product",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 6,
      icon: "icon-bank",
      title: "wealth Management",
      href: "/audit-marketing",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 7,
      icon: "icon-report1",
      title: "financial advice",
      href: "/banking-advising",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 8,
      icon: "icon-travel",
      title: "Travel & Hospitality",
      href: "/marketing-rules",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
  ],
};

export const serviceDetailsSidebar = {
  navItems: servicesSubNavItems.slice(3),
  title: "Fale agora \n com nossos \n especialistas!",
  phoneIcon: "icon-phone-call",
  text: "Estamos à sua disposição!",
  phone: "(64) 3441-3965",
  phoneHref: "6434413965",
};

const commonServiceDerails = {
  icon: "icon-global",
  text: "A Plenitude Transportes tem uma forte presença na região Sul do Brasil, com nossos escritórios localizados nas cidades de Paranaguá-PR, Maringá-PR e Araquari-SC. Paranaguá é conhecida por abrigar um dos maiores portos marítimos internacionais do país, o que nos permite oferecer suporte especializado para a exportação de produtos. Estamos comprometidos em atender com excelência toda a região Sul, proporcionando soluções logísticas confiáveis e eficientes para nossos clientes. Conte conosco para impulsionar suas operações de transporte e exportação nesta importante região do país.",
  
  text3:
    "Agora, presente também no estado de Santa Catarina, com uma filial na cidade de São Francisco do Sul/Araquari, sediada no endereço: Rod. BR 280, nº 9371 / Sala 26 (Volta Redonda). Com nossos escritórios na região Sul do país, a Plenitude Transportes não só fortalece sua presença estratégica, mas também proporciona maior conforto aos caminhoneiros de nossa frota. Isso nos permite garantir viagens eficientes do Sul para o Centro-Oeste e vice-versa, atendendo às demandas de clientes em todas as regiões do Brasil. Conte conosco para uma parceria sólida e confiável, facilitando o transporte de cargas e impulsionando o sucesso de sua operação logística.",
  contents: [
    "Av. Ayrton Senna da Silva, S/N, São João - Paranaguá/PR",
    "Endereço: PR 317, KM 2, S/N - Maringá/PR",
  ],
  howHelps: [
    
    
  ],
  
};

export const consumerProduct = {
  image: image1,
  title: "Região Centro-Oeste",
  ...commonServiceDerails,
};

export const auditMarketing = {
  image: image2,
  title: "Região Sudeste",
  ...commonServiceDerails,
};

export const financialAdvice = {
  image: image5,
  title: "Região Sul",
  ...commonServiceDerails,
};
