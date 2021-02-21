import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero.js";
import Download from "./components/Download.js";
import Slider from "./components/Slider.js";
import Search from "./components/Search.js";
import CarouselClass from "./components/Carousel.js";
import Footer from "./components/Footer.js";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <CarouselClass />
    <Download />
    <Slider />
    <Search />
    <Footer />
     </React.StrictMode>,
  document.getElementById("root")
);

