const log = (el = 'Ok!') => console.log(el);
const dir = (el) => console.dir(el);
const $ = (el) => document.querySelector(el);
const _$ = (el) => document.querySelectorAll(el);
const _ = (el) => document.createElement(el);

// select 

let form = $('#addForm');
let name = $('#name');
let tbody = $('tbody');
let editForm = $('#editForm')
let editName = $('#editName')

editForm.style.display = 'none'
form.addEventListener('submit',addNewRow)
let i = 0;
function addNewRow(e) {
    e.preventDefault();

    if(name.value === ''){
        alert('Enter a Name!');
        return;
    }
    // create 
    let tr = _('tr');
    let td0 = _('td')
    let td1 = _('td')
    let td2 = _('td')
    let btn = _('a');
    let editBtn = _('a');
    let checkBtn = _('a');

    td0.textContent = ++i;
    td1.textContent = name.value.toUpperCase();

    btn.className = 'btn btn-danger';
    btn.innerHTML = 'Delete';

    editBtn.className = 'btn btn-info mx-2';
    editBtn.innerHTML = 'Edit';

    checkBtn.className = 'btn btn-success';
    checkBtn.innerHTML = 'Check';

    td2.append(checkBtn,editBtn,btn);

    tr.append(td0,td1,td2);
    name.value = '';

    tbody.appendChild(tr);
    
    btn.addEventListener('click',function(){
       this.parentElement.parentElement.remove()
    });

    checkBtn.addEventListener('click',checkRow);

    editBtn.addEventListener('click',editRowSecond);
}

const checkRow = function() {
    if(this.textContent === 'Check'){
        this.textContent = 'Uncheck';
    }else{
        this.textContent = 'Check';
    }
    this.parentNode.previousElementSibling.classList.toggle('line');
}

const editRowSecond = function(){
    name.value = this.parentNode.previousElementSibling.textContent
     this.parentNode.parentElement.remove();
}

const editRow = function () {
    editForm.style.display = 'block';
    form.style.display = 'none'

    let prevData = this.parentNode.previousElementSibling;
    editName.value = prevData.textContent;
  //  prevData.textContent = 'ata'
    log(prevData)
    editForm.addEventListener('submit',function(e){
        e.preventDefault();
         log(editName.value)
        log(prevData)
        prevData.textContent = editName.value;
        // editName.value = '';
        editForm.style.display = 'none';
        form.style.display = 'block'
    })
  //  this.parentNode.parentElement.remove();
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


let formThere = $('#addFormThird');
let nameThree = $('#nameThird');
let tbodyThird = $('#tbodyThird');

formThere.addEventListener('submit',(e)=>{
    e.preventDefault();

   let tr = _('tr');
   tr.innerHTML = createRowForThird(++i,nameThree.value);
   tbodyThird.prepend(tr)
   nameThree.value = ''

   let btn = tr.querySelector('#delBtn')
   btn.addEventListener('click',function(){
       this.parentNode.parentNode.remove()
   })
})


const createRowForThird = (id,name) => {
    return `
    <td>${id}</td>
    <td><span>${name}</span></td>
    <td>
        <button class="btn btn-sm btn-danger" id="delBtn">Delete</button>
    </td>`
}
