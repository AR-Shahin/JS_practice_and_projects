const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)


let video = $('video');
let play = $('#play');
let pause = $('#pause');

play.addEventListener('click',function(){
    video.play()
})

pause.addEventListener('click',function(){
    video.pause()
})
