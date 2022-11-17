import React, { lazy } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import Home from "./pages/Home";

// const Home = lazy(() => import("./pages/Home"));
// const AddBlog = lazy(() => import("./pages/AddBlog"));

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </>
  );
};

export default App;
