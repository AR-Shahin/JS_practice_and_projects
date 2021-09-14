const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)


const projects = [
    {
        id:1,
        name : 'Shahin',
        img : './assets/img/test3.jpeg'
    },
    {
        id:2,
        name : 'Asik',
        img : './assets/img/test4.jpeg'
    }
    ,
    {
        id:3,
        name : 'Tanzim',
        img : './assets/img/test3.jpeg'
    }
    ,
    {
        id:1,
        name : 'Shahin',
        img : './assets/img/test7.jpeg'
    }
    ,
    {
        id:1,
        name : 'Omi',
        img : './assets/img/test7.jpeg'
    }
    ,
    {
        id:1,
        name : 'Shahin',
        img : './assets/img/test6.jpeg'
    }
    ,
    {
        id:1,
        name : 'Asik',
        img : './assets/img/test3.jpeg'
    }

];

let root = $('#root');
let buttons = _$('button');

window.addEventListener('load',function(e){
    let item = generateData(projects)
    item = item.join("")
    root.innerHTML = item
})

const generateData = (projects) =>{
//  log(projects)
  return projects.map(function(project){
        return `<div class="col-md-4 mb-3">
        <img src="${project.img}" alt="" class="card-img-top">
        <h6 class="text-info mt-2">${project.name}</h6>
        </div>`
    });
}

buttons.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        let name = e.currentTarget.textContent.toLowerCase();
        // log(e.currentTarget)
        e.currentTarget.classList.add('active')
        for (let sibling of   e.currentTarget.parentNode.children) {
            if (sibling !==   e.currentTarget) sibling.classList.remove('active');
        }
        if(name === 'all'){
            let item = generateData(projects)
            item = item.join("")
            root.innerHTML = item
        }else{
            items = projects.filter(project => {
                return project.name.toLowerCase() === name;
            })
            let item = generateData(items)
            item = item.join("")
            root.innerHTML = item
        }
    });
})
