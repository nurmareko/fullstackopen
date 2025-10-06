import axios from 'axios'
const api_key = import.meta.env.VITE_SOME_KEY


const getWeather = (latitude, longtitude) => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${api_key}&units=metric`)
  return request.then(response => response.data)
}

export default { getWeather }
