const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)


const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday'];

const months = ['January', 'February', 'March', 'April','May','June','July',
'August','September','October','November','December',];

const nodes = _$('h4');

const countDown = () => {
    const currentDate = new Date();
    const futureDate = new Date(2021,08,currentDate.getDate() + 10,currentDate.getHours() + 12,40,00);
    
    const diff = futureDate.getTime() - currentDate.getTime();
    // log(diff)
    // modify 
    /* 1s = 1000ms
       1m = 60 * 1s (60 * 1000) ms
       1hr = 60 * 1m (60 * 60 * 1000) ms
       1d = 24 * 1hr (24 * 60 * 60 * 1000) ms 
    */
   const oneSec = 1000;
   const oneMin = 60 * oneSec;
   const oneHour = 60 * oneMin;
   const oneDay = 24 * oneHour;
    let day = Math.floor(diff / oneDay);
    let hour = Math.floor((diff % oneDay) / oneHour);
    let min = Math.floor((diff % oneHour) / oneMin);
    let sec = Math.floor((diff % oneMin) / oneSec);

    let values = [day,hour,min,sec];

    nodes.forEach((node,index)=>{
        node.innerHTML = format(values[index])
    })
   
    if (diff === 0){
        clearInterval(expiredCountDown)
    }
}

let expiredCountDown = setInterval(countDown,1000);

window.addEventListener('DOMContentLoaded',countDown)
// window.addEventListener('load',countDown)

const format = (val) => val < 10 ? `0${val}` : val;

