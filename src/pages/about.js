import BrandOne from "@/components/BrandSection/BrandOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import QualityWork from "@/components/QualityWork/QualityWork";
import PageHeader from "@/components/Reuseable/PageHeader";
import WorkTogetherTwo from "@/components/WorkTogether/WorkTogetherTwo";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="">
      <Header />
      <PageHeader page="Sobre nós" title="Sobre nós" />
      <WorkTogetherTwo />
      <QualityWork />
      <OurMissionTwo className="our-mission-three" shape={1} />
      <BrandOne />
      <CtaOne />
    </Layout>
  );
};

export default About;
