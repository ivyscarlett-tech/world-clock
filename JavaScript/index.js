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

updateTime();
setInterval(updateTime, 1000);