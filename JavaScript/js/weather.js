const API_KEY = "c9f7128ddec147c1603f99c01e4cf873";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("You live in", lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `Today is weather :  ${data.weather[0].main} / temperature : ${data.main.temp} / `;
      city.innerText = `city is name : ${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
