import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import TimeZone from "./Pages/TimeZone";
import Weather from "./Pages/Weather.jsx";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/time-zone" element={<TimeZone />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
