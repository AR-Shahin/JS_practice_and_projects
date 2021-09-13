const log = (el = 'Ok!') => console.log(el);
const dir = (el) => console.dir(el);
const $ = (el) => document.querySelector(el);
const _$ = (el) => document.querySelectorAll(el);
const _ = (el) => document.createElement(el);

// select 

let form = $('form');
let name = $('#name');
let tbody = $('tbody');


form.addEventListener('submit',addNewRow)
let i = 0;
function addNewRow(e) {
    e.preventDefault();

    // create 
    let tr = _('tr');
    let td0 = _('td')
    let td1 = _('td')
    let td2 = _('td')
    let btn = _('a');

    td0.textContent = ++i;
    td1.textContent = name.value.toUpperCase();

    btn.className = 'btn btn-danger';
    btn.innerHTML = 'Delete';
    td2.appendChild(btn);

    tr.append(td0,td1,td2);
    name.value = '';

    tbody.appendChild(tr);
    
    btn.addEventListener('click',function(){
       this.parentElement.parentElement.remove()
    })
}


// Second

let formTwo = $('#formTwo');
let nameTwo = $('#nameTwo');
let ul = $('ul');

const addNewRowForUl = (e) => {
    e.preventDefault();
    
    // create 
    let li = _('li');
    li.className = 'd-flex justify-content-between my-2 border-bottom border-info pb-2';
    let nameSpan = _('span');
    nameSpan.textContent = nameTwo.value.toUpperCase();
    
    let btn = _('a');
    btn.className = 'btn btn-danger';
    btn.textContent = 'Delete';
    li.append(nameSpan,btn);
    nameTwo.value = '';

    ul.appendChild(li);

    // delete
    btn.addEventListener('click',function(){
        this.parentElement.remove()
    })
}



formTwo.addEventListener('submit',addNewRowForUl);
