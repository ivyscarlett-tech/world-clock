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
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
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