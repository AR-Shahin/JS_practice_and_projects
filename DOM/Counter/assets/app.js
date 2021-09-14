const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)

let counter = 0;
let count = $('#count');
let decrease = $('#decrease');
let reset = $('#reset');
let increase = $('#increase');

decrease.addEventListener('click',()=>{
    counter --;
    count.textContent = counter;
})

reset.addEventListener('click',()=>{
    counter = 0;
    count.textContent = counter;
})

increase.addEventListener('click',()=>{
    counter ++;
    count.textContent = counter;
})
