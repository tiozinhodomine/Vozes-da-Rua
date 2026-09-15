import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import FeaturedOrganizations from "../../components/FeaturedOrganizations/FeaturedOrganizations";
import Footer from "../../components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

    

      <Hero />

      <HowItWorks />

      <FeaturedOrganizations />

      <Footer />
    </>
  );
}