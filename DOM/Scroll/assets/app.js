const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)


let nav = $('nav');
let scroll = $('#scroll');
// nav.classList.add('fixed')
window.addEventListener('scroll',function(){
    let count = this.pageYOffset;
    if(count > 100){
        nav.classList.add('fixed')
        scroll.style.display = 'block'
    }else{
        nav.classList.remove('fixed')
        scroll.style.display = 'none'
    }
})

scroll.addEventListener('click',function(){
    window.scrollTo({
        top : 0
})
})
