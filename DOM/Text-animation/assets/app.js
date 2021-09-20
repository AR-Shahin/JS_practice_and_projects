const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)
const _ = (el) => document.createElement(el);


let typing = $('#typing');

const words = ['Web Developer','Graphic Designer','Photographer'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type(){

    if(count === words.length){
        count = 0;
    }
    currentText = words[count];
    letter = currentText.slice(0,++index);
    typing.textContent = letter;
    if(letter.length === currentText.length){
        index = 0;
        count ++;
    }

    setTimeout(type,400);
})();
