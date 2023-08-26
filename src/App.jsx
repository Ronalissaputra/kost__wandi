import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Berandapage from "./pages/Berandapage";
import Startpage from "./pages/Startpage";
import Detailpage from "./pages/Detailpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/beranda" element={<Berandapage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
