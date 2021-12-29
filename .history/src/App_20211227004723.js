import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route exact path="/" element={<HeroSection />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
