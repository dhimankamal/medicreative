import Head from "next/head";
import HeroSection from "components/HeroSection";
import Services from "components/Services";
import Testimonial from "components/Testimonial";
import ContactUs from "components/ContactUs";
import Layout from "components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Medicreative | Home</title>
        <meta
          name="description"
          content="Medicreatives is a full-service digital agency that specializes in creating and maintaining websites for medical professionals."
        />
        <meta property="og:title" content="Medicreative | Home" />
        <meta
          property="og:description"
          content="Medicreatives is a full-service digital agency that specializes in creating and maintaining websites for medical professionals."
        />
        <meta property="og:image" content="/assets/logo-white.svg" />
        <meta property="og:url" content="https://www.medicreatives.net/"></meta>
      </Head>
      <Layout>
        <main className="pb-16">
          <HeroSection />
          <Services />
          <Testimonial />
          <ContactUs />
        </main>
      </Layout>
    </>
  );
}
