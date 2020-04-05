

// console.log(moment());


let m = moment();

$("#currentDay").text(moment().format("dddd, MMMM D"));
var timeSlot = $(".col-md-3").text(moment("09:00", "H"));

console.log(timeSlot);

