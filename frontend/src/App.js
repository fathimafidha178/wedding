
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Invitation from "./components/Invitation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Invitation Page */}
        <Route path="/invitation" element={<Invitation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

