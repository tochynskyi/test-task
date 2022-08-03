import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Article } from "./components/pages/Article";
import { Home } from "./components/pages/Home";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/test-task">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
