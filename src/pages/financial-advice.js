import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { financialAdvice } from "@/data/servicesSection3";
import React from "react";

const { title } = financialAdvice;

const FinancialAdvice = () => {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page=""
        title={title}
      />
      <ServiceDetails service={financialAdvice} />
      <CtaOne />
    </Layout>
  );
};

export default FinancialAdvice;
