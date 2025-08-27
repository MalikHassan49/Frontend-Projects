const inputBox = document.querySelector('.input-box')
const searchBtn = document.getElementById('searchBtn')
const weather_img = document.querySelector('.weather-image')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity_percentage = document.getElementById('humidity-percentage')
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body')

const checkWeather = async (city)=> {
   const api_key = "0a2045602328bc4986ce95d1c06c7aae"
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

   const weather_data = await fetch(`${url}`).then(response => response.json());
   console.log(weather_data);

   if (weather_data.cod === '404') {
    location_not_found.style.display = "flex"
    weather_body.style.display = "none"
    return
   }
    location_not_found.style.display = "none"
    weather_body.style.display = "flex"
    temperature.innerHTML = `
   ${weather_data.main.temp}
   <sup>°C</sup>
   `
   description.innerHTML = `
  ${weather_data.weather[0].description}
  `
   humidity_percentage.innerHTML = `
   ${weather_data.main.humidity}%
   `
  wind_speed.innerHTML = `
  ${weather_data.wind.speed}Km/H
  `
  switch (weather_data.weather[0].main) {
    case 'Clouds':
      weather_img.src = 'assets/cloud.png'
      break;
    case 'Clear':
      weather_img.src = 'assets/clear.png'
      break;
    case 'Rain':
      weather_img.src = 'assets/rain.png'
      break;
    case 'Mist':
      weather_img.src = 'assets/mist.png'
      break;
    case 'Snow':
      weather_img.src = 'assets/snow.png'
      break;
  
    default:
      break;
  }
   
}

searchBtn.addEventListener('click', ()=> {
  checkWeather(inputBox.value)
})