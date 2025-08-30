// App.jsx
// src/App.jsx

import HeroSection from "./components/HeroSection";
import BrunchMenu from "./components/BrunchMenu";
import EveningCocktails from "./components/EveningCocktails";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import PrivateEventForm from "./components/PrivateEventForm";
import VisitUsSection from "./components/VisitUsSection";

import Footer from "./components/Footer";


function App() {
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

export default App;
