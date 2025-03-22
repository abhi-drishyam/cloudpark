import React from "react";
import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Oufleet from "./components/Ourfleet";
import WarehousingSolutions from "./components/WarehousingSolutions";
import TruckandTrailer from "./components/TruckandTrailer";
import RequestFormMap from "./components/RequestFormMap";
import Footer from "./components/Footer";
import SubscribeSection from "./components/SubscribeSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      
      {/* Assign IDs to each section */}
      <div id="hero"><Hero /></div>
      <div id="features"><Features /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="fleet"><Oufleet /></div>
      <div id="warehousing"><WarehousingSolutions /></div>
      <div id="truckandtrailer"><TruckandTrailer /></div>
      <div id="request"><RequestFormMap /></div>
      <div id="subscribe"><SubscribeSection /></div>
      <div id="contact"><Footer /></div>
    </>
  );
}

export default App;
