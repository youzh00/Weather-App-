import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForecastWeather = createContext();

export const ForecastWeatherProvider = ({ children }) => {
  const API_KEY = "a1d4aba54e22e4f1825925334566455a";
  const [forecastWeatherHourly, setForecastWeatherHourly] = useState({});
  const [forecastWeatherDaily, setForecastWeatherDaily] = useState({});
  console.log(forecastWeatherHourly);

  const fetchForecastWeather = async (lat, lon) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`
    );
    setForecastWeatherHourly(data.hourly);
    setForecastWeatherDaily(data.dailly);
  };
  return (
    <ForecastWeather.Provider
      value={{
        forecastWeatherHourly,
        forecastWeatherDaily,
        fetchForecastWeather,
      }}
    >
      {children}
    </ForecastWeather.Provider>
  );
};

export default ForecastWeather;
