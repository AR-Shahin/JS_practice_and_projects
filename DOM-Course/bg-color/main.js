const log = (el = 'OK') => console.log(el);
const $ = (el) => document.querySelector(el);
const _ = (el) => document.createElement(el);

// Select

let btn = $('button');
let hexText = $('#hex');
let body = $('body');

let colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

let hash = '#';
let rgb = $('#rgb')
function generateRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

btn.addEventListener('click',function(){
    // let hex = '';
    // for(let i = 0;i<6;i++){
    //     hex += colors[generateRandomNumber(0,15)];
    // }

    // body.style.background = `${hash}${hex}`
    // hexText.innerText = `${hash}${hex}`
    let a = generateRandomNumber(1,255);
    let b = generateRandomNumber(1,255);
    let c = generateRandomNumber(1,255);
    body.style.background = `rgb(${a},${b},${c})`
    rgb.innerText = `rgb(${a},${b},${c})`
})
