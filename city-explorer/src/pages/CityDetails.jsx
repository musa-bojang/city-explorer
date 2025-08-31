import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CityDetails() {
  const { name } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
async function fetchWeather() {
  try {
   const getCoordinates = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}`);
   const coordinateData = await getCoordinates.json();
    // console.log(coordinateData.results);

    if(!coordinateData.results || coordinateData.results.length === 0) {
      setError("City not found");
      setWeather(null);
    }
    const { latitude, longitude, country, population, country_code, timezone } = coordinateData.results[0];
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    setWeather({
      city: name,country, population, country_code, timezone,
      temperature: weatherData.current_weather.temperature,
      windspeed: weatherData.current_weather.windspeed,
      winddirection: weatherData.current_weather.winddirection,
      description: `Weather code: ${weatherData.current_weather.weathercode}`
    });
   
    setError(null);
  } catch (err) {

  }finally {
    setLoading(false);
  }
 
 }
 fetchWeather();
}, [name]);
     
  return (
    <div className="below-nav">
      <h2>City Details: {name}</h2>
      <p>Here we’ll display weather, country info, and Wikipedia details for this city.</p>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
      {weather && (<div>
        <h3>Weather in {weather.city}, {weather.country} ({weather.country_code})</h3>
        <p>Population: {weather.population.toLocaleString()}</p> 
        <p>Timezone: {weather.timezone}</p>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Windspeed: {weather.windspeed} km/h</p>
        <p>Winddirection: {weather.winddirection}°</p>
        <p>Description: {weather.description}</p>
      </div>)}

    </div>
  );
}

export default CityDetails;
