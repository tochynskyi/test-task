import React from "react";
import { Route, Routes } from "react-router-dom";
import { Article } from "./components/pages/Article";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
}

export default App;
