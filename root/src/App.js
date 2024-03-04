// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Compare from "./Pages/Compare";
import Timeline from "./Pages/Timeline";
import CouldNotFind from "./Pages/CouldNotFind";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="*" element={<CouldNotFind />} />
      </Routes>
    </Router>
  );
}
