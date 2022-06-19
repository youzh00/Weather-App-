import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ForecastWeather = createContext();

const ForecastWeatherProvider = () => {
  const API_KEY = "a1d4aba54e22e4f1825925334566455a";
  const [forecastWeather, setForecastWeather] = useState({});

  const fetchForecastWeather = async (lat, lon) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`
    );
    setForecastWeather(data.daily);
  };
  return (
    <ForecastWeather.Provider
      value={{
        forecastWeather,
        fetchForecastWeather,
      }}
    ></ForecastWeather.Provider>
  );
};

export default ForecastWeather;
