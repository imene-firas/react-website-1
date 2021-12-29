import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Test from "./components/Pages/Test";
import HeroSection from "./components/HeroSection";

function App() {
  return <HeroSection />;
}

export default App;
