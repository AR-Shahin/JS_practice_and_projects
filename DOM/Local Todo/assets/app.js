const log = (el = 'OK!') => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)
const _ = (el) => document.createElement(el);


let alert = $('.alert');
let item = $('#item');
let form = $('form');
let tbody = $('tbody');
let formBtn = $('#formBtn');
let editFlag = false;
const database = [];
let editElement = '';

form.addEventListener('submit',(e)=>{

    e.preventDefault();
 //   log(item.value)
    if(item.value && !editFlag){
        // insert
        let id = generateUID();
        tbody.appendChild(createNewRow(id, item.value))
        item.value = '';
        // saveValueInDatabase(id , item.value);
    }else if(item.value && editFlag){
        editElement.textContent = item.value;
        defaultSetUp();
        displayAlert('Data has been Updated!','success')
    }else{
        // empty
        displayAlert('Field Must not be Empty!','danger')
    }
})

const displayAlert = (text,type) => {
    alert.classList.add(`alert-${type}`);
    alert.textContent = text;
    setTimeout(()=>{
        alert.classList.remove(`alert-${type}`);
        alert.textContent = '';
    },1000)
}

const createNewRow = (id,value) => {
    let tr = _('tr');
    tr.innerHTML = `<td>${id}</td>
    <td>${value}</td>
    <td>
        <i class="fas fa-edit text-info edit"></i>
        <i class="fas fa-trash text-danger delete"></i>
     </td>`
    let delBtn = tr.querySelector('.delete')
    delBtn.addEventListener('click',deleteRow)
    tr.querySelector('.edit').addEventListener('click',editRow)
    return tr;
}

const generateUID = () => (new Date().getTime() * (Math.floor(Math.random() * 10))) + 1

const saveValueInDatabase = (id,value) => {
    database.push({
        id : id,
        item : value
    });
    localStorage.setItem('items',database);
}

const getValueFromDatabase = () => localStorage.getItem('items');

const deleteRow = (e) => {
    let uId = e.currentTarget.parentNode.parentNode.children[0].textContent;
    e.currentTarget.parentNode.parentNode.remove()
}

const editRow = (e) => {
    let uId = e.currentTarget.parentNode.parentNode.children[0].textContent;
    editElement = e.currentTarget.parentNode.parentNode.children[1]
    editFlag = true;
    item.value = editElement.textContent;
    formBtn.textContent = 'Edit';
}

const defaultSetUp = () => {
    item.value = '';
    editFlag = false;
    formBtn.textContent = 'Submit';
}

clear.addEventListener('click',function(){
    $('table').innerHTML = ''
})

