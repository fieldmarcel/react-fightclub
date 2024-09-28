import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/navfile/Navbar.jsx";
// import MobileNavigation from "./components/navfile/MobileNavigation.jsx";
import Coaches from "./pages/Coaches.jsx";
import Gallery from "./pages/Gallery.jsx";
import Join from "./pages/Join.jsx";
import News from "./pages/News.jsx";
import Shop from "./pages/Shop.jsx";
import Faq from "./faq/Faq.jsx";
import Review from "./components/Review.jsx";
import Achieve from "./components/Achieve.jsx";
import Team from "./components/Team.jsx";
import Plans from "./components/Plans.jsx";
import Footer from "./components/Footer.jsx";
// import InfiniteMovingCards from "./Test.jsx"
"use client";

import { ErrorBoundary } from "react-error-boundary";





function App() {

 


  return (
   

    <div className="scrollbox overflow-y-scroll h-[100vh]">
      <BrowserRouter>

        {/* Navbar for desktop */}
        <Navbar />
        {/* Mobile Navigation */}
        {/* <MobileNavigation /> */}

        <Routes>
        <Route path="/" element={
          <>
           <Home />
        <About />
        <Achieve/>
        <Team/>
        {/* <InfiniteMovingCards/> */}
        <Plans/>
   

        </>
        }
       
       />
        
      
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/news" element={<News/>} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
