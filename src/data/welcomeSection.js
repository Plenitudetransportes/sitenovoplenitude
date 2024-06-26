import videoBg from "@/images/backgrounds/welcome-one-video-link-bg.jpg";
import videoBg2 from "@/images/resources/welcome-three-video-bg.jpg";
import image from "@/images/resources/welcome-two-img-1.jpg";
import bg from "@/images/shapes/welcome-one-shape.png";

export const welcomeOne = {
  bg,
  videoBg,
  tagline: "Porque escolher a Plenitude?",
  title: "Ampla cobertura com filiais em 5 estados brasileiros!",
  counter: [
    {
      id: 1,
      text: "Caminhoneiros",
      count: 7300,
    },
    {
      id: 2,
      text: "Caminhões cadastrados",
      count: 30000,
    },
  ],
  videoId: "puRY6zKtTUU",
  features: [
    {
      id: 1,
      title: "Região \n Centro-Oeste",
      href: "/consumer-product",
    },
    {
      id: 2,
      title: "Região \n Sudeste",
      href: "/audit-marketing",
    },
    {
      id: 3,
      title: "Região \n Sul",
      href: "/financial-advice",
    },
  ],
  bottomText:
    "Converse com nosso time, estamos prontos para lhe atender!",
};

export const welcomeTwo = {
  image,
  tagline: "our introduction",
  title: " We’re Best Consultant Agency in NY",
  text1:
    "Suspendisse vel iaculis leo. Curabitur scelerisque mi porta justo fermentum porta.",
  text2:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered dimply free text alteration in some form, by injected humour, or randomised.",
  points: [
    "Nsectetur cing elit.",
    "Suspe ndisse suscipit sagittis leo.",
    "Entum estibulum digni posuere.",
    "Donec tristique ante dictum rhoncus.",
  ],
  iconText: "Duis rhoncus \n orci utm",
};

export const welcomeThree = {
  title: "grow your business",
  tagline: "We’re Changing the Way of Growth",
  text: "Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet dolores sit ipsum velit purus aliq massa fringilla leo. There are many variations of passages.",
  videoId: "Get7rqXYrbQ",
  videoBg: videoBg2,
  videoText: "Watch Video",
  images: ["welcome-three-img-1.jpg", "welcome-three-img-2.jpg"],
  experienceText: "30 Years of experience",
  percent: 77,
  points: [
    {
      id: 1,
      title: "Our Mission",
      text: "Lorem ipsum dolor sit amet not \n is consectetur notted.",
    },
    {
      id: 2,
      title: "Our Story",
      text: "Lorem ipsum dolor sit amet not \n is consectetur notted.",
    },
  ],
};
