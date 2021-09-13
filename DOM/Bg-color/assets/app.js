const log = (el = 'Ok!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)


let btn = $('button')
let body = $('body');
let hexContent = $('#hex');
const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

let hash = '#';

btn.addEventListener('click',function(){
    let hex = '';
    for (let index = 0; index < 6 ;index++) {
        hex += colors[randomIntFromInterval(0,15)];
    }
    body.style.background = hash + hex;
    hexContent.innerHTML = hash + hex;
})

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// RGB

let rgb = $('#rgb');

rgb.addEventListener('click',function(){
    let a = randomIntFromInterval(1,255);
    let b = randomIntFromInterval(1,255);
    let c = randomIntFromInterval(1,255);
    body.style.background = `rgb(${a},${b},${c})`;
    $('p').innerHTML = `rgb(${a},${b},${c})`;
})
