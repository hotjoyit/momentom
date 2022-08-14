const API_KEY = "9e89eaff5590e7936f9231463fc62e83";
function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}도`;
    });
}

function geoError() {
  alert("Can't get your location");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
