const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)


let toggle = $('#toggle');
let ul = $('ul');
let close = $('#close')

close.style.display = 'none';
toggle.addEventListener('click',function(){
   ul.style.display = 'block';
    this.style.display = 'none';
    close.style.display = 'block';
    
})
close.addEventListener('click',function(){
    ul.style.display = 'none';
    toggle.style.display = 'block';
    this.style.display = 'none';
})


// sidebar 

let toggleSideBar = $('#toggleSideBar');
let sidebar = $('#sidebar');
let toggleSideBarClose = $('#toggleSideBarClose');

toggleSideBarClose.style.transform = `scale(0)`;

toggleSideBar.addEventListener('click',()=>{
    toggleSideBar.style.transform = `scale(0)`;
    toggleSideBarClose.style.transform = `scale(1)`;
    sidebar.style.left = 0
})

toggleSideBarClose.addEventListener('click',()=>{
    toggleSideBar.style.transform = `scale(1)`;
    toggleSideBarClose.style.transform = `scale(0)`;
    sidebar.style.left = `-100%`
})
