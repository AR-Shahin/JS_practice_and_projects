let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)


function digitalClock(){ 
    //select
    let time = $('#time')
    let flag = $('small')
    let currentTime = new Date()
    print(currentTime)
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let tag = 'AM'
    
    //inserting 0 
    sec = sec < 10 ? sec = '0' + sec : sec;
    min = min < 10 ? min = '0' + min : min;
    hour = hour < 10 ? hour = '0' + hour : hour;

    // make 12 format
    hour = hour == 0 ? hour =  12 : hour
    if(hour>12){
        hour = hour - 12
        tag = "PM"
    }
    if(hour == 12){
        tag = "PM"
    }
    
    

    let displayTime = `${hour} : ${min} : ${sec}`
    time.innerHTML = displayTime
    flag.innerHTML = tag

}


digitalClock()
setInterval(digitalClock,1000)





