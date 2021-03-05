var daysl = document.getElementById('days');    
var hoursl = document.getElementById('hours');
var minsl = document.getElementById('mins');
var secondsl = document.getElementById('seconds');
var

const newYears = "1 Jan 2022";

function countdown() {
    var newYearsDate = new Date(newYears);
    var currentDate = new Date();  

    var totalSeconds = (newYearsDate - currentDate) / 1000;
    var days = Math.floor(totalSeconds / 3600 / 24 ); 
    var hours = Math.floor(totalSeconds / 3600) % 24 ;
    var mins = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    daysl.innerHTML = days;
    hoursl.innerHTML = hours;
    minsl.innerHTML = formatTime(mins);
    secondsl.innerHTML = formatTime(seconds); 
   
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();


setInterval(countdown, 1000);
