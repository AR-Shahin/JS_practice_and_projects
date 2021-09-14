const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)
const __ = (el) => document.createElement(el)

const reviews = [
{
    id : 1,
    name : 'AR ShaHin',
    job : 'Web Developer',
    star: 5,
    img : './assets/img/test3.jpeg',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nobiLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nobi'
},
{
    id : 2,
    name : 'Omi',
    star: 3,
    job : 'Python Developer',
    img : './assets/img/test4.jpeg',
    review : 'Lorem, cing elit. Sunt, nobiLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nobi'
},
{
    id : 3,
    name : 'Shakil',
    job : 'Graphic Designer',
    star: 4,
    img : './assets/img/test7.jpeg',
    review : 'Lorem, ipsum dolor sit amet consectetu=elit. Sunt, nobiLorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, nobi'
},
{
    id : 3,
    name : 'Rakib',
    job : 'UI Designer',
    star: 5,
    img : './assets/img/test6.jpeg',
    review : 'Valo Hyche!!'
}
];

let counter = 0;
let name = $('#name');
let img = $('#image');
let job = $('#job');
let content = $('.content');
let prevBtn = $('.prev');
let nextBtn = $('.next');
let star = $('#stars');


window.addEventListener('DOMContentLoaded',function(){
    changeDynamicData(counter);  
})

nextBtn.addEventListener('click',function(){
    counter == reviews.length -1 ? counter = 0 : counter ++;
    changeDynamicData(counter);   
})

prevBtn.addEventListener('click',function(){
    counter == 0 ? counter = reviews.length -1 : counter --;
    changeDynamicData(counter);   
})

function changeDynamicData(counter){
    name.textContent = reviews[counter].name
    job.textContent = reviews[counter].job
    content.textContent = reviews[counter].review
    img.src = reviews[counter].img
    generateStar(reviews[counter].star)
}


function generateStar(total){
    stars.innerHTML = ''
   for (let index = 0; index < total; index++) {
    let i = __('i');
    i.className = 'fa fa-star';
    star.appendChild(i)
   }
}


