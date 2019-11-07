console.log("main.js is connected!");

/*
http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=d0e4a60102ad9ca01e16cf36da04385d
Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/

//store zip

const makeCall = function(event) {
  event.preventDefault();
  //grab zipcode
  const zip = document.getElementById("zip-code").value;

  //make api call
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=d0e4a60102ad9ca01e16cf36da04385d`
  )
    .then(res => {
      return res.json();
    })
    .then(res => {
      document.querySelector(".name").innerText += " " + res.name;

      document.querySelector(".temp").innerText +=
        " " + Math.floor(res.main.temp) + "°F";
      document.querySelector(".description").innerText +=
        "expect:" + " " + res.weather[0].description;
      document.querySelector(".min-temp").innerText +=
        "min:" + " " + Math.floor(res.main.temp_min);
      document.querySelector(".max-temp").innerText +=
        "max:" + " " + Math.floor(res.main.temp_max);
    });
};

document.querySelector("button").addEventListener("click", makeCall);
