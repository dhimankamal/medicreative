import Head from "next/head";
import { Inter } from "@next/font/google";
import HeroSection from "components/HeroSection";
import Services from "components/Services";
import Testimonial from "components/Testimonial";
import { useEffect } from "react";
import ContactUs from "components/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Medicreative | Home</title>
      </Head>
      <main className="pb-16">
        <HeroSection />
        <Services />
        <Testimonial />
        <ContactUs />
      </main>
    </>
  );
}
