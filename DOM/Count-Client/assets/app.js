const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)
const _ = (el) => document.createElement(el);


let targets = _$('h4')
let [first,second,third] = targets
let count = 1;
let count2 = 1;
let count3 = 1;
// window.addEventListener('load',function(){
 
//     while(count!= first.dataset.count){
//         first.textContent = count;
//         count ++
//     }
// })


const firstCol = ()=>{
    first.textContent = ++ count;
    if(count == first.dataset.count){
        clearInterval(colOne);
    }
}
const secondCol = ()=>{
    second.textContent = ++ count2;
    if(count2 == second.dataset.count){
        clearInterval(colTwo);
    }
}
const thirdCol = ()=>{
    third.textContent = ++ count3;
    if(count3 == third.dataset.count){
        clearInterval(colThree);
    }
}
let colOne= setInterval(firstCol,80);
let colTwo= setInterval(secondCol,80);
let colThree= setInterval(thirdCol,80);


let counterSection = $('#counter');
let x = counterSection.getBoundingClientRect().top;

// log(x.bottom)
// log(x.top)
window.addEventListener('scroll',function(){
     log(this.innerHeight)
    if(x === window.innerHeight){
        this.alert(5)
    }
})
