const log = (el = 'OK') => console.log(el);
const $ = (el) => document.querySelector(el);
const _ = (el) => document.createElement(el);


// Select

const counter = $('#counter')
const decrease = $('#decrease')
const reset = $('#reset')
const increase = $('#increase')


let count = 0;

counter.innerText = count

decrease.addEventListener('click', () => {
    count --;
    counter.innerText = count
})

reset.addEventListener('click', () => {
    count  = 0 ;
    counter.innerText = count
})
increase.addEventListener('click', () => {
    count ++;
    counter.innerText = count
})
