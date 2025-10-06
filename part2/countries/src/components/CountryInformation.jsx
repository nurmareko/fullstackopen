import { useEffect, useState } from 'react'
import weatherService from '../services/weather'

const CountryInformation = ({ country }) => {
  const [weather, setWeather] = useState(null)

  const name = country.name.common
  const latitude = country.latlng[0]
  const longtitude = country.latlng[1]

  useEffect(() => {
    weatherService.getWeather(latitude, longtitude)
      .then(returnedWeather => setWeather(returnedWeather))
      .catch(error => "what happened!!!!")
  }, [latitude, longtitude])

  const capital = country.capital[0]
  const areaCode = country.area
  const languages = country.languages
  const flagUrl = country.flags.png
  const temperature = weather !== null ? weather.main.temp : 0
  const wind = weather !== null ? weather.wind.speed : 0
  const weatherIconLink = weather !== null ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : null

  return (
    <>
      <h1>{name}</h1>
      <p>Capital {capital}</p>
      <p>Area {areaCode}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(languages).map((name, index) =>
          <li key={index}>{name}</li>
        )}
      </ul>
      <img alt='country flag' src={flagUrl} />
      <h2>Weather in {name}</h2>
      <p>Temperature {temperature.toFixed(2)} Celcius</p>
      {weatherIconLink ? (<img alt="weather icon" src={weatherIconLink} />) : null}
      <p>Wind {wind} m/s</p>
    </>
  )
}

export default CountryInformation
