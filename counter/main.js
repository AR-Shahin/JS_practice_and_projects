// global function 

const $ = (el) => document.querySelector(el)

// online exam timer
let timer;
let hour   = parseInt(2);
let minute = parseInt(2);
let second = parseInt(10);
 
const startTimer = ()=> {
    showTime();
    // set timer interval every one second
    timer = setInterval('downTimer()', 1000);
}
 
const showTime = ()=> {
    $('#hour').innerHTML   = hour < 10 ? `0${hour}` : hour;
    $('#minute').innerText = minute < 10 ? `0${minute}` : minute;
    $('#second').innerText = second < 10 ? `0${second}` : second;
}
 
const downTimer = ()=> {
    if (second > 0 && second < 60) {
        second -= 1;
    } else if (minute > 0) {
        minute -= 1;
        if(minute < 1 && hour > 0) {
            hour -= 1;
            minute = 60;
            second = 59;
        } else {
            second = 59;
        }
    } else if (hour > 0) {
        hour -= 1;
        minute = 59;
        second = 59;
    } else {
        hour = minute = second = 0;
        // stop timer
        clearInterval(timer);
        alert('Time Over!');
    }
    showTime();
}
 
globalThis.onload = startTimer();
