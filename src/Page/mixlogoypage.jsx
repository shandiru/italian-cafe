// App.jsx
// src/App.jsx

import MixologySection from "../components/mixlogoypage/MixologySection";

import Header from "../components/mixlogoypage/Header";
import SidebarSplitSection from "../components/mixlogoypage/SidebarSplitSection";
import HeroBartenderSection from "../components/mixlogoypage/HeroBartenderSection";
import CocktailSlider from "../components/mixlogoypage/CocktailSlider";
import TestimonialCarousel from "../components/mixlogoypage/TestimonialCarousel";
import MixologyDetails from "../components/mixlogoypage/MixologyDetails";
import CocktailHighlight from "../components/mixlogoypage/CocktailHighlight";
import BarCocktailSection from "../components/mixlogoypage/BarCocktailSection";
import ContactSection from "../components/mixlogoypage/ContactSection";
import MapContactSection from "../components/mixlogoypage/MapContactSection";
import ContactFooterSection from "../components/mixlogoypage/ContactFooterSection";


function Mixology() {
  return (
    <>
    <SidebarSplitSection />
    <MixologySection />
    <HeroBartenderSection />
    <CocktailSlider />
    < TestimonialCarousel />
    <MixologyDetails />
    <CocktailHighlight />
    <BarCocktailSection />
    <ContactSection />
    <MapContactSection />
    <ContactFooterSection />
   
    </>
  );
}

export default Mixology;
