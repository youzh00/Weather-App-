import React, { createContext, useState } from "react";

export const DataContext = createContext();

const API =
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f5d4275eb44e1c4e0f2685d54978fc6c";

const key = "d724cda68c856a754decbec531b904c5";

export function DataContextProvider({ children }) {
  const key2 = "cc2ee984298825bbf478a71f73670aba";
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWethaer] = useState();

  const getWeather = async (city) => {
    const data = await fetch(
      `http://api.weatherstack.com/current?access_key=${key2}&query=${city}`
    );
    const reponse = await data.json();
    setData(reponse);
    setCurrentWethaer(data.current);
  };
  return (
    <DataContext.Provider
      value={{
        getWeather,
        data,
        currentWeather,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
