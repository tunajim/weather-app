import { key, fahrenheit, celsius } from "./API-info";
import { container, objects } from "./load-page";

async function getWeatherData(city, state) {
  _toggleLoader(objects.loader);
  try {
    const request = await _fetchRequest(city, state);
    const data = await request.json();
    _logWeather(data);
    const result = await _checkForError(data);
    _toggleLoader(objects.loader);
    return result;
  } catch (err) {
    console.log(err);
    _toggleLoader(objects.loader);
  }
}

function _toggleLoader(object) {
  object.classList.toggle("active");
}

function _fetchRequest(city, state) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=${fahrenheit}&appid=${key}`,
    { method: "get" },
    { mode: "cors" }
  );
}

function _logWeather(data) {
  console.log(data);
  console.log(data.weather);
}

function _checkForError(data) {
  console.log(data);
  if (data.cod !== 200) {
    throw new Error("No data");
  } else {
    console.log(data);
    return data;
  }
}

export { getWeatherData };
