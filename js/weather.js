const API_KEY = "9e89eaff5590e7936f9231463fc62e83";
function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather_info = document.querySelector("#weather p:first-child");
      const temperature = document.querySelector("#weather p:nth-child(2)");
      const city = document.querySelector("#weather p:last-child");

      weather_info.innerText = `${data.weather[0].main}`;
      temperature.innerText = `${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function geoError() {
  alert("Can't get your location");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
