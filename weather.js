const api = {
  key: "b83cf4a5f95815b156c9e6b1641aae16",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery (evt) {
  if (evt.keyCode === 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
  .then((weather) => {
    return weather.json();
  }).then(displayResults);
}

function displayResults (weather) {
  console.log(weather);
  let city = document.querySelector('.city')
  city.innerText = `${weather.name}, ${weather.sys.country}`

  let now = new Date()
  let date = document.querySelector('.location .date')
  date.innerText = dateBuilder(now)
}

function dateBuilder (date) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
}
