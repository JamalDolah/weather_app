const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    displayRandomWeather(searchbox.value);
  }
}

function displayRandomWeather(cityName) {
  // Set random weather data
  const randomTemp = Math.floor(Math.random() * 21) + 60; // Random temperature between 60°F and 80°F
  const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Windy", "Stormy"];
  const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  const randomTempMin = randomTemp - Math.floor(Math.random() * 10);
  const randomTempMax = randomTemp + Math.floor(Math.random() * 10);

  // Update UI with random weather data
  let city = document.querySelector('.location .city');
  city.innerText = cityName;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${randomTemp}<span>°F</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = randomWeather;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${randomTempMin}°F / ${randomTempMax}°F`;

  // Clear the forecast container
  let forecastContainer = document.querySelector('.forecast');
  forecastContainer.innerHTML = '';
}

function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
