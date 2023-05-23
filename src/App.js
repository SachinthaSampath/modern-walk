import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import MensClothing from "./pages/MensClothing/MensClothing";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

import './App.css';

function App() {
  return (
    <div className="main-container"> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/mens" element={<MensClothing/>} />
          <Route path="/womens" element={<WomensClothing/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
