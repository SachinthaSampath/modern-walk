import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './ui-core/pages/HomePage/HomePage';
import MensClothing from './ui-core/pages/MensClothing/MensClothing'
import WomensClothing from "./ui-core/pages/WomensClothing/WomensClothing";
import LoginPage from './ui-core/pages/LoginPage/LoginPage';

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mens" element={<MensClothing />} />
          <Route path="/womens" element={<WomensClothing />} /> 
          <Route path="/login" element={<LoginPage/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
