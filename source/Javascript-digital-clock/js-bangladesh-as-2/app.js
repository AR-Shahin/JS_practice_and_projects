function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = 'AM';


    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours-12;
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    let finalTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;


    setInterval(digitalClock, 1000);
}
digitalClock();
