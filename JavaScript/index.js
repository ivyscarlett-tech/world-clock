function updateTime() {
let accraElement = document.querySelector("#accra");
let accraDateElement = accraElement.querySelector(".date")
let accraTimeElement = accraElement.querySelector(".time")
let accraTime = moment().tz("Africa/Accra");
accraDateElement.innerHTML = accraTime.format("dddd Do MMMM YYYY")
accraTimeElement.innerHTML = accraTime.format("H:mm:ss [<small>]A[</small>]");

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date")
let londonTimeElement = londonElement.querySelector(".time")
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY")
londonTimeElement.innerHTML = londonTime.format("H:mm:ss [<small>]A[</small>]");

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
     let cityName;
  const selectedCityText = event.target.options[event.target.selectedIndex].text;

  const targetTimezones = [
    "America/Chicago",
    "America/New_York",
    "Europe/Istanbul",
    "America/Jamaica",
    "Asia/Kolkata",
  ];

  if (targetTimezones.includes(cityTimeZone)) {
    // If it's a special case, use the text from the dropdown (e.g., "Minneapolis")
    cityName = selectedCityText;
  } else {
    // For all other cities, use your original logic to get the name from the timezone
    cityName = cityTimeZone.split("/")[1].replace("_", " ");
  }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/">Homepage</a>
    `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);