let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)
let create = (data) => document.createElement(data)

//select
let form = $('#todoForm')
let name = $('#name')
let mainDiv = $('#mainDiv')

form.onsubmit = function(e){
    e.preventDefault()

    if(name.value == ''){
        alert('Field Must not be empty!')
    }else{
        //create 
        const ul = create('ul')
        ul.className = 'list-group'
        const li = create('li')
        const btn = create('a')
        li.className = 'list-group-item d-flex'
        btn.textContent = 'X'
        btn.className = 'ml-auto btn btn-danger btn-sm'
        li.textContent = name.value
        li.appendChild(btn)
        ul.appendChild(li)
        mainDiv.appendChild(ul)
        name.value = ''
        btn.addEventListener('click',function(){
            let deleteRow = this.parentElement
            ul.removeChild(deleteRow)
        });
    }
}


