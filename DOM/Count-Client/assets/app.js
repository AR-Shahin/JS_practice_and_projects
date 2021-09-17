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
log(first.dataset.count)

window.addEventListener('load',function(){
    let count = 0;
    while(count!= first.dataset.count){
        first.textContent = count;
        count ++
    }
})


const firstCol = ()=>{
    
}
