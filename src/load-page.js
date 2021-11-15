import magnifyingGlass from "./images/magnifying-glass.png";
import sun from "./images/sunny.png";

const state = document.createElement("input");
state.id = "state-input";
state.placeholder = "Enter State";

const container = document.createElement("div");
container.id = "weather-container";

const form = document.createElement("form");
form.action = "#";

container.appendChild(form);

const search = document.createElement("div");
search.id = "search-bar";

const city = document.createElement("input");
city.placeholder = "Enter City...";
city.type = "text";

const submit = document.createElement("button");
submit.type = "submit";

const searchIcon = document.createElement("img");
searchIcon.id = "search-icon";
searchIcon.src = magnifyingGlass;
searchIcon.alt = "search-icon";

search.appendChild(city);
search.appendChild(submit);

submit.appendChild(searchIcon);

form.appendChild(search);

const mainTempDiv = document.createElement("div");
mainTempDiv.id = "main-temperature";

container.appendChild(mainTempDiv);

const mainTemp = document.createElement("h3");
mainTemp.id = "main-temp-value";
mainTemp.textContent = "80॰";

const weatherIcon = document.createElement("div");
weatherIcon.id = "weather-icon";
weatherIcon.alt = "weather icon";

mainTempDiv.appendChild(mainTemp);
mainTempDiv.appendChild(weatherIcon);

const cityLabel = document.createElement("div");
cityLabel.id = "city";
cityLabel.textContent = "Ridgefield";

const countryLabel = document.createElement("div");
countryLabel.id = "country";
countryLabel.textContent = "US";

const minMaxDiv = document.createElement("div");
minMaxDiv.id = "min-max";

container.appendChild(cityLabel);
container.appendChild(countryLabel);
container.appendChild(minMaxDiv);

const high = document.createElement("h4");
high.id = "high";
high.textContent = "H:82॰";

const low = document.createElement("h4");
low.id = "low";
low.textContent = "L:75॰";

minMaxDiv.appendChild(high);
minMaxDiv.appendChild(low);

const loader = document.createElement("div");
loader.id = "load-wheel";

container.appendChild(loader);

const objects = {
  city,
  state,
  submit,
  mainTemp,
  weatherIcon,
  cityLabel,
  countryLabel,
  high,
  low,
  loader,
};

export { container, form, objects };
