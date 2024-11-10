import React from "react";
import Header from "./compnents/header/header";
import Hero from "./compnents/hero/hero";
import Companies from "./compnents/companies/companies";
import Chair from "./compnents/chair/chair";
import About from "./compnents/about/about";
import Contact from "./compnents/contact/contact";
import Footer from "./compnents/footer/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Chair />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
