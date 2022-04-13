import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

const API =
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f5d4275eb44e1c4e0f2685d54978fc6c";

const key1 = "cc2ee984298825bbf478a71f73670aba";
const Key2 = "f5d4275eb44e1c4e0f2685d54978fc6c";

export function DataContextProvider({ children }) {
  const navigate = useNavigate();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isDay, setIsDay] = useState("yes");
  const [location, setLocation] = useState({
    country: " ",
    city: "",
    localTime: "",
  });
  const [sys, setSys] = useState("");
  const [weatherData, setWeatherData] = useState({
    sunset: 0,
    sunrise: 0,
    icon: " ",
    description: "",
    temp: 0,
    windSpeed: 0,
    humidity: 0,
    success: true,
  });

  const getWeather1 = async (city) => {
    const data = await fetch(
      `http://api.weatherstack.com/current?access_key=${key1}&query=${city}`
    );
    const reponse = await data.json();
    setWeatherData((prv) => {
      return {
        ...prv,
        success: reponse.success,
      };
    });
    if (reponse.success === false) {
      navigate("/error");
    } else {
      setLocation((prv) => {
        return {
          ...prv,
          country: reponse.location.country,
          city: reponse.location.name,
          localTime: reponse.location.localtime,
        };
      });
      setIsDay(reponse.current.is_day);
    }
  };

  const getWeather2 = async (city) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key2}`
    );
    const reponse = await data.json();
    setData2(reponse);
    setSys(reponse.sys);
    if (reponse.cod === "404") {
      console.log("getWeather 2 not found");
    } else {
      setWeatherData((prv) => {
        return {
          ...prv,
          sunset: reponse.sys.sunset,
          sunrise: reponse.sys.sunrise,
          icon: reponse.weather[0].icon,
          description: reponse.weather[0].description,
          temp: reponse.main.temp - 273.15,
          windSpeed: reponse.wind.speed * 3.6,
          humidity: reponse.main.humidity,
        };
      });
    }
  };

  return (
    <DataContext.Provider
      value={{
        getWeather1,
        getWeather2,
        data1,
        data2,
        isDay,
        location,
        sys,
        weatherData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
