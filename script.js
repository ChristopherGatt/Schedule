console.log(moment().format("dddd, MMMM Do"));

var currentDayEl = document.getElementById("currentDay");
console.log(currentDayEl);
currentDayEl.textContent = moment().format("dddd, MMMM Do");

var currentTime = moment().format("H");

console.log(currentTime);

var rowColourEl = document.getElementById("row");

if ((rowColourEl = currentTime)) {
  rowColourEl = "present";
} else if (rowColourE1 < currentTime) {
  rowColourEl = "past";
} else {
  rowColourEl = "future";
}

var text = localStorage.getItem("text");

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var sample = $(this).siblings(".description").val();
  console.log($(this).parent());
  var time = $(this).parent().attr("id");
  var timeHr = $(this).parent().attr("id");
  localStorage.setItem(time, sample);
  
  $(‘#1 .description').val(localStorage.getItem('hour-9'));


  //if (saveBtn) {
  // localStorage.setItem//("text", text);
  // }
});

/*const rows = document.getElementsByClassName("col-10");
let currentHour = parseInt(moment().format('H'));

Array.from("col-10").forEach(row => {
  let
    "col-10IdString" = "col-10.id",
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;*/
