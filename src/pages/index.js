import BenefitsOne from "@/components/Benefits/BenefitsOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import FreeConsultation from "@/components/FreeConsultation/FreeConsultation";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsSection/NewsOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import WelcomeOne from "@/components/WelcomeSection/WelcomeOne";
import WorkTogether from "@/components/WorkTogether/WorkTogether";
import { mainSlider } from "@/data/mainSlider";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="">
      <Header />
      <MainSlider sliders={mainSlider} showShape />
      <WelcomeOne />
      <WorkTogether />
      <BenefitsOne />
      <FreeConsultation />
      <TestimonialOne />
      <NewsOne showShape />
      <CtaOne />
    </Layout>
  );
};

export default Home;
