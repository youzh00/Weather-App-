import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NextDaysWeather from "./Pages/NextDaysWeather";

import Weather from "./Pages/Weather.jsx";
import { DataContextProvider } from "./Context/DataContext";
import { ForecastWeatherProvider } from "./Context/ForecastWeather";
import CityNotExist from "./Components/CityNotExist";

function App() {
  return (
    <Router className="App">
      <DataContextProvider>
        <ForecastWeatherProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/weather/nextdays" element={<NextDaysWeather />} />
            <Route path="/error" element={<CityNotExist />} />
          </Routes>
          <Navbar />
        </ForecastWeatherProvider>
      </DataContextProvider>
    </Router>
  );
}

export default App;
