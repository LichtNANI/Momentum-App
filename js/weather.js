const API_KEY = "f03229ea6802048aeceac13b9e791763";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you, No weather for you");
}

// 첫번째 인자는 실행할 함수, 두번째 인자는 에러시 실행할 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
