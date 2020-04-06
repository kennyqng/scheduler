let m = moment();
// test color past, present, future
// m = moment("13:30", "h");

// variable to set time for each slot
var setM = moment("9:00", "h");

$("#currentDay").text(moment().format("dddd, MMMM D"));
// creating <div>, forms, and buttons for time slots
for (var i =0; i < 9; i++){
    var newBlock = $("<div class='row' id='hour'>");
        // time column
        var newTimeCol = $("<div class='col-md-3 border-top border-right'>");
        var newTime = $("<p>");
        newTimeCol.append(newTime);
        // form column
        var newInputCol = $("<div class='col-md-8'>");
        var newInput = $("<input type='text'>")
        newInput.attr("id", "input"+i);
        newInputCol.append(newInput);
        // button column
        var newBtnCol = $("<div class='col-md-1'>");
        var newBtn = $("<button class='saveBtn'>Save</button>");
        newBtn.attr("id","btn"+i);
        newBtnCol.append(newBtn);
        // append newly built columns to row
        newBlock.append(newTimeCol,newInputCol,newBtnCol);
    // append new row to main time-block div
    $(".time-block").append(newBlock);
    // assign time for each slot
    newTime.text(setM.format("ddd, hA"));
    // color code past, present, and future slots
    if(setM.isBefore(m)){
        newInput.attr("class", "past");
    }
    else if(setM.isAfter(m)){
        newInput.attr("class", "future");
    }
    else{
        newInput.attr("class", "present");
    }
    // increment time by an hour for next slot
    setM.add(1,"h");
}

// BUTTON 0
var local0 = localStorage.getItem("local0");
$("#input0").val(local0);
$("#btn0").on("click", function(){
    localStorage.setItem("local0", $("#input0").val());
})
// BUTTON 1
var local1 = localStorage.getItem("local1");
$("#input1").val(local1);
$("#btn1").on("click", function(){
    localStorage.setItem("local1", $("#input1").val());
})
// BUTTON 2
var local2 = localStorage.getItem("local2");
$("#input2").val(local2);
$("#btn2").on("click", function(){
    localStorage.setItem("local2", $("#input2").val());
})
// BUTTON 3
var local3 = localStorage.getItem("local3");
$("#input3").val(local3);
$("#btn3").on("click", function(){   
    localStorage.setItem("local3", $("#input3").val());
})
// BUTTON 4
var local4 = localStorage.getItem("local4");
$("#input4").val(local4);
$("#btn4").on("click", function(){  
    localStorage.setItem("local4", $("#input4").val());
})
// BUTTON 5
var local5 = localStorage.getItem("local5");
$("#input5").val(local5);
$("#btn5").on("click", function(){   
    localStorage.setItem("local5", $("#input5").val());
})
// BUTTON 6
var local6 = localStorage.getItem("local6");
$("#input6").val(local6);
$("#btn6").on("click", function(){ 
    localStorage.setItem("local6", $("#input6").val());
})
// BUTTON 7
var local7 = localStorage.getItem("local7");
$("#input7").val(local7);
$("#btn7").on("click", function(){  
    localStorage.setItem("local7", $("#input7").val());
})
// BUTTON 8
var local8 = localStorage.getItem("local8");
$("#input8").val(local8);
$("#btn8").on("click", function(){ 
    localStorage.setItem("local8", $("#input8").val());
})