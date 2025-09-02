// App.jsx
// src/App.jsx

import HeroSection from "../components/HomePage/HeroSection";
import BrunchMenu from "../components/HomePage/BrunchMenu";
import EveningCocktails from "../components/HomePage/EveningCocktails";
import TestimonialsCarousel from "../components/HomePage/TestimonialsCarousel";
import PrivateEventForm from "../components/HomePage/PrivateEventForm";
import VisitUsSection from "../components/HomePage/VisitUsSection";

import Footer from "../components/HomePage/Footer";


function Home() {
  return (
    <>
    
    <HeroSection />
    <BrunchMenu />
    <EveningCocktails />
    <TestimonialsCarousel />
    <PrivateEventForm />
    <VisitUsSection />
     <Footer />
    </>
  );
}

export default Home;
