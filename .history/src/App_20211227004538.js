import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
