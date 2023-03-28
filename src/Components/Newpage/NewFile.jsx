import React, { useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const API_KEY = "your_api_key_here";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const fetchWeather = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} K</p>
          <p>Feels like: {weather.main.feels_like} K</p>
        </div>
      )}
    </div>
  );
};

export default Weather;


