console.log(moment().format("dddd, MMMM Do"));

var currentDayEl = document.getElementById("currentDay");
console.log(currentDayEl);
currentDayEl.textContent = moment().format("dddd, MMMM Do");
