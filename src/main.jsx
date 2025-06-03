import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "../src/index.css"
import Services from "./components/ServiceSection.jsx";
import QuoteSection from "./components/QuoteSection.jsx";
import PublicationsSection from "./components/PublicationSection.jsx";
import TestimonialsSection from "./components/TestimonialSection.jsx";
import Footer from "./components/Footer.jsx";
import AboutSection from "./components/AboutSection.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
     <Services></Services>
     <AboutSection></AboutSection>
    <QuoteSection></QuoteSection>
    <PublicationsSection></PublicationsSection>    
    <Footer></Footer> 
  </React.StrictMode>
);