import { useState } from "react";
import translations from "./translations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "am" : "en"
    );
  };

  return (
    <div>
      <Navbar t={t} onLanguageChange={toggleLanguage} />

      <Hero t={t} />

      <Courses t={t} />

      <Benefits t={t} />

      <Testimonial t={t} />

      <CTA t={t} />

      <Contact t={t} />

      <Footer t={t} />
    </div>
  );
}

export default App;