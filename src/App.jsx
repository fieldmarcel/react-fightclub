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
import Error from "./Error";
// import { ErrorBoundary } from "react-error-boundary";

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
        {/* <InfiniteMovingCardsDemo/> */}
        <Plans/> 
        </>
        }      
       />          <Route path="*" element={<Error />} />

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

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];