import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { auditMarketing } from "@/data/servicesSection2";
import React from "react";

const { title } = auditMarketing;

const AuditMarketing = () => {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page=""
        title={title}
      />
      <ServiceDetails service={auditMarketing} />
      <CtaOne />
    </Layout>
  );
};

export default AuditMarketing;
