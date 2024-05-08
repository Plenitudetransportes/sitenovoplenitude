
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
      id: 7,
      icon: "icon-report1",
      title: "financial advice",
      href: "/banking-advising",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
  ],
};

export const serviceDetailsSidebar = {
  navItems: servicesSubNavItems.slice(3),
  title: "Fale agora \n com nossos \n especialistas!",
  phoneIcon: "icon-phone-call",
  text: "Matriz - Catalão",
  phone: "(64) 3441-3965",
  phoneHref: "6434413965",
};

const commonServiceDerails = {
  icon: "icon-global",
  text: "Com a matriz estrategicamente localizada no coração do Brasil, a Plenitude Transportes atende de forma eficiente e abrangente todas as regiões do país. Nossos escritórios de atendimento em Catalão-GO e Rio Verde-GO reforçam nosso compromisso em oferecer serviços logísticos de qualidade, estando sempre próximos e acessíveis aos nossos clientes na região Centro-Oeste. Conte conosco para uma logística confiável e ágil, onde quer que você esteja.",
  
  text3:
    "Na Plenitude, contamos com uma frota diversificada e uma equipe experiente dedicada a oferecer as melhores negociações em fretes. Nosso foco em especialização inclui um destaque para o escoamento e transporte agrícola. Combinando expertise e recursos, garantimos resultados excepcionais para nossos clientes, proporcionando soluções logísticas eficientes e confiáveis que atendem às necessidades específicas do setor agrícola. Confie na Plenitude para impulsionar o sucesso de sua operação.",
    contents: [
    "BR-050, S/N - KM286 - Posto Infinity - Catalão/GO",
    "BR-060 KM388, S/N - Posto Campestre - Rio Verde/GO",
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
