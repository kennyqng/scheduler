let m = moment();
var setM = moment("9:00", "h");

$("#currentDay").text(moment().format("dddd, MMMM D"));

var date = new Date();
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentSecond = date.getSeconds()

//currentMonth has values 1-12, currentDay has values 1-31, currentHour... etc.
console.log(currentMonth, currentDay, currentHour, currentMinute, currentSecond)


for (var i =0; i < 9; i++){
    var newBlock = $("<div class='row' id='hour-9'>");
    
        var newTimeCol = $("<div class='col-md-3 border-top border-right'>");
        var newTime = $("<p>");
        newTimeCol.append(newTime);
        
        var newInputCol = $("<div class='col-md-8'>");
        var newInput = $("<input type='text'>")
        newInput.attr("id", "input"+i);
        newInputCol.append(newInput);
        
        var newBtnCol = $("<div class='col-md-1'>");
        var newBtn = $("<button class='saveBtn'>Save</button>");
        newBtn.attr("id","btn"+i);
        newBtnCol.append(newBtn);
        
        newBlock.append(newTimeCol);
        newBlock.append(newInputCol);
        newBlock.append(newBtnCol);
    
    $(".time-block").append(newBlock);

    newTime.text(setM.format("ddd, hA"));
    setM.add(1,"h");
    
}

// BUTTON 0
var local0 = localStorage.getItem("local0");
$("#input0").val(local0);
$("#btn0").on("click", function(){
    
    localStorage.setItem("local0", $("#input0").val());
    console.log(local0);
})
// BUTTON 1
var local1 = localStorage.getItem("local1");
$("#input1").val(local1);
$("#btn1").on("click", function(){
    
    localStorage.setItem("local1", $("#input1").val());
    console.log(local1);
})
// BUTTON 2
var local2 = localStorage.getItem("local2");
$("#input2").val(local2);
$("#btn2").on("click", function(){
    
    localStorage.setItem("local2", $("#input2").val());
    console.log(local2);
})
// BUTTON 3
var local3 = localStorage.getItem("local3");
$("#input3").val(local3);
$("#btn3").on("click", function(){
    
    localStorage.setItem("local3", $("#input3").val());
    console.log(local3);
})
// BUTTON 4
var local4 = localStorage.getItem("local4");
$("#input4").val(local4);
$("#btn4").on("click", function(){
    
    localStorage.setItem("local4", $("#input4").val());
    console.log(local4);
})
// BUTTON 5
var local5 = localStorage.getItem("local5");
$("#input5").val(local5);
$("#btn5").on("click", function(){
    
    localStorage.setItem("local5", $("#input5").val());
    console.log(local5);
})
// BUTTON 6
var local6 = localStorage.getItem("local6");
$("#input6").val(local6);
$("#btn6").on("click", function(){
    
    localStorage.setItem("local6", $("#input6").val());
    console.log(local6);
})
// BUTTON 7
var local7 = localStorage.getItem("local7");
$("#input7").val(local7);
$("#btn7").on("click", function(){
    
    localStorage.setItem("local7", $("#input7").val());
    console.log(local7);
})
// BUTTON 8
var local8 = localStorage.getItem("local8");
$("#input8").val(local8);
$("#btn8").on("click", function(){
    
    localStorage.setItem("local8", $("#input8").val());
    console.log(local8);
})