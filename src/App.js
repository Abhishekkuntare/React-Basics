import React from "react";
import "./App.css";
import { BrowserRouter as Abhishek, Route, Routes } from "react-router-dom";
import TernaryOprator from "./TernaryOprator";
import Lists from "./Lists";
import { Planents } from "./Planents";
import AbhiUseState from "./AbhiUseState";

const App = () => {
  return (
    <Abhishek>
      <Routes>
        <Route path="/ternaryoprator" element={<TernaryOprator />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/planets" element={<Planents />} />
        <Route path="/usestates" element={<AbhiUseState />} />
      </Routes>
    </Abhishek>
  );
};

export default App;
