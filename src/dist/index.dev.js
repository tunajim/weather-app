"use strict";

require("./style.css");

console.log('works');
fetch("http://maps.openweathermap.org/maps/2.0/weather/TA2/0/0/0?appid=").then(function (response) {
  return response.json();
}).then(function (data) {
  return console.log(data);
});