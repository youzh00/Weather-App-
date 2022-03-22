import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import TimeZone from "./Pages/TimeZone";
import Weather from "./Pages/Weather.jsx";
import Header from "./Components/Header";
import { DataContextProvider } from "./Context/dataContext/DataContext";
import CityNotExist from "./Components/CityNotExist";

function App() {
  return (
    <DataContextProvider>
      <Router className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/error" element={<CityNotExist />} />
          <Route path="/time-zone" element={<TimeZone />} />
        </Routes>
        <Navbar />
      </Router>
    </DataContextProvider>
  );
}

export default App;
