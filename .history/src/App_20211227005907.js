import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Test from "./components/Pages/Test";

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
