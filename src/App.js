import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./ui-core/templates/pages/HomePage/HomePage";
import MensClothing from "./ui-core/templates/pages/MensClothing/MensClothing";
import WomensClothing from "./ui-core/templates/pages/WomensClothing/WomensClothing";
import NotFound from "./ui-core/templates/pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mens" element={<MensClothing />} />
          <Route path="/womens" element={<WomensClothing />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
