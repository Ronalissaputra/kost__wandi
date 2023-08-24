import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Berandapage from "./pages/Berandapage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Berandapage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
