import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import TimeZone from "./Pages/TimeZone";
import Weather from "./Pages/Weather.jsx";
import Header from "./Components/Header";

function App() {
  return (
    <Router className="App">
      <Header />
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
