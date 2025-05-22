import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Login/>} path="/login"></Route>
      </Routes>
    </div>
  );
};

export default App;
