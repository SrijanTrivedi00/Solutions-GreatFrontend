'use client'
import axios from "axios";
import { useState } from "react";

interface WeatherData {
  name: string;
  temp: string;      
  desc: string;
  humidity: string;
  wind: string;
  latitude: string;
  longitude: string;
}

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {

      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      const data =res?.data;

      if (!data || !data.current_condition) {
        setError("City not found!");
        setLoading(false);
        return;
      }

      const current = data.current_condition[0];
      const nearest_area=data.nearest_area[0];

      setWeather({
        name: city,
        temp: current.temp_C,
        desc: current.weatherDesc[0].value,
        humidity: current.humidity,
        wind: current.windspeedKmph,
        latitude: nearest_area.latitude,
        longitude: nearest_area.longitude,
      });
    } catch (err) {
      setError("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className=" items-center h-screen">
     <div className="h-screen flex justify-center items-center bg-gray-radient-to-b from-gray-800 to-black">
        
    <div className="max-w-md my-auto mx-auto p-5 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4 ">Weather App (Free)</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-3 py-2 rounded bg-gray-800 text-white outline-none"
        />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      {weather && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold capitalize">{weather.name}</h2>
          <p className="text-4xl font-bold mt-2">{weather.temp}°C</p>
          <p className="capitalize mt-1">{weather.desc}</p>

          <div className="flex justify-between mt-4">
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind: {weather.wind} km/h</p>
          </div>
         <p className="text-sm text-shadow-teal-300 mt-1 justify-center">{`Latitude: ${weather?.latitude } Longitude: ${weather?.longitude}`}</p>
        </div>
      )} 
    </div>
    </div>
    </div>
  );
}
