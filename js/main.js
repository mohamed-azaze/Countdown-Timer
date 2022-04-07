let newYears = "1 Jan 2023";

function conutDown() {
  let newYearsDate = new Date(newYears);
  let current = new Date();

  let totalSeconds = Math.floor((newYearsDate - current) / 1000);

  let days = Math.floor(totalSeconds / 3600 / 24);

  let hours = Math.floor(totalSeconds / 3600) % 24;
  
  let minutes = Math.floor(totalSeconds / 60) % 60;

  let seconds = Math.floor(totalSeconds) % 60;
  
  let daysEl = document.getElementById("days").innerHTML = days;
  let hoursEl = document.getElementById("hours").innerHTML = hours < 10 ? (`0${hours}`): hours;
  let minsEl = document.getElementById("mins").innerHTML = minutes < 10 ? (`0${minutes}`): minutes;
  let secondsEl = document.getElementById("seconds").innerHTML = seconds < 10 ? (`0${seconds}`): seconds;
}

setInterval(conutDown, 1000);