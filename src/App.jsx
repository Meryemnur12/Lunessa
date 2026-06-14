import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LivaGarden from "./pages/LivaGarden";
import Venues from "./pages/Venues";
import WhitePalace from "./pages/WhitePalace";
import MoonlightHall from "./pages/MoonlightHall";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/venues/liva-garden"
          element={<LivaGarden />}
        />

        <Route path="/venues" element={<Venues />} />

        <Route
          path="/venues/white-palace"
          element={<WhitePalace />}
      />

      <Route
        path="/venues/moonlight-hall"
        element={<MoonlightHall />}
      />

      <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}