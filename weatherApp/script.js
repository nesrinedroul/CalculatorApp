const apiKey = "d316f681e27bf8eca8168dde988a44ad"; 
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
async function getWeather() {
  const city = cityInput.value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found!");
    }
    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}
function displayWeather(data) {
  cityName.textContent = `City: ${data.name}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Weather: ${data.weather[0].description}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherResult.classList.remove("hidden");
}
getWeatherBtn.addEventListener("click", getWeather);
