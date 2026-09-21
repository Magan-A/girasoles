import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./components/Bienvenida";
import Carta from "./components/Carta";
import Girasol from "./components/Girasol";
import Tulipanes from "./components/Tulipanes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/girasol" element={<Girasol />} />
        <Route path="/tulipanes" element={<Tulipanes />} />
      </Routes>
    </BrowserRouter>
  );
}
