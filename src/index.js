import "./style.css";
import { container, form, objects } from "./load-page";
import { getWeatherData } from "./weather-data";
import { populateValues } from "./populate";



const body = document.querySelector("body");
body.appendChild(container);

window.onload = fetchExample;

async function fetchExample(e) {
  const data = await getWeatherData("ridgefield");
  console.log(data);
  populateValues(data, objects);
}



form.onsubmit = submitForm;

async function submitForm(e) {
  e.preventDefault();
  console.log(objects.city.value);
  const data = await getWeatherData(objects.city.value, objects.state.value);
  console.log(data);
  populateValues(data, objects);
}
