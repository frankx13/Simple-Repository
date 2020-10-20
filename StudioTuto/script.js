//Load current date and time when the button is clicked
function getDateTime() {
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
    
document.getElementById("p1").innerHTML = dateTime;
}

//Smooth transition between pages
//var inactivePort = document.getElementsByClassName("inactiveport")
//inactivePort.addEventListener('click', function()){}