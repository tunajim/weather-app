function populateValues(data, objects) {
  _populateMainTemp(data.main.temp, objects.mainTemp);
  console.log(data.weather[0].icon);
  _populateWeatherIcon(data.weather[0].icon, objects.weatherIcon);
  _populateCityName(data.name, objects.cityLabel);
  _populateCountryName(data.sys.country, objects.countryLabel);
  _populateHigh(data.main.temp_max, objects.high);
  _populateLow(data.main.temp_min, objects.low);
}

function _populateMainTemp(temp, object) {
  object.textContent = Math.round(temp) + "॰";
}

async function _populateWeatherIcon(icon, object) {
  const request = await fetch(
    `http://openweathermap.org/img/wn/${icon}@2x.png`,
    { method: "get" },
    { mode: "cors" }
  );
  const data = await request;
  object.style.backgroundImage = `url(${data.url})`;
}

function _populateCityName(name, object) {
  object.textContent = name;
}

function _populateCountryName(name, object) {
  object.textContent = name;
}

function _populateHigh(temp, object) {
  object.textContent = `H:${Math.round(temp)}॰`;
}

function _populateLow(temp, object) {
  object.textContent = `L:${Math.round(temp)}॰`;
}

export { populateValues };
