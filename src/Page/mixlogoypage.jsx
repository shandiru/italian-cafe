// App.jsx
// src/App.jsx

import MixologySection from "../components/mixlogoypage/MixologySection";

import Header from "../components/mixlogoypage/Header";
import SidebarSplitSection from "../components/mixlogoypage/SidebarSplitSection";
import HeroBartenderSection from "../components/mixlogoypage/HeroBartenderSection";
import CocktailSlider from "../components/mixlogoypage/CocktailSlider";
import TestimonialCarousel from "../components/mixlogoypage/TestimonialCarousel";

function Mixology() {
  return (
    <>
    <SidebarSplitSection />
    <MixologySection />
    <HeroBartenderSection />
    <CocktailSlider />
    < TestimonialCarousel />
   
    </>
  );
}

export default Mixology;
