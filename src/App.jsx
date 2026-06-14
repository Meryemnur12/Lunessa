import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LivaGarden from "./pages/LivaGarden";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/venues/liva-garden"
          element={<LivaGarden />}
        />

      </Routes>
    </BrowserRouter>
  );
}